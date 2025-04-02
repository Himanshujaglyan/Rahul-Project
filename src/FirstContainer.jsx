import React from 'react'

const FirstContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-72 p-6 max-w-6xl mx-auto">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-3xl font-bold text-gray-900">
          Scan & Detect <span className="text-red-500">Deepfake</span> Videos
        </h1>
        <p className="mt-4 text-gray-700">
          <span className="font-bold">Scan</span> a suspicious video to find out if it’s synthetically manipulated.
        </p>
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Contact Us</span> for on-premise solutions.
        </p>
        <button className="mt-6 bg-red-600 text-white px-6 py-3 font-semibold rounded-md hover:bg-red-700 transition">
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


export default FirstContainer