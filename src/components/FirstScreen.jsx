import React, { useState, useEffect } from "react";

const FirstScreen = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  return (
    <div id="home" className="relative h-screen bg-black overflow-hidden ">
      <div className="absolute  w-96 h-96 bg-white rounded-full top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2" />

      <h1 className=" text-8xl  lg:text-9xl text-white font-extrabold mix-blend-difference text-center flex items-center justify-center  h-screen tracking-wide ">
        <div className="hover:scale-105 duration-700 ease-in-out select-none">
          JUSTIN <br /> LAM
        </div>
      </h1>
    </div>
  );
};

export default FirstScreen;
