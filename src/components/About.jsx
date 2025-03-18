import React from "react";
import {
  FaHome,
  FaUserCircle,
  FaBriefcase,
  FaBell,
  FaUsers,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import photoID from "../assets/projects/photoID.png";

const About = () => {
  return (
    <div className="min-h-[75%] bg-yellow-400 flex flex-col" id="about">
      <div className="   mx-4 rounded-t-md   text-white flex flex-col  overflow-hidden mx-10">
        {/* <div className="flex items-center space-x-2 ml-4 pb-4">
          <div className="h-4 w-4 bg-red-500 rounded-full"></div>
          <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
          <div className="h-4 w-4 bg-green-500 rounded-full"></div>
        </div> */}

        <div className=" flex-1 overflow-auto ">
          <div className="flex flex-col justify-start mt-10 lg:justify-start">
            <div className="bg-slate-300 w-full sm:w-3/5 md:w-3/5 lg:w-3/5 mx-auto rounded-t-lg  border border-gray-300 shadow-lg">
              <div
                className="bg-white transform translate-y-24 translate-x-5 rounded-full border-4 border-gray-300 shadow-md w-60 h-60"
                style={{ zIndex: 10 }}
              >
                <img
                  src={photoID}
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
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl">
                    Learn More
                  </button>
                </div>

                <p className="text-gray-600 text-2xl mt-4 font-semibold text-start">
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

export default About;
