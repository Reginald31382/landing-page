import React from "react";
import { assets } from "../Assets/assets";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={assets.square} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Unboxed Potential</h1>
          <p className="primary-text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. At vitae
            ridiculus inceptos dictumst accumsan elit interdum orci molestie.
          </p>
          <button className="secondary-button">
            Schedule a Consultation <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={assets.grow} />
        </div>
      </div>
    </div>
  );
};

export default Home;
