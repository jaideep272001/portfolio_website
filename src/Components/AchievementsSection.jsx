import React from "react";
import "../CSS/AchievementsSections.css";

const achievements = [
  {
    title: "Category Winner - Vishwakarma Awards",
    details: "ITIC, IIT Hyderabad",
    year: "2024",
  },
  {
    title: "Patent - An IoT Based Window Opening System",
    details: "(202311055355)",
    year: "2023",
  },
  {
    title: "Guest Speaker",
    details: "Pregrad",
    year: "2023",
  },
  {
    title: "Factory and Warehouse Automation Project Funded by iStart",
    details: "(2.4 Lacs)",
    year: "2023",
  },
  {
    title: "Eklavya Award for Academic Excellence",
    details: "Poddar Group of Institutions (Two Consecutive Years)",
    year: "2022 - 2023",
  },
];

const Achievements = () => {
  return (
    <div className="achievementsSection">
      <h1 className="achievementsTitle">A C H I E V E M E N T S</h1>
      <div className="achievementsGrid">
        {achievements.map((ach, idx) => (
          <div key={idx} className="achievementCard">
            <div className="achievementContent">
              <h2>{ach.title}</h2>
              <p className="achievementDetails">{ach.details}</p>
              <p className="achievementYear">{ach.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
