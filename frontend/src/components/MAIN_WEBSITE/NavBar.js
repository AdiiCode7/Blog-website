// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-orange-500 text-white p-4">
      {/* Left side: Logo */}
      <div className="logo w-40">
        <img src="Quill.png" alt="Logo" className="max-w-16" />
      </div>

      {/* Center: Links to Different Pages */}
      <div className="flex gap-4">
        <Link to="/Home" className="text-black hover:text-orange-200">
          Home
        </Link>
        <Link to="/about" className="text-black hover:text-gray-300">
          About
        </Link>
        <a href="/services" className="text-black hover:text-gray-300">
          Services
        </a>
        <a href="/contact" className="text-black hover:text-gray-300">
          Contact
        </a>
      </div>

      {/* Right side: Search Bar */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 bg-orange-500 border-2 h-10 placeholder-black border-black text-black rounded-full"
        />
        <button
          type="button"
          className="px-6 py-2 h-10 bg-black text-white rounded-full"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default NavBar;
