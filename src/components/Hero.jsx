import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className="h-screen custom-img bg-center bg-cover relative">
      <div className="inset-0 bg-black/70 h-screen z-[2]" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white/70">
        <h1 className="text-5xl font-bold mb-6">{heading}</h1>
        <p className="mb-8">{message}</p>

        <button
          href="#_"
          className="px-5 py-2.5 relative rounded group overflow-hidden font-medium border-white/60 border-2 inline-block"
        >
          <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white/90 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-black/90">
            Button Text
          </span>
        </button>
      </div>
    </div>
  );
};
export default Hero;
