import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
