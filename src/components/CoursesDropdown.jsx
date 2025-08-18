// src/components/CoursesDropdown.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import courses from "../data/courses";

export default function CoursesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-50">
        <BookOpenIcon className="w-3.5 h-3.5" />
        My Courses
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 shadow-lg rounded z-10 min-w-[160px]">
          {courses.map((course) => (
            <Link
              key={course.name}
              to={course.link}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500 text-sm"
            >
              {course.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
