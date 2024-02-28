import React from "react";
import "./App.css";
import award from "./assets/1.png";
import awardgiving from "./assets/2.png";
import products from "./assets/3.png";

function App() {
  return (
    <div className="container">
      <div className="middle-section">
        <div className="award-image">
          <img className="award-logo" src={award} alt="Award" />
        </div>
        <div>
          <div className="title">
            <p>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time
            </p>
          </div>
          <div className="award-text">
            <p>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </p>
          </div>

          <div className="awardgiving-image">
            <img
              className="awardgiving-logo"
              src={awardgiving}
              alt="National Energy Conservation Award 2018"
            />
          </div>
          <div className="awardgiving-text">
            <p>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="products-text">
          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
        </div>
        <div className="products">
          <img
            className="products-image"
            src={products}
            alt="C.R.I. Products"
          />
        </div>
        <div className="products-text">
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr className="line" />
        <div className="products-text">
          <p>
            <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
          </p>
        </div>
        <br />
        <div className="products-text">
          <p>
            CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA
            SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING
            FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE
            FIGHTING AGRICULTURE | RESIDENTIAL
          </p>
        </div>
      </div>

      <div />
    </div>
  );
}

export default App;
