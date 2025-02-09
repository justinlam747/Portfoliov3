import React from "react";
import { useState } from "react";

const Navbar = ({ setCurrentScreen }) => {
  return (
    <nav className="fixed top-4 left-0 right-0 bg-white shadow-md z-50 max-w-5xl mx-auto rounded-lg">
      <div className="px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Links */}
          <div className=" space-x-6 items-center font-bold">
            <a
              onClick={() => setCurrentScreen("home")}
              className="text-gray-700 hover:text-black relative   cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-900 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-900 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-black relative   cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-900 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-900 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              ABOUT
            </a>
            <a
              href="#work"
              className="text-gray-700 hover:text-black relative   cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-900 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-900 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              WORK
            </a>
          </div>

          {/* Call to Action */}
          <div>
            <a
              href="#contact"
              className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
