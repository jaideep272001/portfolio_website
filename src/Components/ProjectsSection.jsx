import React from 'react'
import "../CSS/ProjectsSection.css"

import cPlusPlus from "../assets/Languages/c++_image.png"
import css from "../assets/Languages/css.png"
import html from "../assets/Languages/html.png"
import js from "../assets/Languages/js.png"
import ts from "../assets/Languages/ts.png"
import xml from "../assets/Languages/xml.png"
import embeddedC from "../assets/Languages/embedded_c.png"

import express from "../assets/Frameworks/express.png"
import node from "../assets/Frameworks/node.png"
import react from "../assets/Frameworks/React.png"
import reactNative from "../assets/Frameworks/react-native.png"

import androidStudio from "../assets/Tools/android-studio.png"
import docker from "../assets/Tools/docker.png"
import git from "../assets/Tools/Git.png"
import github from "../assets/Tools/github.svg"
import postman from "../assets/Tools/postman.png"
import VSCode from "../assets/Tools/vscode.png"
import Xcode from "../assets/Tools/xcode.png"

import mongoDB from "../assets/Databases/mongodb.png"
import mysql from "../assets/Databases/mysql.png"

import android from "../assets/OS/android.png"
import macOS from "../assets/OS/macos.png"
import linux from "../assets/OS/linux.png"
import windows from "../assets/OS/windows.png"
import ios from "../assets/OS/ios.png"
import pi from "../assets/OS/pi.png"

const ProjectsSection = () => {
    return (
        <div className='profileSection'>
            <h1 className='profileHead'>Areas of Proficiency</h1>
            <p className='profilePara'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi officia ea officiis quaerat recusandae, veritatis tenetur in reiciendis facilis? Inventore saepe ea doloremque velit quisquam. Numquam, praesentium facere cupiditate tempore error quod voluptatum nostrum! Quis eligendi voluptatibus deserunt ratione.\</p>
            <h4 className='profileHead2'>Languages</h4>
            <div className='imgdiv'>
                <img src={cPlusPlus} alt="C++" />
                <img src={embeddedC} alt="Embedded C" />
                <img src={html} alt="HTML" />
                <img src={css} alt="CSS" />
                <img src={js} alt="JavaScript" />
                <img src={ts} alt="TypeScript" />
                <img src={xml} alt="XML" />
            </div>
            <h4 className='profileHead2'>Frameworks</h4>
            <div className='imgdiv'>
                <img src={node} alt="Node JS" />
                <img src={express} alt="Express JS" />
                <img src={react} alt="React JS" />
                <img src={reactNative} alt="React Native" />
            </div>
            <h4 className='profileHead2'>Tools</h4>
            <div className='imgdiv'>
                <img src={androidStudio} alt="Android Studio" />
                <img src={Xcode} alt="X Code" />
                <img src={git} alt="Git" />
                <img src={github} alt="Github" />
                <img src={postman} alt="Postman" />
                <img src={VSCode} alt="VS Code" />
                <img src={docker} alt="Docker" />
            </div>
            <h4 className='profileHead2'>Databases</h4>
            <div className='imgdiv'>
                <img src={mysql} alt="MySQL" />
                <img src={mongoDB} alt="MongoDB" />
            </div>
            <h4 className='profileHead2'>Operating Systems</h4>
            <div className='imgdiv'>
                <img src={windows} alt="Windows" />
                <img src={macOS} alt="Mac OS" />
                <img src={linux} alt="Linux" />
                <img src={android} alt="Android" />
                <img src={ios} alt="iOS" />
                <img src={pi} alt="Raspberry Pi" />
            </div>
            <h4 className='profileHead2'>Dev-Ops</h4>
            <div className='imgdiv'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            <h4 className='profileHead2'>AWS Services</h4>
            <div className='imgdiv'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <p className='cta2'>Get in Touch with Me</p>
        </div>
    )
}

export default ProjectsSection