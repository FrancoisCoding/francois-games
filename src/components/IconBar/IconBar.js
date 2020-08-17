import React from "react";

const IconBar = () => {
  return (
    <div className="icon-bar">
      <a
        target="_blank"
        // Included this to decrease security risk
        rel="noopener noreferrer"
        href="https://www.facebook.com/francoisdemos/?ref=aymt_homepage_panel&eid=ARDhGhfZyQDmUkRRh9-Hr2tdhdYHajJw0TpdHd95nSg1l0AsvcZaFpnWBptLtseP82jX5u0Fr_2VD1Os"
        className="facebook"
      >
        <i className="fab fa-facebook" />
      </a>
      <a
        target="_blank"
        // Included this to decrease security risk
        rel="noopener noreferrer"
        href="https://twitter.com/FrancoisCoding"
        className="twitter"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        // Included this to decrease security risk
        rel="noopener noreferrer"
        href="https://github.com/FrancoisCoding"
        className="github"
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        // Included this to decrease security risk
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/isaiah-francois-56a5b4188/"
        className="linkedin"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        target="_blank"
        // Included this to decrease security risk
        rel="noopener noreferrer"
        href="https://www.instagram.com/francoiscoding/"
        className="instagram"
      >
        <i className="fab fa-instagram" />
      </a>
    </div>
  );
};

export default IconBar;
