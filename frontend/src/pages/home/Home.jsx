import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "react-animated-progress-bar";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaReact, FaJava } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import {
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoGithub,
} from "react-icons/io";
import {
  SiMysql,
  SiNodedotjs,
  SiNotion,
  SiJira,
  SiScrumalliance,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { GoProject } from "react-icons/go";
import LetsTalk from "@components/letsTalk/LetsTalk";

import "./Home.css";

export default function Home() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`).then((userData) => {
      setUserInfo(userData.data[0]);
    });
  }, []);

  return (
    <div className="div-container-home">
      <h1 className="home">home</h1>
      <div className="div-avatar-info">
        <div className="avatar">
          <img src="../src/assets/AJL-photo.jpg" alt="" />
          <div>
            <h1>{userInfo.firstname}</h1>
            <p>{userInfo.profession}</p>
            <a href="../src/assets/mycv.pdf" download className="cv-link">
              Télécharger le CV en pdf
            </a>
          </div>
        </div>

        <div className="user-info">
          <p>Email : {userInfo.email}</p>
          <p>Téléphone : {userInfo.phone}</p>
          <div className="div-social-network">
            <h2>Réseaux sociaux</h2>
            <ImFacebook2 className="social-network-icon" />
            <BsLinkedin className="social-network-icon" />
            <FaGithubSquare className="github-icon" />
          </div>
        </div>
      </div>

      <div className="about">
        <h1>A propos</h1>
        <p className="about">{userInfo.presentation}</p>
      </div>

      <div className="all-skills">
        <div className="skills-back">
          <span>BACK-END</span>
          <div>
            <FaJava className="java-icon language-icon" />
            <ProgressBar
              width="400px"
              height="10px"
              rect
              fontColor="gray"
              percentage="80"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </div>

          <div>
            <SiMysql className="mysql-icon language-icon" />
            <ProgressBar
              width="400px"
              height="10px"
              rect
              fontColor="gray"
              percentage="80"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </div>
          <div>
            <SiNodedotjs className="node-icon language-icon" />
            <ProgressBar
              width="400px"
              height="10px"
              rect
              fontColor="gray"
              percentage="20"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </div>
        </div>

        <div className="skills-front">
          <span>FRONT-END</span>
          <div>
            <IoLogoJavascript className="js-icon language-icon" />
            <ProgressBar
              width="400px"
              height="10px"
              rect
              fontColor="gray"
              percentage="55"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </div>
          <div>
            <FaReact className="react-icon language-icon" />
            <ProgressBar
              width="400px"
              height="10px"
              rect
              fontColor="gray"
              percentage="80"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </div>
          <div>
            <IoLogoHtml5 className="html-icon language-icon" />
            <ProgressBar
              width="400px"
              height="10px"
              rect
              fontColor="gray"
              percentage="50"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </div>
          <div>
            <IoLogoCss3 className="css-icon language-icon" />
            <ProgressBar
              width="400px"
              height="10px"
              rect
              fontColor="gray"
              percentage="70"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </div>
        </div>
      </div>

      <p className="p-tools">Outils de travail collaboratif et de conception</p>

      <div className="tools-for-collaborative">
        <DiGit className="git-icon language-icon" />
        <IoLogoGithub className="github-icon language-icon" />
        UML
      </div>

      <p className="p-tools">Les méthodologies de gestion de projet</p>

      <div className="div-projet-mgt">
        <SiNotion className="notion-icon language-icon" />
        <SiJira className="jira-icon language-icon" />
        <SiScrumalliance className="scrum-icon language-icon" />
        <GoProject className="kanban-icon language-icon" />
      </div>

      <p className="p-tools">Formations et expériences</p>
      <div className="div-trainig">
        <div className="titre">
          <p>Année 2022</p>
          <p>titre </p>
        </div>
        <div>
          <p>2000</p>
          <p>développeur Informatique</p>
        </div>
        <div>
          <p>2022</p>
          <p>titre</p>
        </div>
        <div>
          <p>2005</p>
          <p>titre</p>
        </div>
        <div>
          <p>2012</p>
          <p>titre</p>
        </div>
        <div>
          <p>2000</p>
          <p>développeur Informatique</p>
        </div>
        <div>
          <p>2022</p>
          <p>titre</p>
        </div>
        <div>
          <p>2005</p>
          <p>titre</p>
        </div>
        <div>
          <p>2012</p>
          <p>titre</p>
        </div>
      </div>
      <LetsTalk />
    </div>
  );
}
