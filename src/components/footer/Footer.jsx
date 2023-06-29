import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <h2>वो जन्नत ही क्या ? जो एक पल में मिल जाए । </h2>
      <div className="footeritem">
        <div className="footerlink">
          <a
            href="https://www.linkedin.com/in/piyushsagar362/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LINKEDIN</p>
          </a>
          <a
            href="https://github.com/piyush362"
            target="_blank"
            rel="noreferrer"
          >
            <p>GITHUB</p>
          </a>
          <a
            href="https://piyushsagar.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
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
