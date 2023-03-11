import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Beats All rights reserved</p>
      <p className="icons">
        <a target="_blank" href="https://www.instagram.com/beatsbydre/">
          <AiFillInstagram />
        </a>
        <a target="_blank" href="https://twitter.com/beatsbydre">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
