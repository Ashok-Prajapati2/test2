import React, { useState } from "react";
import { AlertMessage } from "./Alert";

const ToggleSections = () => {
  const [activeSection, setActiveSection] = useState("website");
  const [crawlUrl, setCrawlUrl] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  const handleCrawlFetch = async () => {
    if (!crawlUrl.startsWith("http://") && !crawlUrl.startsWith("https://")) {
      alert("Please enter a valid URL starting with http:// or https://");
      return;
    }

    try {
      const response = await fetch("http://3.110.223.250:8000/crawl", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: crawlUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch links. Please try again.");
      }

      const data = await response.json();
      setApiResponse(data);
      alert("Links fetched successfully!");
    } catch (error) {
      console.error("Error fetching links:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full p-6 bg-transparent min-h-screen flex gap-6">
      {/* Toggle Buttons */}
      <div className="flex flex-col gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all 
          ${
            activeSection === "website"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("website")}
        >
          Website
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all 
          ${
            activeSection === "text"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("text")}
        >
          Text
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all 
          ${
            activeSection === "files"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveSection("files")}
        >
          Files
        </button>
      </div>

      {/* Sections */}
      <div className="w-full max-w-xxl bg-white p-6 rounded-lg shadow-md">
        {activeSection === "website" && (
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-full mx-auto">
            {/* Header Section */}
            <h2 className="text-xl font-bold text-gray-800">
              Train Your Chatbot on Website Content
            </h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Enhance your chatbot's knowledge by adding content from websites.
              You can crawl a website, use a sitemap, or manually enter specific
              URLs.
            </p>

            <AlertMessage />
            {/* Crawl Section */}
            <div className="mt-6">
              <label
                htmlFor="crawl"
                className="block text-sm font-medium text-gray-700"
              >
                Crawl
              </label>
              <div className="flex mt-2">
                <input
                  type="url"
                  id="crawl"
                  placeholder="https://example.com/"
                  value={crawlUrl}
                  onChange={(e) => setCrawlUrl(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-300 focus:border-orange-400"
                />
                <button
                  onClick={handleCrawlFetch}
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
                >
                  Fetch Links
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                This will crawl all the links and PDF files starting with the
                URL. (Must start with "http://" or "https://")
              </p>
            </div>

            {/* Display API Response */}
            {apiResponse && (
              <div className="mt-6 bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-800">
                  API Response:
                </h3>
                <pre className="mt-2 text-sm text-gray-700">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}

        {activeSection === "text" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Text Section</h2>
            <p>Provide the text input here for your chatbot.</p>
          </div>
        )}

        {activeSection === "files" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Files Section</h2>
            <p>Upload and manage your files here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleSections;
