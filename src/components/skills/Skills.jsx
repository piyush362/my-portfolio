import "./skills.css";
import { skills } from "./../../data/data.js";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div id="skills" className="skillscontainer">
      <div className="partleft">
        <h1>MY SKILLS</h1>
        <div className="bar1"></div>
      </div>
      <div className="skillslowwer">
        <SkillsCard data={skills.languages} heading={"LANGUAGES"} />
        <SkillsCard data={skills.tools} heading={"TOOLS / DATABASE"} />
        <SkillsCard data={skills.framework} heading={"FRAMEWORK / LIBRARY"} />
      </div>
    </div>
  );
};

export default Skills;
