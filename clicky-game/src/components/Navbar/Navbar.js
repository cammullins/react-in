import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-bar ">
            <li>Clicky Game</li>
            <li>{props.message}</li>
            <li>Score: {props.score} | Top Score: {props.highScore}</li>
        </ul>
    </div>
);

export default Navbar;