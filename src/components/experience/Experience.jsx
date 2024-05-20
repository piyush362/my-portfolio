import "./experience.css";

const Experience = () => {
  return (
    <div id="education" className="exp-container">
      <div className="partContainer">
        <div className="partleft">
          <h1>EXPERIENCES</h1>
          <div className="bar1"></div>
        </div>
        <div className="partright">
          <h2>{"Full-Stack Developer Intern"}</h2>
          <h3>Hyathi Technology • Sep 2023 - Apr 2024</h3>
          <h3 className="cw-title">~ 8 Months of Experience</h3>
          <div className="experince-c">
            <h5>
              🚀 Successfully developed several cross-platform applications
              using <span className="span_highlight_text">React Native. </span>
              Implemented
              <span className="span_highlight_text"> Redux and RTK Query </span>
              libraries to manage state and handle API calls effectively,
              resulting in improved performance and smoother UX.
              <br />
              <br />
              🚀 Skillfully contributed to a cross-platform
              <span className="span_highlight_text">
                {" "}
                Fin-Tech application using RN.{" "}
              </span>
              Integrated <span className="span_highlight_text">
                {" "}
                Veriff{" "}
              </span>{" "}
              for seamless{" "}
              <span className="span_highlight_text">
                {" "}
                in-app KYC support{" "}
              </span>{" "}
              , facilitated NFC write operations to
              <span className="span_highlight_text">
                {" "}
                enable NFC payments,{" "}
              </span>{" "}
              and implemented in-app and{" "}
              <span className="span_highlight_text">
                {" "}
                push notification services{" "}
              </span>{" "}
              to enhance UX.
              <br />
              <br />
              🚀 Implemented{" "}
              <span className="span_highlight_text"> deepLinking </span> to
              seamlessly enable{" "}
              <span className="span_highlight_text"> dynamic navigation </span>{" "}
              within the Android and iOS app, via push notifications, and
              external links, enhancing the overall user experience
              <br />
              <br />
              🚀 Contributed to a RN App for enterprise dock management app for
              robust{" "}
              <span className="span_highlight_text">
                {" "}
                permission and role-based system,{" "}
              </span>{" "}
              implementing dynamic templated screens with precise user access
              controls for screen rendering, utilizing
              <span className="span_highlight_text">
                {" "}
                RN for web to support both web and mobile{" "}
              </span>{" "}
              using a single code-base
              <br />
              <br />
              🚀 Contributed to develop Promotion post and profile features for
              <span className="span_highlight_text">
                {" "}
                decentralized social media App,{" "}
              </span>
              a web3-based DeSo blockchain app
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
