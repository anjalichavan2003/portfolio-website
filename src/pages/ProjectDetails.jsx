import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./ProjectDetails.css";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projectData = {
  staynest: {
    title: "StayNest",
    image: project3,
    description:
      "StayNest is a full-stack property rental platform where users can browse, create, edit and manage property listings. It includes authentication, image upload, reviews, interactive maps and responsive UI.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Bootstrap",
    ],

    features: [
      "User Authentication",
      "Add / Edit / Delete Listing",
      "Image Upload",
      "Review System",
      "Interactive Maps",
      "Responsive Design",
    ],

    frontend: "https://github.com/yourusername/staynest-frontend",

    backend: "https://github.com/yourusername/staynest-backend",

    live: "https://sigma-project-4y4q.onrender.com/listings",
  },

  clothify: {
    title: "Clothify E-Commerce",
    image: project2,

    description:
      "A full-stack e-commerce application developed using React, Spring Boot and Oracle Database.",

    tech: ["React.js", "Spring Boot", "REST API", "Oracle Database"],

    features: [
      "User Login",
      "Shopping Cart",
      "Product Management",
      "Admin Dashboard",
      "Orders",
    ],

    frontend: "",

    backend: "",

    live: "",
  },

  "student-management": {
    title: "Student Management System",

    image: project1,

    description:
      "A Java EE web application for managing students, attendance and courses.",

    tech: ["Java", "JSP", "Servlet", "Oracle"],

    features: [
      "Student Registration",
      "Attendance",
      "Course Management",
      "Faculty Module",
      "CRUD Operations",
    ],

    frontend: "",

    backend: "",

    live: "",
  },
};

function ProjectDetails() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectData[id];

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <HashLink smooth to="/#projects" className="back-btn">
          <FaArrowLeft />
          Back to Projects
        </HashLink>

        <h1>{project.title}</h1>
        <br></br>
        <img
          src={project.image}
          alt={project.title}
          className="project-banner"
        />

        <div className="project-info">
          <p>{project.description}</p>

          <h2>Tech Stack</h2>

          <div className="tech-list">
            {project.tech.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>

          <h2>Key Features</h2>

          <div className="feature-grid">
            {project.features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <FaCheckCircle />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="buttons">
            {project.frontend && (
              <a href={project.frontend} target="_blank" rel="noreferrer">
                <FaGithub />
                Frontend
              </a>
            )}

            {project.backend && (
              <a href={project.backend} target="_blank" rel="noreferrer">
                <FaGithub />
                Backend
              </a>
            )}

            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
                Live Demo
              </a>
            ) : (
              <button disabled>Coming Soon</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
