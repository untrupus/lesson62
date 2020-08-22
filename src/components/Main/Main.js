import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main-block">
            <div className="main-block-bg">
                <div className="container">
                    <h1>Boost up your Local business</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        typesetting
                        Iste a incidunt eius velit, tenetur voluptate cupiditate aspernatur aut minima, aliquid aperiam
                        accusamus.
                        doloribus sequi hic modi culpa blanditiis quaerat. Pariatur nemo, hic rem minima totam impedit
                        id ea
                        ab.
                        Error animi expedita sunt molestiae quaerat voluptate illo quibusdam magnam nesciunt.</p>
                    <img src={require("../../images/laptop.png")} alt="macbook"/>
                </div>
            </div>
        </div>
    );
};

export default Main;