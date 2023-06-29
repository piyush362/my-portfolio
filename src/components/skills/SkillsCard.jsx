import "./skills.css";

const SkillsCard = ({ data, heading }) => {
  return (
    <div className="skillContainerCard">
      <div className="skillcontent">
        <h1 className="skill-heading">{heading}</h1>
        <div className="partition"></div>
        {data.map((item) => (
          <div className="skill-name">
            <img className="skills-logo" src={item.logo} alt="logo" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
