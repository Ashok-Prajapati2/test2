import React, { useState } from "react";
import {
  MessageCircle,
  Activity,
  Database,
  Share2,
  Settings,
} from "lucide-react";

const Layout = () => {
  const [activeTab, setActiveTab] = useState("chatbot");
  const [temperature, setTemperature] = useState(0.1);

  const renderContent = () => {
    switch (activeTab) {
      case "chatbot":
        return (
          <div className="p-4">
            <div className="bg-blue-600 p-4 rounded-lg mb-4">
              <h2 className="text-white font-bold">Senaptiq</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                Hello! Welcome to Senaptiq.
              </div>
              <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                How can I assist you with our AI solutions today?
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <input
                type="text"
                placeholder="Send a message"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        );
      case "activity":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Activity Log</h2>
            <div className="space-y-2">
              <div className="p-2 border rounded">Last active: 2 hours ago</div>
              <div className="p-2 border rounded">Total conversations: 156</div>
            </div>
          </div>
        );
      case "sources":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Sources</h2>
            <div className="space-y-2">
              <div className="p-2 border rounded">12 Links</div>
              <div className="p-2 border rounded">Model: gpt-4a-mini</div>
            </div>
          </div>
        );
      case "connect":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Connect</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-2 border rounded hover:bg-gray-100">
                Share
              </button>
              <button className="p-2 border rounded hover:bg-gray-100">
                Invite
              </button>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Temperature: {temperature}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="p-2 border rounded">Status: Trained</div>
              <div className="p-2 border rounded">
                Last trained at: December 31, 2024 at 6:24 PM
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r p-4">
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("chatbot")}
            className={`w-full flex items-center p-2 rounded ${
              activeTab === "chatbot"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <MessageCircle className="mr-2" size={20} />
            Chatbot
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`w-full flex items-center p-2 rounded ${
              activeTab === "activity"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Activity className="mr-2" size={20} />
            Activity
          </button>
          <button
            onClick={() => setActiveTab("sources")}
            className={`w-full flex items-center p-2 rounded ${
              activeTab === "sources"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Database className="mr-2" size={20} />
            Sources
          </button>
          <button
            onClick={() => setActiveTab("connect")}
            className={`w-full flex items-center p-2 rounded ${
              activeTab === "connect"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Share2 className="mr-2" size={20} />
            Connect
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center p-2 rounded ${
              activeTab === "settings"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <Settings className="mr-2" size={20} />
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">{renderContent()}</div>
    </div>
  );
};

export default Layout;
