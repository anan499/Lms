// src/components/CoursesDropdown.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function CoursesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // ✅ List of courses
  const courses = [
    { name: "French Basics", link: "/french-basics" },
    { name: "Intermediate French", link: "/intermediate-french" },
    { name: "Advanced French", link: "/advanced-french" },
    { name: "Conversational French", link: "/conversational-french" },
  ];

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition-colors duration-200 px-2 py-1 rounded hover:bg-blue-50"
      >
        <BookOpenIcon className="w-4 h-4" />
        My Courses
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 shadow-lg rounded z-10 min-w-[180px]">
          {courses.map((course) => (
            <button
              key={course.name}
              onClick={() => {
                navigate(course.link); // ✅ Redirect to page
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500 text-sm"
            >
              {course.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
