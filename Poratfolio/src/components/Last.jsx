import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black py-16 px-6 sm:px-12 text-white overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-400 via-purple-500 to-green-400 rounded-full blur-3xl opacity-25 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-400 via-purple-500 to-pink-400 rounded-full blur-3xl opacity-25 translate-x-1/2 translate-y-1/2"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="space-y-6 max-w-md">
          <h2 className="text-3xl font-semibold text-white">Lumians</h2>
          <p className="text-gray-300">
            A creative studio designing immersive, intuitive, and beautiful
            digital experiences.
          </p>
          <div className="text-gray-400 text-sm">
            <p>
              Email: <span className="text-white">hello@lumians.studio</span>
            </p>
            <p>
              Phone: <span className="text-white">+91 98765 43210</span>
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
          <div>
            <h3 className="font-semibold mb-2 text-white">Services</h3>
            <ul className="space-y-1">
              <li>UX Design</li>
              <li>Brand Identity</li>
              <li>Web Development</li>
              <li>Product Strategy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-white">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Projects</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Subscribe Button - Bottom Left */}
        <div className="absolute bottom-6 left-6 sm:static w-full sm:w-auto">
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
            />
            <button className="relative px-6 py-3 rounded-full text-white border border-white overflow-hidden group transition-all duration-300">
              <span className="relative z-10">Subscribe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lumians Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
