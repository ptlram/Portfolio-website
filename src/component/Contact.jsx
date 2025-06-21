import React from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Me</h1>
        <div
          className="contact-icon"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/ram__ptl?igsh=bHJtcmFnZWVlN2Jm"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/share/19hp5CAHWX/"
            target="_blank"
            className="items"
          >
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/ptlram/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/ptlram" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:ramvijaypatel96@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
