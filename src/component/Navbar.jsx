import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Handles both setting active link and closing menu
  const handleNavClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_item">Portfolio</div>

        {/* Toggle Button for Mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`right ${menuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={`nav_item ${activeLink === "#home" ? "active" : ""}`}
            onClick={() => handleNavClick("#home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav_item ${activeLink === "#about" ? "active" : ""}`}
            onClick={() => handleNavClick("#about")}
          >
            About
          </a>
          <a
            href="#experience"
            className={`nav_item ${
              activeLink === "#experience" ? "active" : ""
            }`}
            onClick={() => handleNavClick("#experience")}
          >
            Experience
          </a>
          <a
            href="#skills"
            className={`nav_item ${activeLink === "#skills" ? "active" : ""}`}
            onClick={() => handleNavClick("#skills")}
          >
            Skills
          </a>
          <a
            href="#project"
            className={`nav_item ${activeLink === "#project" ? "active" : ""}`}
            onClick={() => handleNavClick("#project")}
          >
            Project
          </a>
          <a
            href="#contact"
            className={`nav_item ${activeLink === "#contact" ? "active" : ""}`}
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
