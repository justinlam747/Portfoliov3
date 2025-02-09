import React from "react";

const BackHome = ({ setCurrentScreen }) => {
  return (
    <div
      className="fixed top-4 right-4 z-50 cursor-pointer font-bold  text-gray-200 p-2 rounded "
      onClick={() => setCurrentScreen("grid")}
    >
      Grid
    </div>
  );
};

export default BackHome;
