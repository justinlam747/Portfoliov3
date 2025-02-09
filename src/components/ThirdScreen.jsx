import React from "react";
import { FaCompass } from "react-icons/fa";

const ThirdScreen = ({ setCurrentScreen }) => {
  return (
    <div
      className="h-screen bg-black flex justify-start overflow-hidden"
      id="work"
    >
      <div className="text-white h-full w-full px-10 flex flex-col items-start gap-8">
        <h1 className="text-6xl font-extrabold tracking-wide pt-28">
          Projects
        </h1>

        <div onClick={() => setCurrentScreen("project")}>
          <a className="flex gap-3 bg-red-600 hover:bg-red-700 ease-in-out duration-300 p-4 rounded-xl select-none">
            <FaCompass className="size-5 mt-1" />
            <h1 className="text-xl font-bold tracking-wide">EXPLORE</h1>
          </a>
        </div>

        <div className="bg-slate-300 border shadow-2xl  w-3/4 self-end rounded-md overflow-hidden">
          <div className="flex items-center space-x-2 ml-4 mt-6">
            <div className="h-4 w-4 bg-red-500 rounded-full"></div>
            <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
          <div
            className="mt-7 bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 p-10 shadow-2xl"
            id="projects"
          >
            <div className="bg-slate-500 w-full h-96 rounded-2xl shadow-2xl">
              {/* <img src="" alt="" className="w-full h-full object-cover" /> */}
            </div>
            <div className="bg-slate-500 w-full h-96 rounded-xl"></div>
            <div className="bg-slate-500 w-full h-96 rounded-xl animate-pulse"></div>
            <div className="bg-slate-500 w-full h-96 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
