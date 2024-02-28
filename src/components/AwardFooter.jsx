import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import "../styles/AwardFooter.css";

export default function AwardFooter() {
  return (
    <div className="footer">
      <div>
        <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />{" "}
        <span style={{ color: "white" }}>Toll Free: 1800 200 1234 </span>
      </div>
      <div>
        <a href="https://www.facebook.com/cripumps">
          <FontAwesomeIcon icon={faFacebook} /> www.facebook.com/cripumps
        </a>
      </div>
      <div>
        <a href="https://www.crigroups.com">
          <FontAwesomeIcon icon={faGlobe} /> www.crigroups.com
        </a>
      </div>
    </div>
  );
}
