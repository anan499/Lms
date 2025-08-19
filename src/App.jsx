import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Dashboard from "./Dashboard";
import bgImage from "./assets/effile.png";

// Extra Pages
import Explore from "./data/Explore"; 
import Settings from "./data/Settings";
import Exams from "./data/Exams";
import About from "./data/About";
import Terms from "./data/Terms"; 


// ---------------- AUTH TABS ----------------
function AuthTabs() {
  const [activeTab, setActiveTab] = useState("signin");
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-end bg-cover bg-center px-12"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md p-6">
        {/* LMS Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            LMS
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-indigo-700">
          Learning Management System
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Your gateway to knowledge and growth
        </p>

        {/* Tabs */}
        <div className="flex bg-gray-200 rounded-full p-1 mb-6">
          {["signin", "signup"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                activeTab === tab ? "bg-indigo-500 text-white" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "signin" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* Conditional Rendering */}
        {activeTab === "signin" ? (
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        ) : (
          <SignupPage />
        )}
      </div>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<AuthTabs />} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* General Pages */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
      
      </Routes>
    </Router>
  );
}
