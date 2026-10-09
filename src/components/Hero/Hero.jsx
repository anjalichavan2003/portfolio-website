import "./Hero.css";
import profile from "../../assets/images/Final.png";

import { FiDownload, FiFileText, FiMail } from "react-icons/fi";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Anjali_Chavan_Resume.pdf`;

  return (
    <section className="hero" id="home">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          <span>Anjali Chavan</span>
        </h1>

        <h2>Software Developer</h2>

        <p className="intro">
          Full Stack Developer specializing in Java Full Stack and MERN Stack,
          building scalable, secure, and user-friendly web applications with
          modern technologies.
        </p>

        <p className="desc">
          Dedicated to writing clean, efficient code, solving real-world
          problems, and continuously improving my skills to build high-quality
          software solutions.
        </p>

        {/* RESUME BUTTONS */}
        <div className="hero-buttons">
          <a
            href={resumeUrl}
            download="Anjali_Chavan_Resume.pdf"
            className="btn resume-btn"
          >
            <FiDownload className="btn-icon" aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-btn"
          >
            <FiFileText className="btn-icon" aria-hidden="true" />
            <span>View Resume</span>
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="social-links">
          <a
            href="https://github.com/anjalichavan2003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Anjali's GitHub profile"
          >
            <FaGithub className="social-icon" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chavananjali/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Anjali's LinkedIn profile"
          >
            <FaLinkedinIn className="social-icon" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:anjaliychavan6@gmail.com"
            aria-label="Send Anjali an email"
          >
            <FiMail className="social-icon" aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <img src={profile} alt="Anjali Chavan - Software Developer" />

        <div className="code-card">public class Developer {"{ ... }"}</div>
      </div>
    </section>
  );
}

export default Hero;
