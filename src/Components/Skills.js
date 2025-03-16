import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiTensorflow, SiMongodb, SiNumpy, SiPandas, SiC } from "react-icons/si";
import "./Skills.css";

const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C", icon: <SiC /> }
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React.js", icon: <FaReact /> },
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
];

function Skills() {
  return (
    <div className="skills-section">
      <h1>Skills & Technologies</h1>
      <div className="skills-container">
        {skills.map((group, index) => (
          <div key={index} className="skill-category">
            <h2>{group.category}</h2>
            <div className="skills-list">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="skill">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
