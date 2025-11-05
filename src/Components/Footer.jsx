import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h3>9ja Kitchen</h3>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <span>Copyright {year}</span>
        <span>All rights reserved</span>
      </div>
      <div className="footer-section-three">
        <span>234-1234-5678</span>
        <span>9jaKitchen@gmail.com</span>
      </div>
      {/* <div className="footer-section-columns">
        <span>Copyright {year}</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div> */}
    </div>
  );
};

export default Footer;
