import React from "react";
import ExploreImage from '../../../assets/images/ExploreImage.png'

import './Brief.css';

export default function Brief() {
    return (
        <div className="brief-container">
            <div className="brief-text">
                <h1 className="ctatitle">EXPLORE</h1>
                <h2 className="ctasubtitle">Tune into the power of magical frequencies</h2>
                <p className="ctabrief">
                    <strong>Forest of Frequencies</strong> is a single player 
                    adventure strategy game where you can explore a world filled
                    with dangerous creatures, breathtaking flora and spirits
                    looking for their bodies. Effect the world around you with
                    music. Search for magical frequencies to aid you on your
                    journey. Hypnotise enemies, guide souls and defeat hungry
                    hollow husks all through the power of music.
                </p>
                <a href="https://www.google.com/" rel="noreferrer" target="_blank" className="btn secondary">
                    PRE-SAVE NOW
                </a>
            </div>
            <div className="brief-image-container">
                <img className="brief-image" src={ExploreImage} alt=""></img>
            </div>
        </div>
    )
}