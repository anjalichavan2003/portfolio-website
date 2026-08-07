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
      "StayNest is a full-stack property rental platform where users can browse, create, edit, and manage property listings. It features secure authentication, image uploads, reviews, interactive maps, and a fully responsive user interface.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Bootstrap",
    ],

    features: [
      "Secure User Authentication and Authorization",
      "Create, Update, and Delete Property Listings",
      "Cloudinary Image Upload and Storage",
      "Property Reviews and Ratings",
      "Interactive Location Maps",
      "Responsive UI for Mobile and Desktop",
    ],

    frontend: "https://github.com/anjalichavan2003/sigma-project",

    backend: "https://github.com/anjalichavan2003/sigma-project",

    live: "https://sigma-project-4y4q.onrender.com/listings",
  },

  clothify: {
    title: "Clothify E-Commerce",
    image: project2,

    description:
      "Clothify is a full-stack e-commerce web application that provides a seamless online shopping experience. Users can browse products by category, manage their shopping cart, place orders, and securely access their accounts. The application also includes an admin panel for managing products, categories, customers, and orders through RESTful APIs.",

    tech: [
      "React.js",
      "Spring Boot",
      "Java",
      "Hibernate",
      "Oracle Database",
      "REST API",
      "HTML",
      "CSS",
      "Bootstrap",
    ],

    features: [
      "Secure User Authentication and Authorization",
      "Category-wise Product Browsing",
      "Shopping Cart and Order Management",
      "Admin Dashboard for Product & Category Management",
      "RESTful API Integration Between Frontend and Backend",
      "Responsive User Interface",
    ],

    frontend: "",

    backend: "",

    live: "",
  },

  "student-management": {
  title: "Student Management System",

  image: project1,

  description:
    "Student Management System is a Java EE web application designed to simplify academic administration. It enables administrators and faculty to efficiently manage student records, course details, attendance, and academic information through a secure and user-friendly interface.",

  tech: [
    "Java",
    "JSP",
    "Servlet",
    "JDBC",
    "Oracle Database",
    "HTML",
    "CSS",
    "Bootstrap",
    "Apache Tomcat"
  ],

  features: [
    "Student Registration and Profile Management",
    "Course and Subject Management",
    "Attendance Tracking System",
    "Faculty and Student Modules",
    "Complete CRUD Operations with JDBC",
    "Responsive and User-Friendly Interface"
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
