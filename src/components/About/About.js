import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">

            <div className="about-col ">
                <img src={require("../../images/photo-1.jpg")} className="about-pic" alt="table"/>
            </div>

            <div className="about-col about-info">
                <div className="about-info-inner">
                    <h3>ABout us</h3>
                    <p className="about-us">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem
                        Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley
                        of
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        ore
                        recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum</p>
                    <a href={"https://github.com/untrupus/lesson62"} className="read-more">Read more</a>
                </div>

            </div>

        </section>
    );
};

export default About;