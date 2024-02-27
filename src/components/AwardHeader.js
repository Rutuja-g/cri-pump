import React from "react";
import "./AwardHeader.css";

const AwardHeader = () => {
  return (
    <div className="award-header-container">
      <img
        src="https://your-domain.com/path/to/logo.png"
        alt="CRI Logo"
        className="award-header-logo"
      />
      <h1 className="award-header-title">
        CRI PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th
        time
      </h1>
    </div>
  );
};

export default AwardHeader;
