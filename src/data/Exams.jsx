// src/pages/Exams.jsx
import React from "react";
import {
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const exams = [
  {
    level: "A1",
    description:
      "Basic French knowledge: simple phrases, greetings, and introductions.",
    color: "bg-blue-500",
    icon: BookOpenIcon,
  },
  {
    level: "A2",
    description:
      "Elementary French: understand sentences and frequently used expressions.",
    color: "bg-green-500",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    level: "B1",
    description:
      "Intermediate French: handle most situations when traveling, express opinions.",
    color: "bg-yellow-500",
    icon: AcademicCapIcon,
  },
  {
    level: "B2",
    description:
      "Upper Intermediate French: understand complex texts and interact fluently.",
    color: "bg-red-500",
    icon: TrophyIcon,
  },
];

export default function Exams() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 overflow-hidden">
      {/* === Animated Pattern === */}
      <div className="absolute inset-0 opacity-20 pointer-events-none animate-[movePattern_30s_linear_infinite]">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* === Content === */}
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 drop-shadow-md">
          French Exam Levels 🇫🇷
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exams.map((exam) => {
            const Icon = exam.icon;
            return (
              <div
                key={exam.level}
                className="rounded-2xl p-6 shadow-lg backdrop-blur-md bg-white/60 border border-white/40
                           transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`${exam.color} text-white w-10 h-10 flex items-center justify-center rounded-full`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{exam.level}</h2>
                </div>
                <p className="text-gray-700 text-sm mb-6">{exam.description}</p>
                <button
                  className="w-full py-2 rounded-lg text-white font-medium transition 
                             bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90"
                >
                  Take Exam
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
