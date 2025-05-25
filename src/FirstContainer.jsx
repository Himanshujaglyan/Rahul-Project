import React from 'react';

const FirstContainer = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between mb-72 p-6 max-w-6xl mx-auto"
      style={{ backgroundColor: '#FAF5E5' }} // Beige background
    >
      {/* Left Side Content */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl font-bold text-[#3B2F26]">
          Scan & Detect <span className="text-red-600">Deepfake</span> Videos
        </h1>
        <p className="mt-4 text-[#3B2F26] text-lg">
          <span className="font-bold">Scan</span> a suspicious video to find out if it’s synthetically manipulated.
        </p>
        <p className="mt-2 text-[#3B2F26] text-lg">
          <span className="font-bold">Contact Us</span> for on-premise solutions.
        </p>
        <button
          className="mt-6 px-6 py-3 font-semibold rounded-md transition"
          style={{
            backgroundColor: '#3B2F26', // dark brown
            color: '#FAF5E5', // beige text
          }}
        >
          GO TO SCANNER
        </button>
      </div>

      {/* Right Side Video */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <video className="w-full rounded-lg shadow-lg" controls>
          <source src="https://deepware.ai/wp-content/uploads/2023/10/trevor_sesli.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FirstContainer;
