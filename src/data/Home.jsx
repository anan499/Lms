// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Let’s Learn French</h1>
      <p className="text-gray-700 text-lg text-center max-w-xl">
        Start your French learning journey today! Explore courses, practice exams, and interactive lessons tailored for all levels: A1, A2, B1, and B2.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/courses"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Explore Courses
        </a>
        <a
          href="/exams"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Take Exams
        </a>
      </div>
    </div>
  );
}
