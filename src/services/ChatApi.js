// src/services/chatApi.js
const BASE_URL = import.meta?.env?.VITE_AI_API_URL || "http://localhost:5000";

export async function askAssistant(message, history = []) {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });
  if (!res.ok) {
    throw new Error("Failed to reach AI server");
  }
  return res.json(); // { reply }
}
