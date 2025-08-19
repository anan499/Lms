// Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Chatbot from "./components/Chatbot";

export default function Dashboard() {
  const [completedLessons, setCompletedLessons] = useState({});
  const [studyHours, setStudyHours] = useState(0);

  //  To-Do state
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //  Track which syllabus is open
  const [openLesson, setOpenLesson] = useState(null);

  //  Motivation Quote
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "Learning a new language is like gaining a new soul. 🌍",
      "Consistency beats intensity — study a little every day. 📖",
      "Mistakes are proof that you are trying. 💪",
      "The limits of your language are the limits of your world. ✨",
      "Practice makes progress, not perfection. 🎯",
    ];

    const today = new Date().toISOString().split("T")[0]; 
    const savedData = JSON.parse(localStorage.getItem("dailyQuote")) || {};

    if (savedData.date === today) {
      setQuote(savedData.quote);
    } else {
      const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(newQuote);
      localStorage.setItem("dailyQuote", JSON.stringify({ date: today, quote: newQuote }));
    }
  }, []);

  const categories = {
    "Intermediate French": [
      {
        id: 1,
        title: "Past & Future Tenses",
        syllabus: [
          { week: "Week 1", topics: ["Passé Composé basics", "Regular verbs"], exercise: "Translate 5 sentences" },
          { week: "Week 2", topics: ["Imparfait vs Passé Composé", "Storytelling practice"], exercise: "Write a past event" },
          { week: "Week 3", topics: ["Futur Proche & Futur Simple"], exercise: "Describe your weekend plans" },
        ],
      },
      {
        id: 2,
        title: "Conversational Practice",
        syllabus: [
          { week: "Week 1", topics: ["Greetings", "Introducing Yourself"], exercise: "Practice dialogues" },
          { week: "Week 2", topics: ["Ordering food", "Shopping vocabulary"], exercise: "Roleplay restaurant scene" },
          { week: "Week 3", topics: ["Travel & Directions"], exercise: "Ask & give directions" },
        ],
      },
    ],
    "Advanced French": [
      {
        id: 3,
        title: "Subjunctive Mood",
        syllabus: [
          { week: "Week 1", topics: ["When to use Subjunctive"], exercise: "10 subjunctive sentences" },
          { week: "Week 2", topics: ["Expressions requiring subjunctive"], exercise: "Dialogue with wishes/doubts" },
          { week: "Week 3", topics: ["Subjunctive vs Indicative"], exercise: "Compare both moods" },
        ],
      },
      {
        id: 4,
        title: "Idioms & Expressions",
        syllabus: [
          { week: "Week 1", topics: ["Daily expressions", "Proverbs"], exercise: "Learn 5 idioms & use them" },
          { week: "Week 2", topics: ["Colloquial speech"], exercise: "Roleplay casual conversation" },
          { week: "Week 3", topics: ["Regional expressions"], exercise: "Identify idioms by region" },
        ],
      },
    ],
  };

  const allLessons = Object.values(categories).flat();
  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  const progress = Math.round((completedCount / allLessons.length) * 100);

  const toggleComplete = (id) => {
    setCompletedLessons((prev) => {
      const isCompleted = !prev[id];
      setStudyHours((h) => (isCompleted ? h + 1 : Math.max(0, h - 1)));
      return { ...prev, [id]: isCompleted };
    });
  };

  // To-Do Functions
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white shadow-lg border-r p-4 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📚 Course Categories</h2>
          <ul className="space-y-3">
            <li className="p-2 rounded-lg bg-blue-100/60 hover:bg-blue-200/70 cursor-pointer transition">
              <Link to="/beginner-french">Beginner French</Link>
            </li>

            {Object.keys(categories).map((category, idx) => (
              <li
                key={idx}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            🇫🇷 French Learning Dashboard
          </h1>

          {/* Motivation of the Day */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-2">💡 Motivation of the Day</h2>
              <p className="italic">{quote}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">📈 Your Progress</h2>
              <div className="w-full bg-gray-200 rounded-lg h-6 mb-3">
                <div
                  className="bg-blue-500 h-6 rounded-lg transition-all"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 font-medium">{progress}% Completed</p>
              <p className="text-sm text-gray-500">
                {completedCount} of {allLessons.length} lessons
              </p>
            </div>

            {/* Study Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">⏳ Daily Study Hours</h2>
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-green-400 text-2xl font-bold text-green-600">
                {studyHours}
              </div>
              <p className="text-gray-600 mt-3">hours logged today</p>
            </div>
          </div>

          {/* Lessons List with Syllabus */}
          {Object.entries(categories).map(([category, lessons]) => (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4">
                    {/* Lesson Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{lesson.title}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleComplete(lesson.id)}
                          className={`px-3 py-1 rounded text-sm font-medium transition ${
                            completedLessons[lesson.id]
                              ? "bg-green-500 text-white hover:bg-green-600"
                              : "bg-blue-500 text-white hover:bg-blue-600"
                          }`}
                        >
                          {completedLessons[lesson.id] ? "Completed" : "Mark Complete"}
                        </button>
                        <button
                          onClick={() =>
                            setOpenLesson(openLesson === lesson.id ? null : lesson.id)
                          }
                          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        >
                          {openLesson === lesson.id ? "Hide Syllabus" : "View Syllabus"}
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Syllabus */}
                    {openLesson === lesson.id && (
                      <div className="mt-3 bg-gray-50 rounded-lg p-3 text-sm">
                        {lesson.syllabus.map((week, idx) => (
                          <div key={idx} className="mb-3">
                            <h4 className="font-semibold text-gray-700">{week.week}</h4>
                            <ul className="list-disc ml-5 text-gray-600">
                              {week.topics.map((t, i) => (
                                <li key={i}>{t}</li>
                              ))}
                            </ul>
                            <p className="mt-1 text-blue-600">✏️ Exercise: {week.exercise}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Chatbot */}
          <div className="mt-10">
            <Chatbot />
          </div>
        </main>
      </div>

      {    }
      <Chatbot />
    </div>
  );
}
