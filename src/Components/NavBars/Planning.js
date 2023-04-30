import React from "react";
import './Style.css';

const Planning = () => {
    return (
        <ul id="planning-menu" className="nav-bar">
            <li className="planning-menu-item">
                <a href="#locations">
                Your Destination
                </a>
            </li>
            <li className="planning-menu-item">
                <a href="#SustainableHeading">
                Guidelines
                </a>
            </li>
            <li className="planning-menu-item" >
                <a href="#weather">
                Weather
                </a>
            </li>
            <li className="planning-menu-item">
                <a href="#reviews">
                Reviews
                </a>
            </li>
        </ul>
    );
}

export default Planning;