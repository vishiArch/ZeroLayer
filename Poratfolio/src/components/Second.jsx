import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiUpload, HiSparkles, HiHeart, HiLightningBolt } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const el = wrapperRef.current;

    gsap.to(el, {
      y: "-20vh", // Moves the whole section up into view
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // when bottom of screen reaches it
        end: "top top",      // when it reaches the top
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={wrapperRef} className="min-h-screen relative z-20 top-[20vh] overflow-hidden bg-black">
      {/* Multi-layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-rose-50 to-amber-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-300/30 to-transparent rounded-full blur-3xl transform -translate-x-20 -translate-y-20"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-rose-300/40 to-transparent rounded-full blur-3xl transform translate-x-20"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-amber-300/35 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-tl from-violet-400/25 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-12">
          <p className="text-sm font-medium text-slate-500 tracking-wider">/ About</p>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl relative bottom-[15vh] left-[30vw]">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r text-black bleading-tight mb-6">
            Unveiling the colors of your inner essence
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
            Through advanced perception technology, we decode the subtle energy patterns that radiate from your being, 
            revealing the unique aura signature that defines your spiritual presence.
          </p>
        </div>

        {/* Cards Grid - Magazine Style with Text Overlays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          
          {/* Card 1 - Rose Radiance */}
          <div className="group cursor-pointer" id="card-1">
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:brightness-110">
              
              {/* Background Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/80 via-pink-200/60 to-orange-200/80">
                  <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-rose-400/90 to-pink-400/90 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-12 right-12 w-32 h-32 bg-gradient-to-tl from-orange-300/80 to-rose-300/80 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/50 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-rose-200/70 rounded-full backdrop-blur-sm"></div>
                </div>
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 transform transition-all duration-300 group-hover:bg-white/30">
                    <div className="text-xs font-semibold text-rose-700 bg-white/60 px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-3">
                      Rose Radiance
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-rose-700 transition-colors duration-300">
                      Emotional Healing
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      A gentle warmth that flows from hearts ready to love again, transforming past wounds into wisdom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Indigo Wisdom */}
          <div className="group cursor-pointer" id="card-2">
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:brightness-110">
              
              {/* Background Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/80 via-purple-200/60 to-blue-200/80">
                  <div className="absolute top-12 right-8 w-28 h-28 bg-gradient-to-bl from-indigo-400/90 to-purple-400/90 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-8 left-12 w-36 h-36 bg-gradient-to-tr from-blue-300/80 to-indigo-300/80 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-white/60 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-indigo-200/80 rounded-full backdrop-blur-sm"></div>
                  <div className="absolute top-2/3 left-1/2 w-8 h-8 bg-purple-200/70 rounded-full backdrop-blur-sm"></div>
                </div>
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 transform transition-all duration-300 group-hover:bg-white/30">
                    <div className="text-xs font-semibold text-indigo-700 bg-white/60 px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-3">
                      Indigo Wisdom
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                      Intuitive Insight
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      The deep knowing that transcends logic, connecting you to universal truths and hidden patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Upload Identity (Dark Theme) */}
          <div className="group cursor-pointer" id="card-3">
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-slate-900/80 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              
              {/* Dark gradient background */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 to-slate-900/98">
                  <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-violet-500/40 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-12 left-12 w-32 h-32 bg-gradient-to-tl from-rose-500/30 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <div className="backdrop-blur-md bg-slate-800/40 border border-slate-600/50 rounded-2xl p-6 w-full transform transition-all duration-300 group-hover:bg-slate-800/60">
                    <HiSparkles className="w-12 h-12 text-white/90 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Discover Your Aura
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm mb-6">
                      Upload your photo and unlock the mystical energy patterns that define your spiritual essence.
                    </p>
                    
                    {/* Glowing Upload Button */}
                    <button className="group/btn relative overflow-hidden bg-gradient-to-r from-violet-600 to-rose-600 hover:from-violet-500 hover:to-rose-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center space-x-2">
                        <HiUpload className="w-4 h-4" />
                        <span>Upload Identity</span>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-rose-600 rounded-xl blur opacity-30 group-hover/btn:opacity-50 transition-opacity duration-300 -z-10"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/40">
            <HiHeart className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-slate-700">
              Your aura is a living reflection of your soul's journey — ever-changing, ever-beautiful, ever-uniquely yours.
            </span>
            <HiLightningBolt className="w-4 h-4 text-amber-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
