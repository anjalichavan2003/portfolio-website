import React from "react";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project1.png";
import project3 from "../../assets/project1.png";

const projects = [
  {
    title: "Student Management System",
    description:
      "A comprehensive enterprise-level solution for managing academic records, attendance, and administrative workflows. Built with a robust backend architecture to handle high-volume data transactions efficiently.",
    tech: ["Java", "EE", "JSP/Servlet", "Oracle"],
    image: project1,
    github: "#",
  },
  {
    title: "Clothify E-Commerce",
    description:
      "A modern full-stack e-commerce platform featuring secure checkout, real-time inventory management, and a personalized user dashboard. Focuses on seamless UX and high-performance backend processing.",
    tech: ["React.js", "Spring Boot", "REST API"],
    image: project2,
    github: "#",
  },
  {
    title: "StayNest",
    description:
      "A high-end property listing and booking application. Implements complex search functionalities, user authentication, and a responsive design optimized for all device sizes.",
    tech: ["MERN Stack", "Tailwind CSS", "JWT Auth"],
    image: project3,
    github: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>
          Demonstrating technical proficiency through real-world applications.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          className={`project-container ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              View on GitHub <FaArrowRight />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
