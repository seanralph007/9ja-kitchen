import React from "react";
import AboutBackground from "../assets/about-background.png";
import Spag from "../assets/Spag.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={Spag} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <p className="primary-subheading">About</p> */}
        <h1 className="primary-heading">The Flavor Behind Our Name</h1>
        <p className="primary-text">
          At 9ja Kitchen, we bring the comfort of Nigerian home-cooked meals
          straight to your plate. Our dishes are inspired by the flavors we grew
          up with
        </p>
        <p className="primary-text">
          From the sizzling aroma of stew on a Sunday afternoon, to the soft
          warmth of freshly made swallow.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
