import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.webp";
import controller from "../assets/controller.webp";
import airpods from "../assets/airpods.webp";
import headphone from "../assets/headphone.webp";

const First = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* ✅ Cursor Follower */}
      <div
        style={{
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
          position: "fixed", // Prevent layout shift
          top: 0,
          left: 0,
          transition: "transform 0.3s",
        }}
        className=" z-[50] pointer-events-none h-[20vh] w-[10vw] border border-white rounded-full flex items-center justify-center transition-transform duration-100 ease-out"
      >
        <div className="h-[11.8vh] w-[6vw] blur-2xl bg-white rounded-full flex items-center justify-center"></div>
        <span className="orbitron-regular selection:bg-white selection:text-black absolute text-[16px] text-white z-[3]">
          Click
        </span>
      </div>
      {/* Airdops */}
      <motion.img
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        src={controller}
        alt="controller"
        className="absolute top-[20vh] left-[20vw] w-[8vw] h-auto z-40 pointer-events-none"
      />
      <motion.img
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        src={airpods}
        alt="controller"
        className="absolute top-[74.6vh] left-[8vw] w-[3.5vw] h-auto z-40 pointer-events-none"
      />
      <motion.img
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        src={headphone}
        alt="controller"
        className="absolute  top-[14vh] left-[70vw] w-[20vw] h-auto pointer-events-none"
      />
      {/* ✅ Main Background */}
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-center bg-no-repeat bg-cover h-screen w-full overflow-hidden"
      >
        {/* ✅ Navbar */}
        <div className="h-[10vh] w-full flex items-center justify-between px-4 text-white">
          <span className="orbitron-regular selection:bg-white selection:text-black cursor-pointer underline-hover text-[14px]">
            Menu
          </span>

          <div className="flex gap-2 items-center">
            <p className="text-[10px] selection:bg-white selection:text-black">Directed By P-Molten | </p>
            <h1 className="italiana-regular selection:bg-white selection:text-black cursor-pointer underline-hover text-[18px]">
              ZeroLayer
            </h1>
          </div>
        </div>

        {/* ✅ Main Content */}
        <div className="h-[90vh] w-full text-white">
          <div className="h-[80%] w-full flex flex-col relative items-center justify-center">
            <h1 className="orbitron-regular selection:bg-white selection:text-black z-[2] text-[11vw] leading-36 ml-[43vw] opacity-[0.4]">
              Protocal
            </h1>
            <h1 className="orbitron-regular selection:bg-white selection:text-black text-[11vw] leading-36 mr-[5vw]  opacity-[0.4]">
              Possession
            </h1>
          </div>
          <div className="h-[20%] w-full flex items-center justify-between px-5">
            <p className="italiana-regular text-[15px] selection:bg-white selection:text-black leading-5">
              ZeroLayer Beneath every broken frequency lies
              <br /> a signal they couldn't kill."ZeroLayer A silent
              transmission
              <br /> from the
            </p>
            <p className="aboreto-regular selection:bg-white selection:text-black text-[10px] cursor-pointer">
              CLICK TO CONTINUE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
