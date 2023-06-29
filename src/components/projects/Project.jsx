import ProjectCard from "./ProjectCard";
import "./index.css";
import { projects } from "../../data/data.js";

const Project = () => {
  return (
    <div id="projects" className="p-continer">
      <div className="projectContainer">
        <div className="pc-head">
          <h1>CHECK OUT SOME OF MY REAL WORLD PROJECTS</h1>
          <div className="bar2"></div>
        </div>
        <div className="projectlist">
          {projects.allProject.map((item, index) => (
            <ProjectCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
