import React from "react";
import {
  FaHome,
  FaUserCircle,
  FaBriefcase,
  FaBell,
  FaUsers,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import photoID from "../assets/projects/edgeHacks.png";

const SecondScreen = () => {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col" id="about">
      <div className="mt-64 bg-black min-h-[75%] mx-4 rounded-md shadow-2xl pt-4 text-white flex flex-col md:mx-4 sm:mx-4 xl:mx-56 lg:mx-32 overflow-hidden">
        <div className="flex items-center space-x-2 ml-4 pb-4">
          <div className="h-4 w-4 bg-red-500 rounded-full"></div>
          <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
          <div className="h-4 w-4 bg-green-500 rounded-full"></div>
        </div>

        <div className="bg-white flex-1 overflow-auto">
          <div className="flex items-center justify-between bg-white shadow-md p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 px-3 ml-28 py-2 rounded-full w-64">
                <FiSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none ml-2 text-sm w-full"
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4 mr-28  text-wrap tracking-wide">
              <div className="flex flex-col items-center text-gray-600 gap-1">
                <FaHome className="text-lg" />
                <span className="text-xs">Home</span>
              </div>

              <div className="relative flex flex-col items-center text-gray-600 gap-1">
                <FaUsers className="text-lg" />
                <span className="text-xs">My Network</span>
                <div className="absolute -top-1 ml-6 h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>

              <div className="flex flex-col items-center text-gray-600 gap-1">
                <FaBriefcase className="text-lg" />
                <span className="text-xs">Jobs</span>
              </div>

              <div className="flex flex-col items-center text-gray-600 gap-1">
                <FaBell className="text-lg" />
                <span className="text-xs">Notifications</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start mt-10 lg:justify-start">
            <div className="bg-slate-300 w-full sm:w-3/5 md:w-3/5 lg:w-3/5 mx-auto rounded-t-lg rounded-b-lg border border-gray-300 shadow-lg">
              <div
                className="  bg-white transform translate-y-24 translate-x-5 rounded-full border-4 border-gray-300 shadow-md w-60 h-60 "
                style={{ zIndex: 10 }}
              >
                <img
                  src="src/assets/projects/photoID.png"
                  alt="Profile"
                  className="rounded-full p-1"
                />
              </div>

              <div className="bg-slate-200 p-6 flex flex-col items-start">
                <h2 className="text-3xl font-bold text-gray-800 text-center mt-24">
                  Justin Lam
                </h2>
                <p className="text-gray-700 text-md text-center">
                  Engineering Student at Queen's University
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <a
                    className="bg-blue-700 text-white px-4 py-2 rounded-xl"
                    href="https://www.linkedin.com/in/justinlam747/"
                    target="_blank"
                  >
                    Accept
                  </a>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl">
                    Learn More
                  </button>
                </div>

                <p className="text-gray-600 text-2xl mt-4 font-semibold  text-start">
                  Hey! I'm Justin, an enthusiastic engineering student with a
                  passion for software. Let's connect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
