import "./Hero.css";
import profile from "../../assets/images/Final.png";
//import profile from "../../assets/images/image.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Full Stack <span>Java</span>
          <br />
          Developer
        </h1>

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

        <div className="hero-buttons">
          <a
            href={`${import.meta.env.BASE_URL}Anjali_Chavan_Resume.pdf`}
            download
            className="btn resume-btn"
          >
            Download Resume
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Anjali_Chavan_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-btn"
          >
            View Resume
          </a>

          {/* <a href="#contact" className="btn contact-btn">
            Contact Me
          </a> */}
        </div>

        <div className="social-links">
          <a
            href="https://github.com/anjalichavan2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chavananjali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:anjaliychavan6@gmail.com">Email</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="Profile" />

        <div className="code-card">public class Developer {"{ ... }"}</div>
      </div>
    </section>
  );
}

export default Hero;
