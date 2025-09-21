import React from "react";
import "../CSS/Certifications.css";

const certifications = [
  {
    title: "Advanced Certificate Course on Robotics and Automations",
    issuer: "RCAT Jaipur",
    year: "2023",
  },
  {
    title: "Digital Marketing 101",
    issuer: "CoreApps Tech, Jaipur",
    year: "2020",
  },
  {
    title: "Certificate Course on Android App Development",
    issuer: "AIYCSM, Gujarat University",
    year: "2019",
  },
];

const Certifications = () => {
  return (
    <div className="certificationsSection">
      <h1 className="certificationsTitle">CERTIFICATIONS</h1>
      <div className="certificationsGrid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="certCard">
            <div className="certContent">
              <h2>{cert.title}</h2>
              <p className="certIssuer">{cert.issuer}</p>
              <p className="certYear">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
