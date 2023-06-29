import React from "react";
import Navbar from "../components/navbar/Navbar";
import Mycard from "../components/mycard/Mycard";
import About from "../components/about/About";
import Eduction from "../components/education/Eduction";
import Skills from "../components/skills/Skills";
import Project from "../components/projects/Project";
import Certificate from "../components/certificate/Certificate";
import Footer from "../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Mycard />
      <About />
      <Eduction />
      <Skills />
      <Project />
      <Certificate />
      <Footer />
    </div>
  );
};

export default Homepage;
