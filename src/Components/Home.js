import React from "react";
import './Home.css';
import About from './About.js';
import Skills from './Skills.js';
import Hackathon from "./Hackathon.js";
import Publication from "./Publication.js";

function Home() {
    return (
        <>
            <div className="home">
                <div className="main">
                    <div className="content">
                        <h1>HI!</h1>
                        <p id="para1">I am Amisha Panwar</p>
                        <p id="para2">An Aspiring Engineer</p>
                        <div className="socials">
                            <a href="https://github.com/amishapanwar512" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/amishapanwar512" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="mailto:amishapanwar512@gmail.com">
                                <i className="fa-solid fa-envelope"></i>
                            </a>
                            <a href="tel:+919520564585">
                                <i className="fa-solid fa-square-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <About/>
                </div>
                <div className="third">
                    <Skills />
                </div>
                <div className="fourth">
                    <Hackathon />
                </div>
                <div className="fifth">
                    <Publication />
                </div>
            </div>
        </>
    );
}

export default Home;
