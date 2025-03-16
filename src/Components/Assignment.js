import React from "react";
import "./Assignment.css";

function Assignment() {
    const assignments = [
        {
            title: "Assignment 1: Watch movies and answer the following questions:",
            description: (
                <>
                    <p><b><big>Movie: Whiplash</big></b></p><br/>
                    <p><b>Favourite Dialogue:</b> "There are no two words in the English language more harmful than 'good job'."
                    This line highlights the importance of pushing beyond limits to achieve greatness.</p>

                    <p><b>Personal Review:</b> An intense film about a music student and his demanding teacher. It showcases the struggle behind success and the fine line between motivation and cruelty.</p>

                    <p><b>Learning to Take Away:</b> Hard work is key, but balance is essential—success should not come at the cost of mental health.</p>

                    <p><b>Related Concepts:</b> Discipline, practice, and motivation (intrinsic & extrinsic).</p>
                    <br></br><br></br>
                    <p><b><big>Movie: The Social Network</big></b></p><br/>
                    <p><b>Favourite Dialogue:</b> "If you guys were the inventors of Facebook, you would have invented Facebook."A bold statement that emphasizes execution over just having an idea.</p>

                    <p><b>Personal Review:</b> A gripping story about Facebook’s creation, highlighting ambition, friendship, and betrayal.</p>

                    <p><b>Learning to Take Away:</b> Innovation demands effort and risk-taking, but success can also bring personal and ethical challenges.</p>

                    <p><b>Related Concepts:</b> Entrepreneurship, business ethics, intellectual property, leadership, and teamwork.</p>
                </>
            ),
        }
    ];

    return (
        <div className="assign">
            <h1>Assignments</h1>
            <div className="assign-card">
            {assignments.map((element, indx) => (
                <div key={indx} className="assign-item">
                    <div className="assign-title">
                        <h3>{element.title}</h3>
                    </div>
                    <div className="assign-description">{element.description}</div>

                </div>
            ))}
        </div>
        <hr></hr>
        </div>
    );
}

export default Assignment;
