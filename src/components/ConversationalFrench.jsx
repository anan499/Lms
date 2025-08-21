// src/components/ConversationalFrench.jsx
import React from "react";
import jsPDF from "jspdf";

export default function ConversationalFrench() {
  // ✅ Function to generate and download PDF
  const downloadNotes = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("🇫🇷 Conversational French Notes", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    doc.text("📖 Quick Grammar & Phrases", 20, 40);
    doc.text("- Ordering at a café: \"Je voudrais un café, s'il vous plaît.\"", 20, 50);
    doc.text("- Introducing yourself: \"Je m'appelle Marie. Enchanté(e).\"", 20, 60);
    doc.text("- Asking for directions: \"Où est la gare, s'il vous plaît?\"", 20, 70);

    doc.text("💡 Useful Tips:", 20, 90);
    doc.text("- Practice with real dialogues daily.", 20, 100);
    doc.text("- Repeat after audio for pronunciation.", 20, 110);

    // ✅ Save file
    doc.save("Conversational_French_Notes.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-200 p-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          🇫🇷 Conversational French
        </h1>
        <p className="text-gray-700 text-center text-lg">
          Welcome to the Conversational French course! 💬 Here we’ll practice
          real-life dialogues, improve listening skills, and boost your speaking
          confidence.
        </p>

        {/* ✅ Download Notes Button */}
        <div className="text-center">
          <button
            onClick={downloadNotes}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            📄 Download PDF Notes
          </button>
        </div>

        {/* Section 1 */}
        <section className="bg-gradient-to-r from-blue-200 to-blue-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">🗣️ Everyday Dialogues</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Ordering at a café ☕</li>
            <li>Introducing yourself 👋</li>
            <li>Asking for directions 🗺️</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-gradient-to-r from-pink-200 to-pink-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">🎧 Listening Practice</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Short French conversations with subtitles</li>
            <li>Role-play exercises with a partner</li>
            <li>Common phrases for travelers</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-gradient-to-r from-purple-200 to-purple-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">🎥 Video Lesson</h2>
          <div className="mt-2 relative group">
            {/* Hover effect with play button */}
            <iframe
              className="w-full h-64 rounded-xl shadow-lg group-hover:opacity-80 transition"
              src="https://www.youtube.com/embed/1XmvXwAEB4g"
              title="Conversational French Lesson"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="bg-black/60 text-white px-6 py-2 rounded-full text-lg font-semibold">
                ▶ Play Lesson
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
