import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-5 w-full text-center text-2xl font-bold shadow-md">
        Personal AI Communication Assistant
      </header>

      {/* Main Content Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl text-center">
        <h2 className="text-xl font-semibold mb-4">
          Welcome to Your AI Assistant!
        </h2>
        <p className="text-gray-600">
          Select an option below to interact with the assistant:
        </p>

        {/* Buttons Section */}
        <div className="mt-6 space-y-4">
          <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
            Send a WhatsApp Message
          </button>

          <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Connect with Gmail
          </button>

          <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition">
            Start Chatbot Conversation
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-gray-500">
        &copy; 2025 AI Assistant. All Rights Reserved.
      </footer>
    </div>
  );
}
