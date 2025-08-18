// src/coursecategorysidebar/BeginnerFrench.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BeginnerFrench() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-white to-red-500 p-6">
      {/* Back to Dashboard */}
      <Link
        to="/dashboard"
        className="text-blue-600 underline hover:text-blue-800"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        🇫🇷 Beginner French Lessons
      </h1>

      {/* Video Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/1j5U9kSfs3A"
            title="Beginner French Lesson 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h2 className="text-lg font-bold">Lesson 1: Greetings</h2>
            <p className="text-gray-600">Learn how to greet people in French.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/3pS0ssoG83M"
            title="Beginner French Lesson 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="p-4">
            <h2 className="text-lg font-bold">Lesson 2: Basic Phrases</h2>
            <p className="text-gray-600">Essential phrases for daily use.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
