import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="section-3 container">
            <h4>How it works</h4>
            <p className="title-2">Lorem Ipsum is simply dummy Business industry</p>
            <div className="steps">
                <div className="step step-1">
                    <p className="st">step 1</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting ind
                    ustry. Lorem Ipsum has been</span>
                </div>
                <div className="step step-2">
                    <p className="st">step 2</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting ind
                    ustry. Lorem Ipsum has been</span>
                </div>
                <div className="step step-3">
                    <p className="st">step 3</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting ind
                    ustry. Lorem Ipsum has been</span>
                </div>
                <div className="step step-4">
                    <p className="st">step 4</p>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting ind
                    ustry. Lorem Ipsum has been</span>
                </div>

                <button type="button" className="btn">get start now</button>

            </div>
        </section>
    );
};

export default HowItWorks;