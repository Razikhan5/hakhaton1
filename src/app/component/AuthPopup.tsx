"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from "react";
import { SignIn, SignUp } from "@clerk/nextjs";

export default function AuthPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  // Automatically open popup when component mounts
  useEffect(() => {
    setIsPopupOpen(true); // Popup open ho jayega jab component mount hoga
  }, []);

  return (
    <div>
      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            {/* Toggle Between SignIn and SignUp */}
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setIsSignIn(true)}
                className={`px-4 py-2 ${
                  isSignIn ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                } rounded-l-lg`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignIn(false)}
                className={`px-4 py-2 ${
                  !isSignIn ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                } rounded-r-lg`}
              >
                Sign Up
              </button>
            </div>

            {/* Render SignIn or SignUp Component */}
            {isSignIn ? (
              <SignIn routing="hash" />
            ) : (
              <SignUp routing="hash" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}