import React from "react";
import CommonNav from "../components/CommonNav";

const page = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/profile.jpg')" }}
    >
      <CommonNav />

      <div className="w-[90vw] mx-auto my-7 p-8 md:p-10 bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl">

        <p className="uppercase tracking-[0.25em] text-sm text-gray-700 font-semibold">
          FEATURES
        </p>

        <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight text-gray-900">
          Everything was built to feel
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            simple, smooth and natural.
          </span>
        </h1>

        <div className="mt-12 space-y-6 text-gray-900 text-lg md:text-xl font-medium leading-relaxed">

          <p>
            • Fast page loading and smooth interactions throughout the platform.
          </p>

          <p>
            • Clean and minimal interface designed for easy navigation.
          </p>

          <p>
            • Realtime communication and instant updates using Socket.IO.
          </p>

          <p>
            • Embedded YouTube video sharing with captions and responsive layout.
          </p>

          <p>
            • Responsive design optimized for desktop, tablet, and mobile devices.
          </p>

          <p>
            • Toast notifications for actions, updates, and user feedback.
          </p>

          <p>
            • MongoDB integration for storing and managing dynamic content.
          </p>

          <p>
            • Built with Next.js App Router and modern scalable architecture.
          </p>

          <p>
            • Smooth UI transitions and interactive components for better experience.
          </p>

          <p>
            • Focused on usability, clarity, and practical real-world functionality.
          </p>

        </div>

      </div>
    </div>
  );
};

export default page;