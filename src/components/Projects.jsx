import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants/index.js";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  const bgColors = ["#000000", "#F8FFF4", "#facc15", "#3b82f6"];

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveProject(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Animation variants for slide-up (without fading)
  const variants = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      animate={{ backgroundColor: bgColors[activeProject] }}
      transition={{ duration: 0.5 }}
      className="snap-y snap-proximity overflow-y-scroll scroll-smooth h-screen"
    >
      {PROJECTS.map((project, index) => {
        const isEven = index % 2 === 0;
        let textColor = "";
        switch (index) {
          case 0:
            textColor = "text-white";
            break;
          case 1:
            textColor = "text-black";
            break;
          case 2:
            textColor = "text-black";
            break;
          case 3:
            textColor = "text-white";
            break;
          default:
            textColor = isEven ? "text-white" : "text-black";
        }

        return (
          <motion.section
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            data-index={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="snap-start h-screen flex items-center"
          >
            <a
              className={`w-full max-w-6xl mx-auto flex flex-col md:flex-row ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
              href={project.link}
              target="_blank"
            >
              <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
                <h3 className={`text-4xl font-bold mb-4 ${textColor}`}>
                  {project.title}
                </h3>
                <p className={`text-xl mb-4 ${textColor}`}>
                  {project.description}
                </p>
                <p className={`mb-2 ${textColor}`}>
                  {project.date} {project.institution}
                </p>
                <div className="mb-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`mr-2 inline-block ${textColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`text-sm ${textColor}`}>{project.skills}</p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center p-8 h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full md:h-full"
                />
              </div>
            </a>
          </motion.section>
        );
      })}
    </motion.div>
  );
};

export default Projects;
