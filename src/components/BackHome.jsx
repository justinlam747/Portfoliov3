import React from "react";

const BackHome = ({ setCurrentScreen }) => {
  return (
    <div
      className="fixed top-4 right-4 z-50 cursor-pointer font-bold bg-yellow-500 text-gray-200 p-2 rounded shadow"
      onClick={() => setCurrentScreen("home")}
    >
      home
    </div>
  );
};

export default BackHome;
