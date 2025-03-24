import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo"><a href="/">Amisha</a></div>
                <div className="pages">
                    <Link to="/">Home</Link>
                    <a href="#ab">About me</a>
                    <Link to="/project">Projects</Link>
                    <Link to="/pese">PESE</Link>
                    <Link to="/assignment">Assignment</Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
