import React from "react";

const IconBar = () => {
  return (
    <div className="icon-bar">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://react-slack-clone-bed12.web.app/"
        className="instagram"
      >
        <i className="fas fa-code" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/FrancoisCoding"
        className="twitter"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/FrancoisCoding"
        className="github"
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/isaiah-francois-56a5b4188/"
        className="linkedin"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://francoiscoding.netlify.app/"
        className="twitter"
      >
        <i className="fas fa-user-circle" />
      </a>
    </div>
  );
};

export default IconBar;
