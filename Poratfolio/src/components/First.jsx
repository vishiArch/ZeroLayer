import React, { useEffect, useState } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Last from "./Last";

const First = () => {
  const [location, setLocation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setLocation({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 relative">
      {/* Cursor-following blurry gradient circle */}
      <motion.div
        className="w-60 h-60 bg-gradient-to-br from-pink-400 to-purple-500 blur-[120px] opacity-70 rounded-full fixed pointer-events-none z-10"
        animate={{ x: location.x - 120, y: location.y - 120 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      />

      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original 3 blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-200/40 to-purple-300/40 rounded-full blur-2xl"></div>
        <div className="absolute top-60 right-40 w-64 h-64 bg-gradient-to-br from-purple-300/50 to-pink-400/50 rounded-full blur-xl"></div>

        {/* New 3 blobs */}
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-yellow-200/40 to-pink-300/40 rounded-full blur-2xl rotate-12"></div>
        <div className="absolute top-[30%] left-[20%] w-72 h-72 bg-gradient-to-br from-indigo-300/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[30%] w-96 h-96 bg-gradient-to-tr from-rose-300/40 to-yellow-200/40 rounded-full blur-[100px] scale-110"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="text-2xl relative bottom-1.5 text-gray-900">Lumen</div>
        <div
          className="hidden md:flex relative  right-40 z-21
             items-center space-x-8 
             bg-white/10 backdrop-blur-md border border-white/30
             rounded-full px-6 py-3 shadow-lg"
        >
          {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-700 hover:text-gray-900 transition-colors duration-300
        before:content-[''] before:absolute before:bottom-0 before:left-0 
        before:h-[2px] before:w-0 
        before:bg-gradient-to-r before:from-rose-400 before:to-violet-500 
        hover:before:w-full before:transition-all before:duration-500"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2">
          <FaBars className="w-6 h-6 text-gray-900" />
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-6xl font-normal lg:text-[9vw] relative top-65 leading-[15vh] text-gray-900">
                Eveal Time
                <br />
                <span>Payload</span>
              </h1>

              <div className="flex items-start space-x-4 mt-12">
                <div className="flex-1">
                  <p className="text-gray-700 w-[250px] text-lg relative left-[58vw] top-40 leading-[21px] max-w-sm">
                    Receive funds into your account instantly and
                    cost-effectively 24/7
                  </p>
                </div>

                <button className="left-[50vw] cursor-pointer top-39 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative h-16 w-64 border text-left p-3 text-black-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg group-hover:before:bg-pink-500 after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                  See more
                </button>
              </div>
            </div>

            {/* Right side space */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
      <Second />
      <Third />
      <Fourth />
      <Last />
    </div>
  );
};

export default First;
