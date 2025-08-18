// src/pages/About.jsx
import React from "react";
import {
  GlobeAltIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 drop-shadow">
          About Us 🌍
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Let’s Learn French</span>!  
          Our mission is to make learning French simple, interactive, and enjoyable for everyone.  
          From beginners to advanced learners, we provide structured courses, practice exams, and tools to help you progress confidently.
        </p>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Website Purpose */}
          <div className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">
            <GlobeAltIcon className="w-10 h-10 text-indigo-500 mb-3" />
            <h2 className="text-2xl font-semibold mb-2">Our Website</h2>
            <p className="text-gray-600 text-sm">
              We offer video lessons, interactive exercises, exams, and progress tracking.  
              Our platform builds confidence in speaking, reading, and writing French.
            </p>
          </div>

          {/* Team */}
          <div className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">
            <UserGroupIcon className="w-10 h-10 text-pink-500 mb-3" />
            <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
            <p className="text-gray-600 text-sm">
              Our passionate educators, developers, and creators constantly update and refine our courses to keep learning fresh and effective.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">
            <LightBulbIcon className="w-10 h-10 text-yellow-500 mb-3" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600 text-sm">
              To create a global community of French learners, breaking barriers with language and culture while keeping learning fun and modern.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">
            <ChatBubbleLeftRightIcon className="w-10 h-10 text-green-500 mb-3" />
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>Interactive and engaging lessons</li>
              <li>AI-powered practice & instant feedback</li>
              <li>Progress tracking dashboard</li>
              <li>Community support & discussions</li>
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Learners Say 💬
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sophie L.",
                feedback:
                  "This platform made learning French fun and easy. The practice exams really boosted my confidence!",
              },
              {
                name: "Arjun M.",
                feedback:
                  "I love the structured lessons and friendly community. It feels like I’m learning with friends.",
              },
              {
                name: "Emma R.",
                feedback:
                  "The progress tracker keeps me motivated every day. Definitely the best French learning site I’ve tried.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition"
              >
                <StarIcon className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-gray-600 text-sm italic">"{t.feedback}"</p>
                <p className="text-gray-800 font-semibold mt-3">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 p-6 rounded-2xl shadow-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Contact Us 📩</h2>
          <p>
            Have questions or suggestions? Reach out at{" "}
            <span className="font-semibold">support@letslearnfrench.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
