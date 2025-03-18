import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEllipsisH,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="about" className="mt-12  ">
      <div className=" flex justify-between py-5  items-center px-5 text-white">
        <div>
          <h1>@ 2024 justin lam</h1>
        </div>

        <div className="flex gap-10 content-between items-center">
          <h1></h1>
          <a href="https://www.linkedin.com/in/justinlam747/" target="_blank">
            <FaLinkedin className="icon-style size-8  hover:-translate-y-2   transition-all duration-300 ease-out" />
          </a>

          {/* <a
            href="https://www.shutterstock.com/search/doraemon-character?image_type=vector"
            target="_blank"
          >
            <FaGithub className="icon-style size-8" />
          </a> */}
          <a href="mailto:sjustin.lam@queensu.ca" target="_blank">
            <FaEnvelope className="icon-style size-8  hover:-translate-y-2   transition-all duration-300 ease-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
