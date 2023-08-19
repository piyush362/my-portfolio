import "./mycard.css";

const gitLogo = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
const leetcodeLogo =
  "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";

const Mycard = () => {
  return (
    <div id="home" className="mycardContainer">
      <div class="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="myPersonalCard">
        <div className="title">
          <h1>Piyush Sagar __</h1>
          <div className="title-tag">
            <img
              src="https://www.askgalore.com/wp-content/uploads/2021/11/mern_hero.png"
              alt="MERN"
            />
            <div>
              <p className="titleHead bg-yellow">{`Full-Stack JavaScript Developer`}</p>
              {/* <div className="online-logo-container">
                <a
                  href="https://github.com/piyush362/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="online-logo" src={gitLogo} alt="Git" />
                </a>
                <a
                  href="https://leetcode.com/piyushsagar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="online-logo" src={leetcodeLogo} alt="Git" />
                </a>
                <a
                  href="https://github.com/piyush362/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="online-logo" src={gitLogo} alt="Git" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="profilecard">
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/62232366?v=4"
            alt="profile"
          />
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
