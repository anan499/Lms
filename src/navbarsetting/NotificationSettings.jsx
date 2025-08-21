// src/pages/NotificationSettings.jsx
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaSms, FaBell, FaVolumeUp, FaClock } from "react-icons/fa";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    email: true,
    sms: false,
    push: true,
    sound: true,
    dnd: false,
    weeklySummary: true,
  });

  // ✅ Load preferences from localStorage
  useEffect(() => {
    const savedPrefs = JSON.parse(localStorage.getItem("notificationPrefs"));
    if (savedPrefs) {
      setSettings(savedPrefs);
    }
  }, []);

  // ✅ Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("notificationPrefs", JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    alert(`
      Preferences Saved ✅
      Email: ${settings.email ? "ON" : "OFF"}
      SMS: ${settings.sms ? "ON" : "OFF"}
      Push: ${settings.push ? "ON" : "OFF"}
      Sound: ${settings.sound ? "ON" : "OFF"}
      Do Not Disturb: ${settings.dnd ? "ON" : "OFF"}
      Weekly Summary: ${settings.weeklySummary ? "ON" : "OFF"}
    `);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-50 p-8">
      <div className="max-w-lg mx-auto bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 flex items-center gap-2">
          <FaBell className="text-blue-600" /> Notification Settings
        </h1>

        <div className="space-y-5">
          {/* Email */}
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg shadow-sm">
            <span className="flex items-center gap-2 font-medium text-gray-700">
              <FaEnvelope className="text-blue-500" /> Email Notifications
            </span>
            <input
              type="checkbox"
              checked={settings.email}
              onChange={() => toggleSetting("email")}
              className="w-6 h-6 cursor-pointer accent-blue-600"
            />
          </div>

          {/* SMS */}
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg shadow-sm">
            <span className="flex items-center gap-2 font-medium text-gray-700">
              <FaSms className="text-green-500" /> SMS Notifications
            </span>
            <input
              type="checkbox"
              checked={settings.sms}
              onChange={() => toggleSetting("sms")}
              className="w-6 h-6 cursor-pointer accent-green-600"
            />
          </div>

          {/* Push */}
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg shadow-sm">
            <span className="flex items-center gap-2 font-medium text-gray-700">
              <FaBell className="text-yellow-500" /> Push Notifications
            </span>
            <input
              type="checkbox"
              checked={settings.push}
              onChange={() => toggleSetting("push")}
              className="w-6 h-6 cursor-pointer accent-yellow-500"
            />
          </div>

          {/* Sound */}
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg shadow-sm">
            <span className="flex items-center gap-2 font-medium text-gray-700">
              <FaVolumeUp className="text-purple-500" /> Notification Sounds
            </span>
            <input
              type="checkbox"
              checked={settings.sound}
              onChange={() => toggleSetting("sound")}
              className="w-6 h-6 cursor-pointer accent-purple-600"
            />
          </div>

          {/* Do Not Disturb */}
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg shadow-sm">
            <span className="flex items-center gap-2 font-medium text-gray-700">
              <FaClock className="text-red-500" /> Do Not Disturb Mode
            </span>
            <input
              type="checkbox"
              checked={settings.dnd}
              onChange={() => toggleSetting("dnd")}
              className="w-6 h-6 cursor-pointer accent-red-600"
            />
          </div>

          {/* Weekly Summary */}
          <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg shadow-sm">
            <span className="flex items-center gap-2 font-medium text-gray-700">
              📊 Weekly Summary Reports
            </span>
            <input
              type="checkbox"
              checked={settings.weeklySummary}
              onChange={() => toggleSetting("weeklySummary")}
              className="w-6 h-6 cursor-pointer accent-indigo-600"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-8 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Save Preferences ✅
        </button>
      </div>
    </div>
  );
}
