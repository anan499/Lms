// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
  })
);

// --- OpenAI client ---
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// POST /chat  -> { message: string, history?: [{role, content}] }
app.post("/chat", async (req, res) => {
  try {
    console.log("api key is " + process.env.OPENAI_API_KEY);
    const { message, history = [] } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required" });
    }

    const systemPrompt =
      "You are a friendly French tutor. Be concise, explain with examples, and include small French snippets with English gloss. If user asks grammar, show 1–3 short examples.";

    const messages = [
      { role: "system", content: systemPrompt },
      // keep only last 12 messages for context
      ...history.slice(-12),
      { role: "user", content: message },
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.4,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Désolé, je n’ai pas pu répondre.";
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI provider error." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ AI server running at http://localhost:${PORT}`)
);
