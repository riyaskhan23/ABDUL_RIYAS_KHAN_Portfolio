import React from 'react';

import Python from '/icons/Python.svg'
import FasApi from '/icons/FastAPI.svg'
import Php from '/icons/PHP.svg'
import Laravel from '/icons/Laravel.svg'
import MySql from '/icons/mysql.svg'
import Html from '/icons/html.svg'
import Css from '/icons/css.svg'
import Js from '/icons/JavaScript.svg'
import ReactLogo from '/icons/React.svg'
import MongoDb from '/icons/MongoDB.svg'


import Git from '/icons/Git.svg'
import Github from '/icons/Github.svg'
import MsOffice from '/icons/MS_office.svg'
import Figma from '/icons/Figma.svg'
import Photoshop from '/icons/Adobe_Photoshop.svg'
import Illustrator from '/icons/Adobe_Illustrator.svg'
import AfterEffects from '/icons/Adobe_After_Effects.svg'
import PremierPro from '/icons/Adobe_Premiere_Pro.svg'


import './Skills.css';

export default function Skills() {
  const programmingSkills = [
    { name: "Python", icon: <img src={Python} /> },
    { name: "FastAPI", icon: <img src={FasApi} /> },
    { name: "PHP", icon: <img src={Php} /> },
    { name: "Laravel", icon: <img src={Laravel} /> },
    { name: "MySQL", icon: <img src={MySql} /> },
    { name: "HTML", icon: <img src={Html} /> },
    { name: "CSS", icon: <img src={Css} /> },
    { name: "JavaScript", icon: <img src={Js} /> },
    { name: "React", icon: <img src={ReactLogo} /> },
    { name: "MongoDB", icon: <img src={MongoDb} /> }
  ];

  const otherSkills = [
    { name: "Git", icon: <img src={Git} /> },
    { name: "Github", icon: <img src={Github} /> },
    { name: "MS Office", icon: <img src={MsOffice} /> },
    { name: "Photoshop", icon: <img src={Photoshop} /> },
    { name: "Figma", icon: <img src={Figma} /> },
    { name: "Illustrator", icon: <img src={Illustrator} /> },
    { name: "AfterEffects", icon: <img src={AfterEffects} /> },
    { name: "PremierePro", icon: <img src={PremierPro} /> }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-unique-glow glow-one"></div>
      <div className="skills-unique-glow glow-two"></div>
      <div className="skills-unique-grid"></div>

      <div className="skills-card">
        
        {/* Random Floating Badges scattered across the card */}
        <div className="skill-floating-badge badge-random-1"><span>💻 &lt;/&gt;</span></div>
        <div className="skill-floating-badge badge-random-2"><span>🚀 Full Stack</span></div>
        <div className="skill-floating-badge badge-random-3"><span>🎮 Gaming & Dev</span></div>
        <div className="skill-floating-badge badge-random-4"><span>✨ UI / UX</span></div>
        <div className="skill-floating-badge badge-random-5"><span>⚡ Creative</span></div>

        <div className="skills-heading-container">
          <h2 className="skills-main-title">S K I L L S</h2>
          <p className="skills-subtitle">These are some skills I learnt</p>
        </div>

        <div className="skills-boxes-container">
          
          {/* Box 1: Programming */}
          <div className="skill-box">
            <h3 className="box-title">Programming</h3>
            <div className="badges-grid-random">
              {programmingSkills.map((skill, index) => (
                <div key={index} className={`skill-badge badge-tilt-${index % 4}`}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: Others */}
          <div className="skill-box">
            <h3 className="box-title">Others</h3>
            <div className="badges-grid-random">
              {otherSkills.map((skill, index) => (
                <div key={index} className={`skill-badge badge-tilt-${(index + 2) % 4}`}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="skills-loading-footer">
          <span className="loading-text">Loading Skills</span>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </section>
  );
}