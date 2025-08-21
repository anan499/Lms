// src/components/AdvancedFrench.jsx
import React from "react";
import jsPDF from "jspdf";

export default function AdvancedFrench() {
  // ✅ Function to generate and download PDF notes
  const downloadNotes = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("🇫🇷 Advanced French Notes", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text("📖 Advanced Grammar", 20, 40);
    doc.text("- Subjunctive mood (Le subjonctif)", 20, 50);
    doc.text("- Past conditional (Conditionnel passé)", 20, 60);
    doc.text("- Relative pronouns (dont, lequel, auquel)", 20, 70);

    doc.text("💡 Expressions & Idioms", 20, 90);
    doc.text("- “Coup de foudre” – Love at first sight", 20, 100);
    doc.text("- “Appeler un chat un chat” – To call a spade a spade", 20, 110);
    doc.text("- “Avoir le cafard” – To feel down", 20, 120);

    doc.save("Advanced_French_Notes.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">
          🇫🇷 Advanced French
        </h1>
        <p className="mb-6 text-gray-700 text-center">
          Welcome to the <span className="font-semibold">Advanced French</span> course! 🎓  
          Here you’ll master complex grammar, advanced vocabulary, idioms, and conversational fluency.
        </p>

        {/* ✅ Download Notes Button */}
        <div className="text-center mb-8">
          <button
            onClick={downloadNotes}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            📄 Download PDF Notes
          </button>
        </div>

        {/* 📖 Advanced Grammar */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-purple-700">
            📖 Advanced Grammar
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>Subjunctive mood (Le subjonctif)</li>
            <li>Past conditional (Conditionnel passé)</li>
            <li>Relative pronouns (dont, lequel, auquel)</li>
          </ul>
        </section>

        {/* 💡 Expressions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-pink-700">
            💡 Expressions & Idioms
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-1">
            <li>“Coup de foudre” – Love at first sight</li>
            <li>“Appeler un chat un chat” – To call a spade a spade</li>
            <li>“Avoir le cafard” – To feel down</li>
          </ul>
        </section>

        {/* 🎥 Lectures */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
            🎥 Video Lectures
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Lecture 1 */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-52"
                src="https://www.youtube.com/embed/Iv6_Ec7yyYU"
                title="Advanced French Lesson 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold">▶ Watch Lesson 1</span>
              </div>
            </div>

            {/* Lecture 2 */}
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-52"
                src="https://www.youtube.com/embed/6Z9j6Jz2G6c"
                title="Advanced French Lesson 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold">▶ Watch Lesson 2</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
