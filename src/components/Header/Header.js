import React from "react";
import "./Header.css";

const Header = props => (
    <nav className="navbar navbar-default">
        <h1>Click on the game boxes, but not the same one twice!</h1>
        <ul>
        <li className = "brand">Clicky Game</li>
        <li>Pick an image to start!</li>
        <li>Current Score: {props.score} | Highest Score: {props.highScore} </li>
        </ul>
    </nav>
);


export default Header;
