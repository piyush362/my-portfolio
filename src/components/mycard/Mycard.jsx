import "./mycard.css";

const MyCard = () => {
  return (
    <div id="home" className="mycardContainer">
      {/* <div class="wrapper">
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
      </div> */}

      <div className="myPersonalCard">
        <div className="title">
          <h1>Piyush Sagar __</h1>
          <div className="title-tag">
            <img
              src="https://askgalore.nl/wp-content/uploads/2021/11/mern_hero.png"
              alt="MERN"
            />
            <div>
              <p className="titleHead bg-yellow">{`Full-Stack JavaScript Developer`}</p>
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

export default MyCard;
