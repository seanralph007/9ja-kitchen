import React from "react";
import BannerBackground from "../assets/home-banner-background2.png";
import Jollof from "../assets/Jollof.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-container">
          <h1 className="primary-heading">
            Your Favourite Nigerian Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Experience the warmth of a true Nigerian kitchen! Our chefs prepare
            every meal fresh, blending traditional recipes with a homely touch
            that keeps you coming back for more.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={Jollof} alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
