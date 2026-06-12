import "./Hero.css";
import profile from "../../assets/images/portfolio.png";

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
          MSc Computer Science student specializing in scalable enterprise
          applications with Java, Spring Boot, and modern React architectures.
        </p>

        <p className="desc">
          Passionate about building robust backend systems and intuitive
          frontend experiences. Currently bridging the gap between academic
          theory and industry excellence.
        </p>

        <div className="hero-buttons">
          <button className="resume-btn">Download Resume</button>

          <button className="contact-btn">Contact Me</button>
        </div>

        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
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
