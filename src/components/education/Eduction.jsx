import "./education.css";

const Eduction = () => {
  return (
    <div id="education" className="edu-container">
      <div className="partContainer">
        <div className="partleft">
          <h1>EDUCATION</h1>
          <div className="bar1"></div>
        </div>
        <div className="partright">
          <h2>Dr. Ram Manohar Lohia Avadh University, Ayodhya</h2>
          <h3>B.Tech, Information Technology • Aug 2020 - Aug 2024</h3>
          <h4 className="cw-title">CourseWork.</h4>
          <div className="cousework-c">
            <h5>Data Structure & Algorithm</h5>
            <h5>Operating system</h5>
            <h5>Database management system</h5>
            <h5>Object Oriented Technique</h5>
            <h5>Computer Networking</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduction;
