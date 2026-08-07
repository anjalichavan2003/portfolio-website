// import React, { useState } from "react";
// import { Moon, Menu, X } from "lucide-react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <a href="#home" className="logo">
//         Anjali Chavan
//       </a>

//       <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//         <li>
//           <a href="#home">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#skills">Skills</a>
//         </li>
//         <li>
//           <a href="#projects">Projects</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>

//       <div className="nav-right">
//         {/* <Moon className="moon-icon" size={22} /> */}

//         <a href="#contact" className="connect-btn">
//           <span className="desktop-text">Let's Connect</span>
//           <span className="mobile-text">Connect</span>
//         </a>

//         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <HashLink smooth to="/#home" className="logo" onClick={closeMenu}>
        Anjali Chavan
      </HashLink>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <HashLink
            smooth
            to="/#home"
            className={
              location.pathname === "/" &&
              (location.hash === "" || location.hash === "#home")
                ? "active-nav"
                : ""
            }
            onClick={closeMenu}
          >
            Home
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#about"
            className={location.hash === "#about" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            About
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#skills"
            className={location.hash === "#skills" ? "active-nav" : ""}
            onClick={closeMenu}
          >
            Skills
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#projects"
            className={
              location.hash === "#projects" ||
              location.pathname.startsWith("/project")
                ? "active-nav"
                : ""
            }
            onClick={closeMenu}
          >
            Projects
          </HashLink>
        </li>

        <li>
          <HashLink
            smooth
            to="/#contact"
            className={location.hash === "#contact" ? "active-nav" : ""}
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
