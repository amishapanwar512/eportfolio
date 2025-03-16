import React from "react";
import './About.css';

function About() {
    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/19s3eO9RcDhiif43loSMYQ1HYSpKTOEgH/view?usp=sharing", "_blank");
    };

    return (
        <>
            <div className="about">
                <h1>About Me</h1>
                <p>
                    I am a passionate and driven Computer Science student at Graphic Era Hill University, with a strong
                    foundation in software development, machine learning, and algorithm design. With a keen interest in
                    building intelligent systems and innovative solutions, I have worked on a range of projects, from stock
                    trend prediction using LSTMs to WhatsApp chat analysis and movie recommendation systems. My technical
                    expertise includes Python, C++, JavaScript, TensorFlow, and Scikit-learn, alongside a solid grasp of
                    data structures and algorithms.
                    <br /><br />
                    Beyond academics, I thrive in collaborative and fast-paced environments, having participated in the
                    JPMorgan Chase Code for Good Hackathon, where my team built an AI-powered solution for an NGO. My research
                    on Bitcoin’s evolution and business implications has been published in an IEEE conference, demonstrating
                    my analytical skills and interest in emerging technologies.
                    <br /><br />
                    A strong advocate of lifelong learning and problem-solving, I am eager to leverage my skills to contribute
                    to cutting-edge projects, refine my expertise, and make a meaningful impact in the tech industry.
                </p>
                <button className="resume-button" onClick={handleDownload}>View My Resume</button>
            </div>
        </>
    );
};

export default About;
