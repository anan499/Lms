// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  BellIcon,
  PencilSquareIcon,
  InformationCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import CoursesDropdown from "./components/CoursesDropdown";

export default function Navbar() {
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch notifications (mock API call, replace with your backend)
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Replace this with your real backend API
        const response = await fetch("https://mockapi.io/notifications"); 
        const data = await response.json();

        setNotifications(data);
        setUnreadCount(data.filter((n) => !n.read).length); // count unread
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();

    // Poll every 30s for new updates
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  const toggleNotifications = () => {
    setIsOpen((prev) => !prev);

    // Mark all as read (optional)
    setUnreadCount(0);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm border-b border-gray-200 relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 tracking-tight hover:tracking-wide transition-all duration-200">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          alt="French flag"
          className="w-5 h-5 rounded-sm border border-gray-300"
        />
        Let’s Learn French
      </div>

      {/* Middle: Navigation */}
      <nav className="hidden md:flex space-x-4 text-sm font-medium relative">
        <Link
          to="/dashboard"
          className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition px-2 py-1 rounded hover:bg-blue-50"
        >
          <HomeIcon className="w-3.5 h-3.5" /> Home
        </Link>

        <CoursesDropdown />

        <Link
          to="/explore"
          className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition px-2 py-1 rounded hover:bg-blue-50"
        >
          <MagnifyingGlassIcon className="w-3.5 h-3.5" /> Explore
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition px-2 py-1 rounded hover:bg-blue-50"
        >
          <Cog6ToothIcon className="w-3.5 h-3.5" /> Settings
        </Link>

        <Link
          to="/exams"
          className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition px-2 py-1 rounded hover:bg-blue-50"
        >
          <PencilSquareIcon className="w-3.5 h-3.5" /> Exams
        </Link>

        <Link
          to="/about"
          className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition px-2 py-1 rounded hover:bg-blue-50"
        >
          <InformationCircleIcon className="w-3.5 h-3.5" /> About Us
        </Link>

        <Link
          to="/terms"
          className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition px-2 py-1 rounded hover:bg-blue-50"
        >
          <DocumentTextIcon className="w-3.5 h-3.5" /> Terms & Conditions
        </Link>
      </nav>

      {/* Right: Search + Icons + Logout + Avatar */}
      <div className="flex items-center space-x-3 relative">
        <div className="relative hidden lg:block">
          <MagnifyingGlassIcon className="absolute w-3.5 h-3.5 left-3 top-1.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 w-40 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={toggleNotifications}
            className="relative p-1.5 rounded-full hover:bg-gray-100 transition"
          >
            <BellIcon className="w-4 h-4 text-gray-700" />
            {unreadCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[10px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Dropdown Notifications */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              <div className="p-2 font-semibold border-b">Notifications</div>
              {notifications.length > 0 ? (
                notifications.map((n, idx) => (
                  <div
                    key={idx}
                    className={`p-2 text-sm ${
                      n.read ? "text-gray-500" : "text-gray-800 font-medium"
                    } hover:bg-gray-50`}
                  >
                    {n.message}
                  </div>
                ))
              ) : (
                <div className="p-2 text-sm text-gray-500">No notifications</div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition text-xs shadow-sm"
        >
          Logout
        </button>

        <div className="w-7 h-7 bg-gray-300 rounded-full overflow-hidden border border-gray-200">
          <img
            src="https://via.placeholder.com/28"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
