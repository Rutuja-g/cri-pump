import React from "react";
import AwardHeader from "./AwardHeader";
import AwardInfo from "./AwardInfo";
import AwardProducts from "./AwardProducts";
import AwardFooter from "./AwardFooter";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>C.R.I. FLUID SYSTEMS</h1>
        <p>Pumping trust. Worldwide.</p>
      </div>
      <div className="app-content">
        <div className="app-award">
          <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018</h2>
          <p>
            For the 4th time, C.R.I.'s energy efficient products are well
            recognized by various Government Institutions, as trustworthy
            products for various projects across the globe to save energy.
          </p>
          <p>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 star rated energy efficient smart pumps
            with IoT enabled control panel.
          </p>
        </div>
        <div className="app-stats">
          <div className="stat-item">
            <h3>INSTALLED OVER</h3>
            <p>10 LAKHS STAR RATED PUMPSETS</p>
          </div>
          <div className="stat-item">
            <h3>CUMULATIVE SAVING OF</h3>
            <p>MORE THAN 9,000 MILLION UNITS OF POWER</p>
          </div>
        </div>
      </div>
      <div className="app-footer">
        <p>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS: CHEMICALS &
          PROCESS, POWER, WATER & WASTE WATER, OILS & GAS, PHARMA, SUGARS &
          DISTILLERIES, PAPER & PULP, MARINE & DEFENCE, METAL & MINING, FOOD &
          BEVERAGE, PETROCHEMICAL & REFINERIES, SOLAR, BUILDING | HVAC| FIRE
          FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
        <p>
          Contact us: Toll free 1800 200 1234 |{" "}
          <a href="https://www.facebook.com/cripumps">Facebook</a> |{" "}
          <a href="https://www.crigroups.com">Website</a>
        </p>
      </div>
    </div>
  );
};

export default App;
