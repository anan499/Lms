// src/pages/Settings.jsx
import React from "react";
import { User, Shield, Bell, Globe, Moon } from "lucide-react"; // icons
import { Link } from "react-router-dom";

export default function Settings() {
  const settings = [
    {
      title: "Profile Settings",
      description: "Update your personal information and profile picture.",
      icon: <User className="w-7 h-7 text-blue-600" />,
      link: "/profile-settings", 
    },
    {
      title: "Account Security",
      description: "Change password, enable 2FA, and manage login devices.",
      icon: <Shield className="w-7 h-7 text-green-600" />,
      link: "/account-security", 
    },
    {
      title: "Notifications",
      description: "Manage email, push, and SMS notifications.",
      icon: <Bell className="w-7 h-7 text-yellow-600" />,
      link: "/notifications", 
    },
    {
      title: "Language",
      description: "Choose your preferred language for the platform.",
      icon: <Globe className="w-7 h-7 text-purple-600" />,
      link: "/language", 
    },
    {
      title: "Theme",
      description: "Switch between light and dark mode for better visibility.",
      icon: <Moon className="w-7 h-7 text-gray-700" />,
      link: "/theme", // (optional)
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">
      {/* Decorative background circles */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">Settings ⚙️</h1>
          <p className="mt-2 text-gray-600 text-lg">
            Customize your account and preferences
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {settings.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-50 mb-4">
                {item.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>

              {item.link ? (
                <Link to={item.link}>
                  <button className="mt-4 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Manage
                  </button>
                </Link>
              ) : (
                <button className="mt-4 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Manage
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
