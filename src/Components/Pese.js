import React from "react";
import "./Pese.css";

function Pese() {
    const weeks = [
        { week: "Week 1", progress: " Our teacher introduced herself and shared her life experiences. She gave us insights into the corporate world, explaining how professionalism, communication, and adaptability play a crucial role in career growth. Her experiences helped us understand the expectations and challenges of the professional environment.", videoLink: "https://drive.google.com/file/d/1DTbeA5ZeYHtkntvUyt8U0ZqG0RWJbIkb/view?usp=drive_link" },
        { week: "Week 2", progress: "To teach us time management, our teacher conducted an interactive exercise. We were asked if were  given a container along with big rocks, small gravels, sand, water, and oil. The challenge was to fit all the elements into the container in the best possible way. Through this activity, we learned the importance of prioritization—placing the big rocks first (important tasks), followed by smaller elements, ensuring everything fits efficiently. This exercise highlighted how proper planning and organization can help us manage our time effectively.", videoLink: "https://drive.google.com/file/d/1xqNLe9z-EYsRBg67Dm-5-zsvGUrk4cQR/view?usp=sharing" },
        { week: "Week 3", progress: "In the third week, we learned the art of self-introduction. Our teacher emphasized the importance of being well-dressed, well-groomed, and confident while presenting ourselves. We understood that a good introduction should be clear, concise, and engaging, leaving a positive first impression. Dressing professionally and maintaining good body language also play a key role in making a strong impact.", videoLink: "https://drive.google.com/file/d/1t4c1TKGssUOwPoU2G6G6dWaqoRsi45ZB/view?usp=sharing" },
    ];

    return (
        <div className="pese-container">
            <h2>PESE Lab - Weekly Progress</h2>
            <div className="timeline">
                {weeks.map((week, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-content">
                            <h3>{week.week}</h3>
                            <p>{week.progress}</p>
                            <a href={week.videoLink} target="_blank" rel="noopener noreferrer" className="watch-video-btn">
                                🎥 Watch Video
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pese;
