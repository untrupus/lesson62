import React from 'react';
import './Services.css';

const Services = () => {
    return (
            <section className="section-1 container">
                <h2>Our Services</h2>
                <p className="title-1">Lorem Ipsum is simply dummy Business industry.</p>

                <div className="services">

                    <div className="service font ">
                        <h5>Font-Awesome Icons</h5>
                        <p className="serv">Lorem Ipsum is simply dummy text of the printing and typesetting ind
                            ustry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer.</p>
                        <a href={"https://github.com/untrupus/lesson62"} className="read">Read More</a>
                    </div>

                    <div className="service design ">
                        <h5>Fully Responsive Design</h5>
                        <p className="serv">Many desktop publishing packages and web page editors now use Lorem Ipsum as
                            their
                            default model text, and a search for 'lorem ipsum' </p>
                        <a href={"https://github.com/untrupus/lesson62"} className="read">Read More</a>
                    </div>

                    <div className="service form ">
                        <h5>Working Contact form</h5>
                        <p className="serv">Many desktop publishing packages and web page editors now use Lorem Ipsum as
                            their
                            default model text, and a search for infancy</p>
                        <a href={"https://github.com/untrupus/lesson62"} className="read">Read More</a>
                    </div>

                    <div className="service retina ">
                        <h5>Retina Ready icons here</h5>
                        <p className="serv">There are many variations of passages of Lorem Ipsum available, but the
                            majority have
                            suffered alteration in some form, by injected humour
                            or randomised words which don't look even slightly believable.</p>
                        <a href={"https://github.com/untrupus/lesson62"} className="read">Read More</a>
                    </div>

                    <div className="service code ">
                        <h5>Friendly Code</h5>
                        <p className="serv">Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                            exact original form, accompanied by English versions from the 1914 translation by H.
                            Rackham</p>
                        <a href={"https://github.com/untrupus/lesson62"} className="read">Read More</a>
                    </div>

                    <div className="service flat ">
                        <h5>Flat trendy landing page Design</h5>
                        <p className="serv">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum
                            has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer.</p>
                        <a href={"https://github.com/untrupus/lesson62"} className="read">Read More</a>
                    </div>

                </div>

            </section>
    );
};

export default Services;