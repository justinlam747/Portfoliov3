import React from "react";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={`fixed top-4 inset-x-0 mx-auto w-fit max-w-[90%] md:max-w-lg bg-white shadow-md z-50 rounded-lg p-3 transition-all duration-500 ease-in-out ${
        isScrolled ? "-translate-y-36" : ""
      }`}
    >
      <div className="px-6 sm:px-8">
        <div className="flex justify-between items-center h-16 gap-x-10">
          <div className="space-x-6 items-center font-bold">
            <a
              href="#work"
              className="text-gray-700 hover:text-black relative text-lg cursor-pointer transition-all ease-in-out"
            >
              WORK
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/justinlam747/"
              target="_blank"
              className="bg-red-500 text-white px-4 py-4 rounded-md text-lg font-semibold hover:bg-red-600"
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
