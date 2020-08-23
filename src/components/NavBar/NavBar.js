import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <div className="underline">
        <div className="header container">
            <a href={"https://github.com/untrupus/lesson62"} className="logo">
                <img src={require("../../images/design-7.png")} alt="design"/>
            </a>
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/"
                                 className="navLink"
                                 >Main</NavLink></li>
                    <li><NavLink to="/services"
                                 className="navLink"
                                 activeStyle={{
                                     fontWeight: "bold",
                                     color: "#709dca"
                                 }}
                    >Our Services</NavLink></li>
                    <li><NavLink to="/about"
                                 className="navLink"
                                 activeStyle={{
                                     fontWeight: "bold",
                                     color: "#709dca"
                                 }}
                    >About</NavLink></li>
                    <li><NavLink to="/howitworks"
                                 className="navLink"
                                 activeStyle={{
                                     fontWeight: "bold",
                                     color: "#709dca"
                                 }}
                    >How it works</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
);


export default NavBar;