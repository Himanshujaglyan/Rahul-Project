import React from 'react'

const SecondContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 max-w-6xl mx-auto  bg-gray-50 rounded-lg shadow-md">
      {/* Left Side Video */}
      <div className="md:w-1/2">
        <video className="w-full rounded-lg shadow-lg" controls>
          <source src="https://deepware.ai/wp-content/uploads/2023/10/Trump_and_Navalny_1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 text-left md:pl-8 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-900">Enemy at the Gates</h2>
        <p className="mt-4 text-gray-700">
          Cybersecurity faces an emerging threat generally known as deepfakes. Malicious uses of AI-generated synthetic media, 
          the most powerful cyber-weapon in history is just around the corner.
        </p>
      </div>
    </div>
  );
};



export default SecondContainer