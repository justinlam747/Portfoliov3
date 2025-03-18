import React, { useState, useEffect } from "react";

const FirstScreen = () => {
  return (
    <div className="h-screen bg-yellow-400 flex flex-col justify-center items-center">
      <div className="flex items-center justify-between w-full flex-wrap">
        <h1 className="text-8xl lg:text-9xl text-white  font-extrabold tracking-wide mx-10">
          <div className="text-6xl mix-blend-difference">Hi! I'm</div>
          <div className="select-none  tracking-wide text-7xl md:text-9xl lg:text-9xl mix-blend-difference">
            JUSTIN
          </div>
          <h1 className=" text-sm md:text-2xl lg:text-3xl  font-normal  tracking-normal mix-blend-difference">
            and i'm a web developer based in Toronto!
          </h1>
        </h1>

        <h1 className="mix-blend-difference text-white text-2xl lg:text-4xl text-start md:text-start lg:text-end mr-10 ml-10 ">
          Lets build something <br /> amazing together!
        </h1>
      </div>
    </div>
  );
};

export default FirstScreen;
