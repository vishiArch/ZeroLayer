import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-purple-100 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400 to-pink-500 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2"></div>

      {/* Extra Gradient Blobs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-bl from-pink-300 to-purple-400 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-300 to-pink-400 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-2/3 left-1/6 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-300 rounded-full blur-2xl opacity-35"></div>
      <div className="absolute top-1/6 right-1/3 w-56 h-56 bg-gradient-to-l from-purple-500 to-pink-300 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-2/3 w-72 h-72 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl opacity-20"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01k01he6j6e89tzkjnt038mv5g%2F1752398584_img_0.webp?st=2025-07-13T07%3A48%3A55Z&se=2025-07-19T08%3A48%3A55Z&sks=b&skt=2025-07-13T07%3A48%3A55Z&ske=2025-07-19T08%3A48%3A55Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=bKtD3E1n6EQAILKnbHXl1%2BruTxxGaAUH%2F2ax%2BFMZ7C0%3D&az=oaivgprodscus"
                alt="Creative collaboration"
                className="w-[60vh] max-w-lg h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Crafting Impactful Experiences
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Build Brilliance,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Empower your teams with tools designed for clarity, speed, and creativity.
              Transform your ideas into high-impact results, faster than ever before.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Explore Button (animated like First.jsx) */}
              <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 border-2 border-gray-900 rounded-full group overflow-hidden transition-all duration-300 ease-in-out bg-transparent hover:text-white">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0 rounded-full"></span>
                <span className="relative z-10 flex items-center">
                  Explore
                  <HiArrowRight className="ml-2 h-5 w-5" />
                </span>
              </button>

              {/* Second Button */}
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                View Services
              </button>
            </div>

            {/* Bottom Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Loved by creators
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Design-first workflow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
