import { useParams, Link } from "react-router-dom";
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
      "Add/Edit/Delete Listing",
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
      "A full-stack e-commerce application developed using React, Spring Boot and Oracle Database. Users can browse products, manage cart and place orders.",

    tech: ["React.js", "Spring Boot", "REST API", "Oracle Database"],

    features: [
      "User Login",
      "Product Management",
      "Shopping Cart",
      "Orders",
      "Admin Dashboard",
    ],

    frontend: "https://github.com/yourusername/clothify-frontend",

    backend: "https://github.com/yourusername/clothify-backend",

    live: "",
  },

  "student-management": {
    title: "Student Management System",

    image: project1,

    description:
      "A web application for managing students, attendance, courses and academic information using Java EE.",

    tech: ["Java", "JSP", "Servlet", "Oracle"],

    features: [
      "Student Registration",
      "Attendance",
      "Course Management",
      "Faculty Module",
      "CRUD Operations",
    ],

    frontend: "",

    backend: "https://github.com/yourusername/student-management",

    live: "",
  },
};

function ProjectDetails() {
  const { id } = useParams();

  const project = projectData[id];

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <div className="details-page">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <img src={project.image} alt={project.title} className="banner" />

      <h1>{project.title}</h1>

      <p>{project.description}</p>

      <h2>Tech Stack</h2>

      <div className="tech-list">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <h2>Key Features</h2>

      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="buttons">
        {project.frontend && (
          <a href={project.frontend} target="_blank" rel="noreferrer">
            Frontend Code
          </a>
        )}

        {project.backend && (
          <a href={project.backend} target="_blank" rel="noreferrer">
            Backend Code
          </a>
        )}

        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : (
          <button disabled>Live Demo Coming Soon</button>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
