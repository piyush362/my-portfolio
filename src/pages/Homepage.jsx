import React from "react";
import Navbar from "../components/navbar/Navbar";
import MyCard from "../components/mycard/Mycard";
import About from "../components/about/About";
import Eduction from "../components/education/Eduction";
import Skills from "../components/skills/Skills";
import Project from "../components/projects/Project";
import Certificate from "../components/certificate/Certificate";
import Footer from "../components/footer/Footer";
import Experience from "../components/experience/Experience";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <MyCard />
      {/* <About /> */}
      <Experience />
      <Eduction />
      <Skills />
      <Project />
      <Certificate />
      <Footer />
    </div>
  );
};

export default Homepage;
