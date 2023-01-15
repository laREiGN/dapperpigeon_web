import React from "react";
import UspBorder from '../../../assets/images/UspBorder.svg'
import UspPotion from '../../../assets/images/UspPotion.svg'
import UspArrows from '../../../assets/images/UspArrows.svg'
import UspMushroom from '../../../assets/images/UspMushroom.svg'

import './USPs.css';

export default function USPs() {
    return (
        <div className="usp-container">
            <div className="usp-tight-container">
                <div className="usp-item">
                    <img className="usp-border" src={UspBorder} alt=""/>
                    <div className="usp-content">
                        <h3 className="usp-header">
                            Dive into a world of mystery
                        </h3>
                        <p className="usp-text">
                            Explore at your own pace. Find clues in the environment and piece together
                            your own theory as to how the world came to be.
                        </p>
                        <img className="usp-image" src={UspPotion} alt=""></img>
                    </div>
                </div>
                <div className="usp-item">
                    <img className="usp-border" src={UspBorder} alt="" />
                    <div className="usp-content">
                        <h3 className="usp-header">
                            Choose your own path
                        </h3>
                        <p className="usp-text">
                            Find your own way through the environment. The clearest path might not be the safest
                            one... Or the most adventurous.
                        </p>
                        <img className="usp-image" src={UspArrows} alt=""></img>
                    </div>
                </div>
                <div className="usp-item">
                    <img className="usp-border" src={UspBorder} alt="" />
                    <div className="usp-content">
                        <h3 className="usp-header">
                            Breathtaking environment
                        </h3>
                        <p className="usp-text">
                            The magic of music has not only affected the creatures within the world but the flora as well.
                            Glowing mushrooms and coral like fungi dot the landscape. Lose yourself in the rich environment.
                        </p>
                        <img className="usp-image" src={UspMushroom} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}