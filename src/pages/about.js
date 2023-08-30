import React from "react";

const AboutUs = () => {
  return (
    <div className="h-[calc(100vh-64px)] max-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-4 rounded-md shadow-md max-w-3xl text-white">
        <h1 className="text-2xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-400">
          {
            "Welcome to QuoTell, your daily source of inspiration and wisdom from the minds of great thinkers, poets, authors, and philosophers. We believe that a few well-chosen words have the power to touch hearts,spark creativity, and ignite positive change."
          }
        </p>
        <p className="text-gray-400 mt-4">
          {
            "Our journey began with a simple idea: to curate and share the most impactful quotes that resonate with the human experience. QuoTell is not just a platform; it's a sanctuary for those seeking moments of introspection, motivation, and connection."
          }
        </p>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Our Journey</h2>
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            {/* Add more timeline events */}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Testimonials</h2>
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-700 p-4 rounded shadow-md">
              <p className="text-gray-400">
                &quot;QuoTell has been a daily dose of motivation for me. The
                quotes always seem to be exactly what I need to hear.&quot;
              </p>
              <p className="text-gray-400 mt-2">— Emily R.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded shadow-md">
              <p className="text-gray-400">
                "I love how QuoTell combines wisdom with beautiful design. It's
                truly a gem in the world of apps."
              </p>
              <p className="text-gray-400 mt-2">— Alex K.</p>
            </div>
          </div>
        </div>
        <div className="text-gray-400 mt-8 text-center">
          &copy; {new Date().getFullYear()} QuoTell. All rights reserved.
          Created by Nirmal Panchal.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
