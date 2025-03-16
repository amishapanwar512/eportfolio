import React from "react";
import './Project.css';
import {FaGithub } from "react-icons/fa";

function Project() {
    const project = [
        {
            name: "Stock Trend Prediction",
            description: 'Developed a stock price prediction model using LSTM (Long Short-Term Memory) networks, leveraging historical market data for time-series forecasting. Implemented data preprocessing,train-test split and feature scaling to enhance model performance. Achieved high accuracy with an R² score of 0.96, MAE of 3.78, and RMSE of 4.91, demonstrating strong predictive capabilities',
            tech: "Python,TensorFlow/Keras, Scikit-learn, Pandas, Matplotlib, Yahoo Finance API",
            link:""
        },
        {
            name: "Movie Recommendation System",
            description: "Built a content-based movie recommendation system using NLP and machinelearning. Preprocessed movie metadata, extracted key features, and vectorized text using Scikitlearn’sCountVectorizer. Computed cosine similarity to measure movie relevance and generated personalized recommendations based on content similarity.",
            tech: "Python,Scikit-learn,CountVectorizer,Cosine Similarity,Pandas,Numpy ",
             link:""
        },
        {
            name: "WhatsApp Chat Analysis",
            description: "Developed a comprehensive WhatsApp Chat Analysis tool using Python. Theanalyses are performed through data manipulation and visualization libraries such as Pandas,WordCloud,and Matplotlib, delivering insightful and visually appealing representations of WhatsApp chat data.",
            tech: " Python, Pandas, Matplotlib, WordCloud",
            link:""
        },
    ]

    return <>
        <div className="projects">
            <h1 id="heading">Projects</h1>
            {project.map((element, index) => (
                <div className="project-card">
                    <div key={index} className="project-heading">
                        <h1>{element.name}<a href={element.link}><FaGithub className="githubIcon"/></a></h1>
                    </div>
                    <div className="project-detail">
                        <p>{element.description}</p>
                    </div>
                    <div className="project-tech">
                        <p><strong>Tech used:</strong>{element.tech}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
}

export default Project;