import React from "react";

const Subscribe = () => {
  return (
    <div className="relative w-full py-16 md:py-28 lg:py-32 flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Background */}
      <img
        src="/assets/image/subscribe-bg.webp"
        alt="Background"
        className="absolute -left-72 w-[600px] h-[600px] animate-spin-slow opacity-20 "
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="z-10 text-center px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Register now for <span className="text-gradient">get</span>
        </h2>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          discount every courses <span className="text-gradient">20%</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed
          magna purus, fermentum eu
        </p>

        <div className="flex max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 py-3 px-4 rounded-l-lg focus:outline-none text-black"
          />
          <button className="bg-orange-500 text-white px-6 rounded-r-lg font-semibold hover:bg-orange-600">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
