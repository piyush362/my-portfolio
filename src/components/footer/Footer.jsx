import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <h2>वो जन्नत ही क्या ? जो एक पल में मिल जाए । </h2>
      <div className="footeritem">
        <div className="footerlink">
          <a href="#">
            <p>LINKEDIN</p>
          </a>
          <a href="#">
            <p>GITHUB</p>
          </a>
          <a href="#">
            <p>HASHNODE</p>
          </a>
        </div>
        <p>Made by Piyush Sagar 💖</p>
        <div className="bar1-f"></div>
      </div>
    </div>
  );
};

export default Footer;
