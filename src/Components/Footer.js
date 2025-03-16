import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Amisha Panwar.</p>
        <div className="social-links">
          <a href="https://github.com/amishapanwar512" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/amisha-panwar-562680251" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:amishapanwar512@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
