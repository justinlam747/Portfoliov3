import React, { useRef, useState } from "react";
import Placeholder from "../assets/projects/timer1.png";

const Card = ({ image, title, subtitle, color }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      cardRef.current.style.transform = "scale(1.2)";
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "scale(1)";
    }
  };

  return (
    <div>
      <div
        className=" size-[22rem] md:size-[20rem] lg:size-96 rounded-t-md duration-300 overflow-hidden flex relative container "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={cardRef}
          src={image}
          alt={Placeholder}
          className="object-cover w-full h-full ease-[cubic-bezier(0.7,0.0.3,1)] duration-700"
        />
        <div className="absolute  bottom-0 flex flex-col justify-center items-start  w-full p-4">
          <h1
            className={`text-3xl font-bold transition-all duration-500 ${
              isHovered ? "translate-y-[4px]" : "translate-y-[10px]"
            }`}
          >
            {title.toUpperCase()}
          </h1>

          <h2
            className={`${color} text-sm font-light transition-all duration-500 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            {subtitle.toUpperCase()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
