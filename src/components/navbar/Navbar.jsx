import styles from "./Navbar.module.css";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.navcontainer}>
        <div className={styles.navbarContainer}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#about">RESUME</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#certificate">CERTIFICATE</a>
        </div>
      </div>

      <div className={styles.flootigmenu}>
        <button
          className={`${styles.hamburger} ${
            isOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={toggleNavbar}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ""}`}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <a
                className={styles.navbarLink}
                href="#home"
                onClick={handleNavLinkClick}
              >
                HOME
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a
                className={styles.navbarLink}
                href="#about"
                onClick={handleNavLinkClick}
              >
                ABOUT
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a
                className={styles.navbarLink}
                href="#about"
                onClick={handleNavLinkClick}
              >
                RESUME
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a
                className={styles.navbarLink}
                href="#skills"
                onClick={handleNavLinkClick}
              >
                SKILLS
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a
                className={styles.navbarLink}
                href="#projects"
                onClick={handleNavLinkClick}
              >
                PROJECTS
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a
                className={styles.navbarLink}
                href="#certificate"
                onClick={handleNavLinkClick}
              >
                CERTIFICATE
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
