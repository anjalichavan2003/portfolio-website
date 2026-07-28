import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillData = [
    {
      title: "BACKEND",
      skills: [
        "Java",
        "Spring",
        "Spring Boot",
        "Hibernate",
        "JDBC",
        "Servlets",
        "JSP",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Maven",
      ],
    },
    {
      title: "FRONTEND",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "DATABASE",
      skills: ["MySQL", "MongoDB", "Oracle Database"],
    },
    {
      title: "TOOLS",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Eclipse",
        "Spring Tool Suite (STS)",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Arsenal</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build modern, scalable, and efficient
          web applications.
        </p>

        <div className="skills-grid">
          {skillData.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
