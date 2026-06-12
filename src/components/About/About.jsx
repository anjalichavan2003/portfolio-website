import "./About.css";
import { GraduationCap, Code2, Terminal, Target } from "lucide-react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <h2>Beyond the Code</h2>
        <p>
          I am a detail-oriented developer who believes in the power of clean
          code and architectural integrity. My journey is defined by constant
          learning and a drive to solve complex problems through software
          engineering.
        </p>
      </div>

      <div className="about-cards">
        <div className="card">
          <GraduationCap size={40} />
          <h3>Education</h3>
          <p>
            Pursuing MSc in Computer Science (2023-2025) with a focus on
            advanced algorithms.
          </p>
        </div>

        <div className="card">
          <Code2 size={40} />
          <h3>Experience</h3>
          <p>
            Hands-on experience with academic projects and full-stack intensive
            training programs.
          </p>
        </div>

        <div className="card">
          <Terminal size={40} />
          <h3>Interests</h3>
          <p>
            Passionate about Web Development, System Design, and Scalable
            Architectures.
          </p>
        </div>

        <div className="card">
          <Target size={40} />
          <h3>Goal</h3>
          <p>
            Aiming to excel as a Full Stack Java Developer in a high-impact
            engineering team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
