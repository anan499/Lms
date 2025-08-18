// Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Chatbot from "./components/Chatbot";

export default function Dashboard() {
  const [completedVideos, setCompletedVideos] = useState({});
  const [notes, setNotes] = useState({});
  const [studyHours, setStudyHours] = useState(0);

  // ✅ Categories (unchanged)
  const categories = {
    "Intermediate French": [
      { id: 6, title: "Past & Future Tenses", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 7, title: "Conversational Practice", video: "https://www.w3schools.com/html/movie.mp4" },
      { id: 8, title: "Question Formation", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 9, title: "Daily Life Vocabulary", video: "https://www.w3schools.com/html/movie.mp4" },
    ],
    "Advanced French": [
      { id: 10, title: "Subjunctive Mood", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 11, title: "Idioms & Expressions", video: "https://www.w3schools.com/html/movie.mp4" },
      { id: 12, title: "Debating in French", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 13, title: "Listening Comprehension", video: "https://www.w3schools.com/html/movie.mp4" },
    ],
    "French Culture & Lifestyle": [
      { id: 14, title: "French Cuisine Vocabulary", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 15, title: "French Art & Cinema", video: "https://www.w3schools.com/html/movie.mp4" },
      { id: 16, title: "French History Basics", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 17, title: "Traditions & Festivals", video: "https://www.w3schools.com/html/movie.mp4" },
    ],
    "Exam Preparation (DELF/DALF)": [
      { id: 18, title: "DELF A1 Practice", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 19, title: "DELF B2 Practice", video: "https://www.w3schools.com/html/movie.mp4" },
      { id: 20, title: "DALF C1 Listening Exercises", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 21, title: "Mock Exams", video: "https://www.w3schools.com/html/movie.mp4" },
    ],
  };

  const allVideos = Object.values(categories).flat();
  const totalVideos = allVideos.length;
  const completedCount = Object.values(completedVideos).filter(Boolean).length;

  // ✅ Toggle Completion & Add Study Time
  const toggleComplete = (id) => {
    setCompletedVideos((prev) => {
      const isCompleted = !prev[id];

      if (isCompleted) {
        // Each video completion = 0.5 hours (demo logic, can adjust)
        setStudyHours((h) => h + 0.5);
      } else {
        setStudyHours((h) => Math.max(0, h - 0.5));
      }

      return {
        ...prev,
        [id]: isCompleted,
      };
    });
  };

  const handleNoteChange = (id, value) => {
    setNotes((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-white to-red-500">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white/60 backdrop-blur-md shadow-lg border-r border-gray-200 p-4 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-lg font-bold text-blue-700 mb-4">📚 Course Categories</h2>
          <ul className="space-y-3">
            <li className="p-2 rounded-lg bg-blue-100/60 hover:bg-blue-200/70 cursor-pointer transition">
              <Link to="/beginner-french">Beginner French</Link>
            </li>

            {Object.keys(categories).map((category, idx) => (
              <li
                key={idx}
                className="p-2 rounded-lg bg-blue-100/60 hover:bg-blue-200/70 cursor-pointer transition"
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-lg">
            🇫🇷 French Learning Dashboard
          </h1>

          {/* ✅ Progress Tracking */}
          <div className="mb-8 p-6 bg-white/70 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Progress</h2>
            <p className="text-gray-600 mb-2">
              Completed <span className="font-bold">{completedCount}</span> / {totalVideos} videos
            </p>

            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="bg-green-500 h-4 transition-all"
                style={{ width: `${(completedCount / totalVideos) * 100}%` }}
              />
            </div>

            <p className="mt-4 text-lg font-medium text-blue-700">
              ⏳ Study Hours: {studyHours.toFixed(1)} hrs
            </p>
          </div>

          {/* ✅ Courses */}
          {Object.entries(categories).map(([category, videos]) => (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">{category}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex flex-col justify-between p-4 border rounded-lg shadow-xl bg-white/70 backdrop-blur-sm min-h-[420px] transition hover:shadow-2xl"
                  >
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">{video.title}</h3>

                      <video controls className="w-full rounded-lg mb-3 h-40 object-cover">
                        <source src={video.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="mt-auto">
                      <button
                        onClick={() => toggleComplete(video.id)}
                        className={`px-4 py-2 rounded text-sm font-medium transition w-full ${
                          completedVideos[video.id]
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {completedVideos[video.id] ? "Completed ✅" : "Mark as Complete"}
                      </button>

                      <textarea
                        value={notes[video.id] || ""}
                        onChange={(e) => handleNoteChange(video.id, e.target.value)}
                        placeholder="Write your notes here..."
                        className="mt-3 w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-blue-400 bg-white/70 backdrop-blur-sm"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* ✅ Floating Chatbot */}
      <Chatbot />
    </div>
  );
}
