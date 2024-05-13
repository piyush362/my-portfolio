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
          <h4 className="cw-title"> </h4>
          <div className="experince-c">
            <h5>
              🚀 Successfully developed several cross-platform applications
              using React Native. Implemented Redux and RTK Query libraries to
              manage state and handle API calls effectively, resulting in
              improved performance and smoother UX.
              <br />
              <br />
              🚀 Skillfully contributed to a cross-platform Fin-Tech application
              using RN. Integrated Veriff for seamless in-app KYC support,
              facilitated NFC write operations to enable NFC payments, and
              implemented in-app and push notification services to enhance UX.
              <br />
              <br />
              🚀 Implemented deepLinking to seamlessly enable dynamic navigation
              within the Android and iOS app, via push notifications, and
              external links, enhancing the overall user experience
              <br />
              <br />
              🚀 Contributed to a RN App for enterprise dock management app for
              robust permission and role-based system, implementing dynamic
              templated screens with precise user access controls for screen
              rendering, utilizing RN for web to support both web and mobile
              using a single code-base
              <br />
              <br />
              🚀 Contributed to develop Promotion post and profile features for
              decentralized social media App, a web3-based DeSo blockchain app
            </h5>
            {/* <h5>
              🚀 Skillfully contributed to a cross-platform Fin-Tech application
              using RN. Integrated Veriff for seamless in-app KYC support,
              facilitated NFC write operations to enable NFC payments, and
              implemented in-app and push notification services to enhance UX.
            </h5>
            <h5>
              🚀 Implemented deepLinking to seamlessly enable dynamic navigation
              within the Android and iOS app, via push notifications, and
              external links, enhancing the overall user experience
            </h5>
            <h5>
              🚀 Contributed to a RN App for enterprise dock management app for
              robust permission and role-based system, implementing dynamic
              templated screens with precise user access controls for screen
              rendering, utilizing RN for web to support both web and mobile
              using a single code-base
            </h5>
            <h5>
              🚀 Contributed to develop Promotion post and profile features for
              decentralized social media App, a web3-based DeSo blockchain app
            </h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
