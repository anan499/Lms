// src/pages/Terms.jsx
import React from "react";
import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  UserCircleIcon,
  NoSymbolIcon, 
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const terms = [
  {
    icon: ExclamationTriangleIcon,
    title: "Non-Refundable Policy",
    description:
      "All payments for courses, subscriptions, or exams are non-refundable. Once a payment is completed, it cannot be refunded for any reason.",
    color: "text-red-600",
  },
  {
    icon: ShieldCheckIcon,
    title: "Account Security",
    description:
      "Users must create their own account to access courses and content. Sharing login credentials is prohibited.",
    color: "text-blue-500",
  },
  {
    icon: DocumentTextIcon,
    title: "Content Restrictions",
    description:
      "All content provided on this website is for educational purposes only. You may not reproduce, distribute, or sell any content without permission.",
    color: "text-green-500",
  },
  {
    icon: ArrowPathIcon,
    title: "Updates & Modifications",
    description:
      "We reserve the right to update or modify courses, exams, and policies at any time. Users will be notified of major changes.",
    color: "text-yellow-500",
  },
  {
    icon: UserCircleIcon,
    title: "User Responsibility",
    description:
      "Users are responsible for keeping their account credentials secure and for all activity under their account.",
    color: "text-purple-500",
  },
  {
  icon: NoSymbolIcon,
  title: "Liability",
  description:
    "We are not liable for any damages, losses, or interruptions that may occur while using the website.",
  color: "text-pink-500",
},

  {
    icon: CheckCircleIcon,
    title: "Compliance",
    description:
      "By using this website, you agree to comply with all applicable laws and regulations.",
    color: "text-teal-500",
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Welcome to <span className="font-semibold">Let’s Learn French</span>. 
          By using our website and services, you agree to the following terms and conditions:
        </p>

        <ul className="space-y-4">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <li
                key={index}
                className="flex items-start bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <Icon className={`w-6 h-6 mr-3 mt-1 ${term.color}`} />
                <div>
                  <h3 className="font-semibold text-gray-800">{term.title}</h3>
                  <p className="text-gray-600 text-sm">{term.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="text-gray-700 mt-8 text-center text-sm">
          If you have any questions about our terms and policies, please contact us at 
          <span className="font-semibold text-blue-600"> support@letslearnfrench.com</span>.
        </p>
      </div>
    </div>
  );
}
