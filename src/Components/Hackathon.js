import React from "react";
import "./Hackathon.css"; // Make sure to create this CSS file
import { FaHackerrank } from "react-icons/fa";

function Hackathon() {
  return (
    <div className="hackathon">
      <h1><FaHackerrank /> Hackathon Experience</h1>
      <h2>JPMorgan Chase Code for Good Hackathon</h2>
      <p>
        Participated in a 24-hour hackathon, competing among 200 students selected from 53,000 applicants.
        Worked in a team of seven to develop an AI-powered solution for the NGO U&I organization.
      </p>
      <ul>
        <li>🚀 Automated volunteer-student matching for better engagement.</li>
        <li>📊 Developed interactive dashboardsfor real-time data visualization & forecasting.</li>
        <li>🎤 Built an AI model for real-time evaluation via video transcription & question generation.</li>
        <li>📚 Designed an automated assessment system to streamline training processes.</li>
        <li>🔧 Developed a customizable lesson plan system for personalized learning.</li>
      </ul>
    </div>
  );
};

export default Hackathon;
