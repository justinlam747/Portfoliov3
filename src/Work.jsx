// Work.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer'
import Experience  from './components/Experience';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Work = () => {
  const { scrollY } = useScroll();
  const rotateBall = useTransform(scrollY, [0, 3000], [0, 360]);
  return (
    <div>
        <Navbar toggleSwitch={0} rotateBall={rotateBall} scrollProgress = {scrollY}/>
        <div>
            <Projects/>
          
            <Footer />
        </div>
      
    </div>
  );
};

export default Work;
