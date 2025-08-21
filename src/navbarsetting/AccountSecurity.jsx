// src/pages/AccountSecurity.jsx
import React, { useState } from "react";
import { FaLock, FaKey, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

export default function AccountSecurity() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [twoFA, setTwoFA] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // 🔥 Here you would call backend API to update password
    console.log("Password updated:", formData);
    alert("✅ Password updated successfully!");
    setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 p-6">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
          <FaShieldAlt className="text-blue-600" /> Account Security
        </h2>

        {/* Password Fields */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
              className="flex-1 outline-none"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaKey className="text-gray-500 mr-2" />
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
              className="flex-1 outline-none"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FaCheckCircle className="text-gray-500 mr-2" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* 2FA Toggle */}
        <div className="flex items-center justify-between mt-6 p-4 bg-gray-50 rounded-md border">
          <span className="text-gray-700 font-medium">Enable Two-Factor Authentication</span>
          <input
            type="checkbox"
            checked={twoFA}
            onChange={() => setTwoFA(!twoFA)}
            className="w-5 h-5 text-blue-600 rounded"
          />
        </div>

        {/* Security Questions */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Security Question
          </label>
          <select className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500">
            <option>What was your first pet’s name?</option>
            <option>What is your mother’s maiden name?</option>
            <option>What was the name of your first school?</option>
          </select>
          <input
            type="text"
            placeholder="Enter your answer"
            className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Recent Activity */}
        <div className="mt-6 p-4 bg-gray-50 rounded-md border">
          <h3 className="font-semibold text-gray-700 mb-2">Recent Login Activity</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✅ Login from Chrome, Windows - 10 mins ago</li>
            <li>✅ Login from Safari, iPhone - 2 days ago</li>
            <li>✅ Login from Edge, Windows - 5 days ago</li>
          </ul>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
