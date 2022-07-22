import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="div-footer">
      <div className="social-network">
        <ImFacebook2 className="social-network-icon" />
        <BsLinkedin className="social-network-icon" />
        <FaGithubSquare className="github-icon" />
      </div>
      <p>Copyrights 2022</p>
    </div>
  );
}
