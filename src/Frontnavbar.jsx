import React from "react";

const Frontnavbar = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-lg font-bold flex items-center gap-2">
          Learning Management System
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
            alt="French Flag"
            className="w-6 h-4"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            ℹ️ About Us
          </a>
          <a
            href="/terms"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            📜 Terms & Conditions
          </a>
          <a
            href="/exams"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            📝 Exams
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Frontnavbar;
