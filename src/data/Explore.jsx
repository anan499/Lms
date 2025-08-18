// src/pages/Explore.jsx
import React from "react";
import { BookOpen, MessageSquare, Globe } from "lucide-react"; // icons

export default function Explore() {
  const courses = [
    {
      title: "French Basics",
      description: "Start learning essential vocabulary, grammar, and pronunciation.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "French Conversation",
      description: "Improve fluency and confidence with real-life speaking practice.",
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Travel French",
      description: "Learn phrases and expressions for traveling in French-speaking countries.",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Explore Courses
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Discover new learning paths and start your French journey ✨
        </p>
      </div>

      {/* Courses grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-4">
              {course.icon}
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              {course.title}
            </h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {course.description}
            </p>
            <button className="mt-4 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
