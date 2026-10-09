import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // Keep Projects active on Project Details page
    if (location.pathname.startsWith("/project")) {
      setActiveSection("projects");
      return;
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // Navbar height
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <HashLink smooth to="/#home" className="logo" onClick={closeMenu}>
        Anjali Chavan
      </HashLink>

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <HashLink
            smooth
            to="/#home"
            className={activeSection === "home" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            Home
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#about"
            className={activeSection === "about" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            About
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#skills"
            className={activeSection === "skills" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            Skills
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#projects"
            className={activeSection === "projects" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            Projects
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#certificates"
            className={activeSection === "certificates" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            Certificates
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#contact"
            className={activeSection === "contact" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            Contact
          </HashLink>
        </li>
      </ul>

      {/* Right Side */}
      <div className="nav-right">
        <HashLink
          smooth
          to="/#contact"
          className="connect-btn"
          onClick={closeMenu}
        >
          <span className="desktop-text">Let's Connect</span>
          <span className="mobile-text">Connect</span>
        </HashLink>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
