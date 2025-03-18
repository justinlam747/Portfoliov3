import React, { useRef } from "react";
import Card from "./Card.jsx";
import { PROJECTS } from "../constants/index.js";
import { FaCompass } from "react-icons/fa";

const Projects = ({ refProp }) => {
  return (
    <div className=" bg-black flex " id="work" ref={refProp}>
      <div className="text-white h-full w-full px-10  ">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-6xl font-extrabold tracking-tight pt-28 text-white">
            PROJECTS
          </h1>

          <div href="">
            <a className="flex gap-3 bg-red-600 hover:bg-red-700 ease-in-out duration-300 p-4 rounded-xl select-none">
              <FaCompass className="size-5 mt-1" />
              <h1 className="text-xl font-bold tracking-wide">RESUME</h1>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center min-h-screen pb-28 overflow-hidden">
          <div className="flex flex-col items-center justify-center mt-[9rem]">
            <div className="flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 ">
              {PROJECTS.map((project, index) => (
                <a href={project.link} target="_blank">
                  <Card
                    key={index}
                    image={project.image}
                    title={project.title}
                    subtitle={project.description}
                    color={project.color}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
