import React, { useState } from "react";
import jsPDF from "jspdf";
import { BookOpen, Headphones, PenTool, Film } from "lucide-react";

export default function FrenchBasics() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => setIsSubmitted(true);

  // ✅ Function to download PDF notes
  const downloadNotes = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("🇫🇷 French Basics Notes", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const sections = [
      {
        title: "👋 Greetings",
        content: [
          "Bonjour – Hello / Good morning",
          "Bonsoir – Good evening",
          "Salut – Hi",
          "Au revoir – Goodbye",
          "Bonne nuit – Good night",
          "Comment ça va ? – How are you?",
          "Ça va bien – I’m fine",
        ],
      },
      {
        title: "🔢 Numbers",
        content: ["Un – 1, Deux – 2, Trois – 3, Quatre – 4, Cinq – 5", "Dix – 10, Vingt – 20"],
      },
      {
        title: "📅 Days of the Week",
        content: [
          "Lundi – Monday, Mardi – Tuesday, Mercredi – Wednesday, Jeudi – Thursday",
          "Vendredi – Friday, Samedi – Saturday, Dimanche – Sunday",
        ],
      },
      {
        title: "🌈 Colors",
        content: ["Rouge – Red, Bleu – Blue, Vert – Green, Jaune – Yellow", "Noir – Black, Blanc – White"],
      },
      {
        title: "🍽️ Food Vocabulary",
        content: ["Pain – Bread, Fromage – Cheese, Lait – Milk", "Eau – Water, Vin – Wine, Pomme – Apple"],
      },
      {
        title: "🧑 Personal Pronouns",
        content: [
          "Je – I, Tu – You (informal), Il – He, Elle – She",
          "Nous – We, Vous – You (formal/plural), Ils/Elles – They",
        ],
      },
      {
        title: "🗣️ Common Phrases",
        content: [
          "Merci – Thank you",
          "S'il vous plaît – Please",
          "Excusez-moi – Excuse me",
          "Je ne comprends pas – I don't understand",
          "Parlez-vous anglais ? – Do you speak English?",
        ],
      },
      {
        title: "🔤 Simple Sentences",
        content: [
          "Je m'appelle Marie. – My name is Marie.",
          "J'aime le chocolat. – I like chocolate.",
          "Il fait beau aujourd'hui. – It's nice weather today.",
        ],
      },
    ];

    let y = 30;
    sections.forEach((section) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(section.title, 20, y);
      y += 10;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      section.content.forEach((line) => {
        doc.text(`- ${line}`, 20, y);
        y += 10;
      });

      y += 5;
    });

    doc.save("French_Basics_Notes.pdf");
  };

  const sections = [
    {
      title: "👋 Greetings",
      items: [
        "Bonjour – Hello / Good morning",
        "Bonsoir – Good evening",
        "Salut – Hi",
        "Au revoir – Goodbye",
        "Bonne nuit – Good night",
        "Comment ça va ? – How are you?",
        "Ça va bien – I’m fine",
      ],
    },
    {
      title: "🔢 Numbers",
      items: ["Un – 1", "Deux – 2", "Trois – 3", "Quatre – 4", "Cinq – 5", "Dix – 10", "Vingt – 20"],
    },
    {
      title: "📅 Days of the Week",
      items: [
        "Lundi – Monday",
        "Mardi – Tuesday",
        "Mercredi – Wednesday",
        "Jeudi – Thursday",
        "Vendredi – Friday",
        "Samedi – Saturday",
        "Dimanche – Sunday",
      ],
    },
    {
      title: "🌈 Colors",
      items: ["Rouge – Red", "Bleu – Blue", "Vert – Green", "Jaune – Yellow", "Noir – Black", "Blanc – White"],
    },
    {
      title: "🍽️ Food Vocabulary",
      items: ["Pain – Bread", "Fromage – Cheese", "Lait – Milk", "Eau – Water", "Vin – Wine", "Pomme – Apple"],
    },
    {
      title: "🧑 Personal Pronouns",
      items: ["Je – I", "Tu – You", "Il – He", "Elle – She", "Nous – We", "Vous – You", "Ils/Elles – They"],
    },
    {
      title: "🗣️ Common Phrases",
      items: ["Merci – Thank you", "S'il vous plaît – Please", "Excusez-moi – Excuse me", "Je ne comprends pas – I don't understand", "Parlez-vous anglais ? – Do you speak English?"],
    },
    {
      title: "🔤 Simple Sentences",
      items: ["Je m'appelle Marie. – My name is Marie.", "J'aime le chocolat. – I like chocolate.", "Il fait beau aujourd'hui. – It's nice weather today."],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 🎨 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 animate-gradient-x"></div>

      {/* Floating Icons */}
      <BookOpen className="absolute w-16 h-16 top-10 left-10 text-white/30 animate-float-slow" />
      <Headphones className="absolute w-14 h-14 bottom-20 left-1/4 text-white/20 animate-float-medium" />
      <PenTool className="absolute w-12 h-12 top-1/3 right-10 text-white/25 animate-float-fast" />
      <Film className="absolute w-20 h-20 bottom-10 right-1/4 text-white/20 animate-float-slow" />

      {/* Content */}
      <div className="relative z-10 p-8 max-w-4xl mx-auto bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">🇫🇷 French Basics</h1>

        {/* Download Notes */}
        <div className="text-center">
          <button
            onClick={downloadNotes}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            📄 Download PDF Notes
          </button>
        </div>

        {/* Sections */}
        {sections.map((section, idx) => (
          <section key={idx} className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-xl shadow mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-1">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        {/* Video Lecture */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">🎥 Video Lecture</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/your_video_id_here"
              title="French Basics Lecture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="mt-8 p-4 border rounded-lg bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100">
          <h2 className="text-xl font-semibold mb-3">📝 Quick Quiz</h2>
          <p className="mb-2">What does <strong>"Bonjour"</strong> mean?</p>
          <div className="space-y-2">
            {["Goodbye", "Good morning / Hello", "Good night", "Thank you"].map((option, idx) => (
              <label key={idx} className="block">
                <input
                  type="radio"
                  name="quiz"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
          {isSubmitted && (
            <p className="mt-3 font-medium">
              {selectedAnswer === "Good morning / Hello"
                ? "✅ Correct! Bonjour means Good morning / Hello."
                : "❌ Oops! The correct answer is 'Good morning / Hello'."}
            </p>
          )}
        </section>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-gradient-x {
            background-size: 300% 300%;
            animation: gradient-x 10s ease infinite;
          }
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-float-slow { animation: float 12s ease-in-out infinite; }
          .animate-float-medium { animation: float 8s ease-in-out infinite; }
          .animate-float-fast { animation: float 5s ease-in-out infinite; }
          @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
        `}
      </style>
    </div>
  );
}
