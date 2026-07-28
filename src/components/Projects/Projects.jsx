import React from "react";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const projects = [
  {
    title: "Student Management System",
    description:
      "A full-stack web application developed to manage student records, courses, attendance, and academic information. Designed with a user-friendly interface and efficient database management using Java EE technologies.",
    tech: ["Java", "EE", "JSP/Servlet", "Oracle"],
    image: project1,
    github: "#",
  },
  {
    title: "Clothify E-Commerce",
    description:
      "A full-stack e-commerce web application that allows users to browse products, manage their cart, and place orders. Developed with a responsive interface and secure REST APIs for a smooth shopping experience.",
    tech: ["React.js", "Spring Boot", "REST API", "Oracle Database"],
    image: project2,
    github: "#",
  },
  {
    title: "StayNest",
    description:
      "A full-stack property listing web application that allows users to explore, create, edit, and manage property listings. Features user authentication, image uploads, interactive maps, and a responsive design for an enhanced user experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
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
          These projects reflect my learning, creativity, and hands-on
          experience in full-stack web development.
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
