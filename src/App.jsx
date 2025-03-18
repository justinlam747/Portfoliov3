import React, { useEffect, useState, useRef } from "react";
import FirstScreen from "./components/FirstScreen";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  const workRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry.isIntersecting);
      },
      { rootMargin: "-50px 0px 0px 0px", threshold: 0.1 }
    );

    if (workRef.current) {
      observer.observe(workRef.current);
    }

    return () => {
      if (workRef.current) observer.unobserve(workRef.current);
    };
  }, []);

  return (
    <div className="bg-black">
      <Navbar isScrolled={isScrolled} />
      <FirstScreen />
      <Projects refProp={workRef} />
    </div>
  );
};

export default App;
