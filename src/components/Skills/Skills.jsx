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
        "Node.js",
        "Express",
        "REST APIs",
      ],
    },
    {
      title: "FRONTEND",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind"],
    },
    {
      title: "DATABASE",
      skills: ["Oracle SQL", "MySQL", "MongoDB"],
    },
    {
      title: "TOOLS",
      skills: ["Git", "Postman", "Docker", "VS Code"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Arsenal</h2>
        <p className="skills-subtitle">
          A curated list of technologies I use to bring ideas to life.
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
