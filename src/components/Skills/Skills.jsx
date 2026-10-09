import React from "react";
import "./Skills.css";

import {
  FaJava,
  FaLeaf,
  FaServer,
  FaDatabase,
  FaCode,
  FaNodeJs,
  FaGlobe,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPaperPlane,
  FaDesktop,
  FaTools,
} from "react-icons/fa";

const skillData = [
  {
    title: "BACKEND",
    skills: [
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Spring", icon: FaLeaf, color: "#6DB33F" },
      { name: "Spring Boot", icon: FaLeaf, color: "#6DB33F" },
      { name: "Hibernate", icon: FaDatabase, color: "#BCAE79" },
      { name: "JDBC", icon: FaDatabase, color: "#E76F00" },
      { name: "Servlets", icon: FaCode, color: "#E76F00" },
      { name: "JSP", icon: FaCode, color: "#E76F00" },
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", icon: FaServer, color: "#FFFFFF" },
      { name: "REST APIs", icon: FaGlobe, color: "#61DAFB" },
      { name: "Maven", icon: FaTools, color: "#C71A36" },
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: FaCode, color: "#06B6D4" },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
      { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
      { name: "Oracle Database", icon: FaDatabase, color: "#F80000" },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Postman", icon: FaPaperPlane, color: "#FF6C37" },
      { name: "Eclipse", icon: FaDesktop, color: "#A69BDE" },
      { name: "Spring Tool Suite", icon: FaTools, color: "#6DB33F" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Arsenal</h2>

        <p className="skills-subtitle">
          Technologies and tools I use to build modern, scalable, and efficient
          web applications.
        </p>

        <div className="skills-grid">
          {skillData.map((category) => (
            <div className="skill-card" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <span className="skill-tag" key={name}>
                    <Icon
                      className="skill-icon"
                      style={{ color }}
                      aria-hidden="true"
                    />

                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
