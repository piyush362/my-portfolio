import "./about.css";

const About = () => {
  return (
    <div className="aboutcontainer" id="about">
      <div className="partContainer">
        <div className="partleft">
          <h1>ABOUT ME</h1>
          <div className="bar1"></div>
        </div>
        <div className="partrightAbout">
          <p>
            Hello, My name is Piyush Sagar Currently in 6th semester, pursuing
            btech in Information technology from dr. ram manohar lohia avadh
            university, my skills includes a decent foundation in C++ and
            javascript from development perpective, i have done many project in
            react and node for both mobile and web For computer science
            fundamentals, I have a decent knowledge about Data Structure &
            Algorithm, Operating system, Database management system and Object
            Oriented Technique. I have also practiced coding by solving over
            500+ problems on various coding platforms like Leetcode, GFG and
            Hackerrank
          </p>
          <a
            href="https://drive.google.com/file/d/1lTa8HphTG5wA67DZGpQ3iFegiMJ9Jt19/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
