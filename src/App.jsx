// App.jsx
import React, { useEffect, useState } from "react";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import BackHome from "./components/BackHome";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {currentScreen === "home" && (
        <div>
          <Navbar setCurrentScreen={setCurrentScreen} />
          <FirstScreen />
          <SecondScreen />

          <ThirdScreen setCurrentScreen={setCurrentScreen} />
          <Footer />
        </div>
      )}

      {currentScreen === "project" && (
        <>
          {/* <BackHome setCurrentScreen={setCurrentScreen} /> */}
          <Navbar setCurrentScreen={setCurrentScreen} />
          <Projects />
        </>
      )}

      {/* {currentScreen === "grid" && (
        <>
          <Navbar setCurrentScreen={setCurrentScreen} />
        </>
      )} */}
    </>
  );
};

export default App;
