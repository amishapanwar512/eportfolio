import React from "react";
import './Publication.css'
function Publication() {
    const publications = [
        {
            title: "Bitcoin’s Evolution and Business Implications",
            description: "Whitepaper to Market Trends: Unraveling Bitcoin’s Evolution and Business Implications – Publishedin an IEEE Conference, this paper examines Bitcoin’s evolution, its impact on business practices,market dynamics, and investment strategies. It provides insights into the role of cryptocurrency in modernfinancial ecosystems, analyzing trends, adoption challenges, and regulatory implications.",
            link: "https://ieeexplore.ieee.org/document/10543225"
        }
    ];

    return (
        <>

            <div className="publications-section">
                <h2>Publications</h2>
                <div className="publications-container">
                    {publications.map((pub, index) => (
                        <div key={index} className="card">
                            <h3>{pub.title}</h3>
                            <p>{pub.description}</p>
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="read-more-btn">Read Paper</a>
                        </div>
                    ))}
                </div>
            </div>
</>
    );
}

export default Publication;
