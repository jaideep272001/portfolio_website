import React from "react";
import "../CSS/ProjectsSection.css";
import { useNavigate } from "react-router-dom";
import UnderDevelopment from "../Components/UnderDevelopment"
import { FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    title: "UV-Based Disinfection Robot",
    description:
      "Autonomous mobile robot designed for industrial UV disinfection, optimizing efficiency and safety.",
    pointers: ["Autonomous Navigation", "UV Safety Protocols"],
    link: "#",
  },
  {
    title: "IR Alert System",
    description:
      "Smart alert system integrating microcontrollers and Google Sheets for real-time notifications.",
    pointers: ["Real-time Alerts", "Google Sheets Integration"],
    link: "#",
  },
  {
    title: "Miniature Robotics Series",
    description:
      "Design and development of multiple miniature robots: spider, humanoid, biped, and ant robots.",
    pointers: ["Multiple Robot Types", "Compact Design"],
    link: "#",
  },
  {
    title: "Epicurio App",
    description:
      "Cross-platform recipe recommendation app using React Native with seamless UX and backend integration.",
    pointers: ["Cross-Platform", "Interactive UI"],
    link: "#",
  },
];

const ProjectsShowcase = () => {
  const navigate = useNavigate()
  return (
    <div className="projectsSection">
      <h1 className="projectsTitle">Featured Projects</h1>
      <p className="projectsDesc">
        A selection of my projects that highlight technical expertise and innovative solutions.
      </p>

      <div className="projectsGrid">
        {projects.map((project, idx) => (
          <div key={idx} className="projectCard">
            <div className="projectContent">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="pointers">
                {project.pointers.map((point, i) => (
                  <li key={i}>
                    <FaCheckCircle className="pointerIcon" /> {point}
                  </li>
                ))}
              </ul>
              <a href={project.link} className="projectBtn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
