import "./index.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="projectcard">
      <img src={data.image} alt="projectimage" />
      <div className="details-pc">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <div className="teckstack">
        {data.teckstack.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="btn-pc">
        <a href="#" target="_blank">
          LIVE
        </a>
        <a href="#" target="_blank">
          DEMO VIDEO
        </a>
        <a href="#" target="_blank">
          SOURCE CODE
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
