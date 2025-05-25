import React, { useState } from "react";

const DeepwareScanner = () => {
  const [videoLink, setVideoLink] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: "#FAF5E5" }} // Full beige background
    >
      {/* Center Box */}
      <div className="bg-[#3B2F26] p-8 rounded-2xl shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-white text-center">
          Scan & Detect <span className="font-bold">Deepfake</span> Videos
        </h2>

        <p className="text-[#E5DED0] mt-2 text-center">
          Place a video link or upload a video
        </p>

        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mt-4 w-full bg-white">
          <input
            type="text"
            className="flex-grow outline-none bg-transparent text-gray-700"
            placeholder="https://www.example.com/"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <button className="text-blue-500 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <div className="flex items-start mt-4">
          <input type="checkbox" id="terms" className="mr-2 mt-1" defaultChecked />
          <label htmlFor="terms" className="text-[#E5DED0] text-sm">
            By submitting data, you are agreeing to{" "}
            <a href="#" className="text-blue-400">Terms of Services</a> and{" "}
            <a href="#" className="text-blue-400">Privacy Policy</a>
          </label>
        </div>

        <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-16 py-2 rounded-sm font-semibold hover:opacity-90 flex items-center mx-auto">
          SCAN{" "}
          <span className="text-xs ml-2 bg-white text-blue-500 px-2 py-1 rounded-full">
            BETA
          </span>
        </button>
      </div>
    </div>
  );
};

export default DeepwareScanner;
