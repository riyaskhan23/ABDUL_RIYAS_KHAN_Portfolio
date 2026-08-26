import React from 'react';
import './Education.css';

export default function Education() {
  const educationList = [
    {
      degree: "MCA",
      year: "2022 - 2024",
      institution: "J.J.College of Arts and Science",
      location: "Pudukkottai"
    },
    {
      degree: "B.Sc, PHYSICS",
      year: "2019 - 2022",
      institution: "Alagappa Govt Arts College",
      location: "Karaikudi"
    },
    {
      degree: "Class XII",
      year: "2018 - 2019",
      institution: "N.S.M.V.P.S.Hr.Sec.School",
      location: "Devakottai"
    },
    {
      degree: "Class X",
      year: "2016 - 2017",
      institution: "N.S.M.V.P.S.Hr.Sec.School",
      location: "Devakottai"
    }
  ];

  return (
    <section id="education" className="education-section">
      {/* Background Ambient Graphics */}
      <div className="edu-unique-glow glow-one"></div>
      <div className="edu-unique-glow glow-two"></div>
      <div className="edu-unique-grid"></div>

      <div className="education-card">
        
        {/* Randomly Positioned Floating Graphic Badges */}
        <div className="edu-floating-badge edu-badge-random-1"><span>🎓 Graduation</span></div>
        <div className="edu-floating-badge edu-badge-random-2"><span>💡 Learning</span></div>
        <div className="edu-floating-badge edu-badge-random-3"><span>🚀 MCA & Science</span></div>
        <div className="edu-floating-badge edu-badge-random-4"><span>✨ Academic</span></div>
        <div className="edu-floating-badge edu-badge-random-5"><span>⚡ Growth</span></div>
        <div className="edu-floating-badge edu-badge-random-6"><span>💻 Problem Solving</span></div>

        {/* Header */}
        <div className="education-heading-container">
          <h2 className="education-main-title">E D U C A T I O N</h2>
          <p className="education-subtitle">Learning Never Exhausts The Mind</p>
        </div>

        {/* Timeline / Diagonal Cards Container */}
        <div className="timeline-container">
          {educationList.map((item, index) => (
            <div key={index} className={`timeline-item item-${index}`}>
              <div className="timeline-dot"></div>
              <div className="edu-box">
                <div className="edu-box-header">
                  <h3 className="edu-degree">{item.degree}</h3>
                  <span className="edu-year">{item.year}</span>
                </div>
                <p className="edu-institution">{item.institution}</p>
                <p className="edu-location">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Footer */}
        <div className="education-loading-footer">
          <span className="loading-text">Loading Journey</span>
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