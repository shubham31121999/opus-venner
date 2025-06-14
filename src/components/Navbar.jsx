import React from "react";
import logo from "../assets/logo.png"; // Adjust the path as necessary


const Navbar = () => {
  return (
    <header className="w-full px-6 sm:px-6 md:px-8 py-1 bg-darkGray shadow-md flex items-center justify-between">
  {/* Logo */}
  <div className="flex items-center">
    <img
      src={logo}
      alt="Logo"
      className="h-20 mt-2 w-auto object-contain"
    />
  </div>

  {/* Contact Button */}
  <div>
    <a
      href="tel:+917045117623"
      className="px-4 py-2 text-sm sm:text-base bg-themeLight text-black font-medium rounded hover:bg-opacity-90 transition duration-200"
    >
      7045117623
    </a>
  </div>
</header>

  );
};

export default Navbar;
