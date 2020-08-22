import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <div className="header container">
        <a href="#" className="logo">
            <img src={require("../../images/design-7.png")} alt="design"/>
        </a>
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/" className="navLink">Main</NavLink></li>
                <li><NavLink to="/services" className="navLink">Our Services</NavLink></li>
                <li><NavLink to="/about" className="navLink">About</NavLink></li>
                <li><NavLink to="/howitworks" className="navLink">How it works</NavLink></li>
            </ul>
        </nav>
    </div>
);


export default NavBar;