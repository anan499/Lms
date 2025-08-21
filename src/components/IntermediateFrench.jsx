// src/components/IntermediateFrench.jsx
import React from "react";
import jsPDF from "jspdf";

export default function IntermediateFrench() {
  // ✅ Function to download PDF notes
  const downloadNotes = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("🇫🇷 Intermediate French Notes", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text("📖 Quick Grammar & Phrases", 20, 40);
    doc.text("- Passé Composé: 'J'ai mangé une pomme.'", 20, 50);
    doc.text("- Reflexive Verbs: 'Je me lève à sept heures.'", 20, 60);
    doc.text("- Futur Simple: 'Demain, je visiterai Paris.'", 20, 70);

    doc.text("💡 Tips:", 20, 90);
    doc.text("- Practice daily for retention.", 20, 100);
    doc.text("- Repeat aloud to improve pronunciation.", 20, 110);

    doc.save("Intermediate_French_Notes.pdf");
  };

  // ✅ Section-wise topics
  const sections = [
    {
      title: "📖 Passé Composé (Past Tense)",
      items: [
        "Hier, j’ai mangé une pomme. → Yesterday, I ate an apple.",
        "Il a regardé un film. → He watched a movie.",
      ],
    },
    {
      title: "🧑 Verbes Réflexifs (Reflexive Verbs)",
      items: [
        "Je me lève à sept heures. → I get up at seven o’clock.",
        "Elle se prépare pour l’école. → She gets ready for school.",
      ],
    },
    {
      title: "🔮 Futur Simple (Future Tense)",
      items: [
        "Demain, je visiterai Paris. → Tomorrow, I will visit Paris.",
        "Nous apprendrons le français. → We will learn French.",
      ],
    },
  ];

  // ✅ Video lectures
  const videos = [
    { title: "Les Verbes Pronominaux", url: "https://www.youtube.com/embed/RG0lS8gJ5zM" },
    { title: "Le Passé Composé", url: "https://www.youtube.com/embed/3Lrrx2wL9xI" },
    { title: "Les Prépositions Avancées", url: "https://www.youtube.com/embed/q7Jt1Z8GxgY" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-10 px-4">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 space-y-6 mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          🇫🇷 Intermediate French
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Welcome to the Intermediate French course! 🎓  
          Here you'll practice past tense, reflexive verbs, future tense, and more.
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

        {/* ✅ Sections */}
        {sections.map((section, idx) => (
          <section
            key={idx}
            className="mb-6 bg-gradient-to-r from-blue-200 to-blue-100 p-4 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-1">
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        {/* ✅ Video Lectures */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">🎥 Video Lectures</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {videos.map((video, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-52"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-lg font-semibold">▶ Watch {video.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
