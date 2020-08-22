import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>

            <div className="footer container">
            <span className="copyright">All contents © copyright 2014 Business Theme. All rights reserved Designed by :
                akhilwebfolio</span>

                <p className="phone"> Телефон: <span>+987 9976 999</span></p>

                <div className="links">
                    <a href="#" className="link link-sc"></a>
                    <a href="#" className="link link-tw"></a>
                    <a href="#" className="link link-gg"></a>
                </div>

            </div>

        </footer>
    );
};

export default Footer;