import React from "react";
import "../CSS/SkillsSection.css";

// Languages
import cPlusPlus from "../assets/Languages/c++_image.png";
import css from "../assets/Languages/css.png";
import html from "../assets/Languages/html.png";
import js from "../assets/Languages/js.png";
import ts from "../assets/Languages/ts.png";
import xml from "../assets/Languages/xml.png";
import embeddedC from "../assets/Languages/embedded_c.png";

// Frameworks
import express from "../assets/Frameworks/express.png";
import node from "../assets/Frameworks/node.png";
import react from "../assets/Frameworks/React.png";
import reactNative from "../assets/Frameworks/react-native.png";

// Tools
import androidStudio from "../assets/Tools/android-studio.png";
import docker from "../assets/Tools/docker.png";
import git from "../assets/Tools/Git.png";
import github from "../assets/Tools/github.svg";
import postman from "../assets/Tools/postman.png";
import VSCode from "../assets/Tools/vscode.png";
import Xcode from "../assets/Tools/xcode.png";

// Databases
import mongoDB from "../assets/Databases/mongodb.png";
import mysql from "../assets/Databases/mysql.png";

// OS
import android from "../assets/OS/android.png";
import macOS from "../assets/OS/macos.png";
import linux from "../assets/OS/linux.png";
import windows from "../assets/OS/windows.png";
import ios from "../assets/OS/ios.png";
import pi from "../assets/OS/pi.png";

const ProficiencySection = () => {
  const categories = [
    { title: "Languages", icons: [cPlusPlus, embeddedC, html, css, js, ts, xml] },
    { title: "Frameworks", icons: [node, express, react, reactNative] },
    { title: "Tools", icons: [androidStudio, Xcode, git, github, postman, VSCode, docker] },
    { title: "Databases", icons: [mysql, mongoDB] },
    { title: "Operating Systems", icons: [windows, macOS, linux, android, ios, pi] },
  ];

  return (
    <div className="proficiencySection">
      <h1 className="sectionTitle">Areas of Expertise</h1>
      <p className="sectionDesc">
        A curated list of technologies, tools, and platforms I use to deliver professional solutions.
      </p>

      {categories.map((cat, idx) => (
        <div key={idx} className="categoryBlock">
          <h2 className="categoryTitle">{cat.title}</h2>
          <div className="iconRow">
            {cat.icons.map((icon, i) => (
              <div key={i} className="iconCard">
                <img src={icon} alt={cat.title + i} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProficiencySection;
