// src/components/Chatbot.jsx
import React, { useEffect, useRef, useState } from "react";
import { askAssistant } from "../services/ChatApi";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    // persist across reloads
    const saved = localStorage.getItem("ai_chat_history");
    return saved ? JSON.parse(saved) : [
      { role: "assistant", content: "Salut ! Pose-moi une question de français 😊" }
    ];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("ai_chat_history", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function onSend(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const { reply } = await askAssistant(text, next);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages([
        ...next,
        { role: "assistant", content: "Oops, server error. Try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const quickChips = [
    "How to use passé composé?",
    "Explain articles: le / la / les",
    "Give me numbers 1–20",
    "Polite greeting examples",
  ];

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 rounded-full px-5 py-3 shadow-lg
                   bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        aria-label="Open AI Assistant"
      >
        {open ? "Close ✖" : "Ask AI 🤖"}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[min(420px,95vw)] h-[520px]
                        bg-white/80 dark:bg-gray-800/90 backdrop-blur-md border
                        border-white/30 shadow-2xl rounded-2xl flex flex-col">
          <div className="px-4 py-3 border-b border-white/30 flex items-center justify-between">
            <div className="font-semibold text-gray-800 dark:text-gray-100">French Tutor Assistant</div>
            <button
              className="text-xs text-blue-600 hover:underline"
              onClick={() => { setMessages([{ role: "assistant", content: "New chat started. Bonjour !" }]); }}
            >
              Reset
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl text-sm
                  ${m.role === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "mr-auto bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 border border-white/30"
                  }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto bg-white/80 dark:bg-gray-700/80 px-3 py-2 rounded-xl text-sm">
                Typing…
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick chips */}
          <div className="px-3 pb-2 flex flex-wrap gap-2">
            {quickChips.map((q) => (
              <button
                key={q}
                onClick={() => setInput(q)}
                className="text-xs px-2 py-1 rounded-full border border-blue-300 text-blue-700
                           hover:bg-blue-50 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-blue-900/30"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={onSend} className="p-3 border-t border-white/30 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a grammar/vocab question…"
              className="flex-1 rounded-lg px-3 py-2 bg-white/70 dark:bg-gray-700/70
                         outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
