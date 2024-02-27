import React from "react";
import "./AwardFooter.css";

const AwardFooter = () => {
  return (
    <div className="award-footer-container">
      <a
        href="https://www.facebook.com/cripumps"
        target="_blank"
        rel="noopener noreferrer"
        className="award-footer-facebook"
      >
        <img
          src="https://your-domain.com/path/to/facebook-icon.png"
          alt="Facebook"
        />
      </a>
      <p className="award-footer-text">सत्यमेव जयते</p>
    </div>
  );
};

export default AwardFooter;
