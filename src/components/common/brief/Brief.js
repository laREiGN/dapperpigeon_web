import React from "react";

import './Brief.css';

export default function Brief() {
    return (
        <div className="brief-container">
            <div className="brief-text">
                <h1 className="ctatitle">EXPLORE</h1>
                <h2 className="ctasubtitle">You are their only hope</h2>
                <p className="ctabrief">
                    <strong>Game Title</strong> is a free-to-play adventure game set in a dark fantasyworld, where danger lurks in every
                    corner. Find out what happened while searching for lost souls, but watch out, 
                    their bodies will not let their soul back in without resistance! Discover new parts of
                    the world while restoring the balance back to its original state.
                </p>
                <a href="https://www.google.com/" target="_blank" className="ctabutton">
                    PRE-SAVE NOW
                </a>
            </div>
            <div className="brief-image">
            </div>
        </div>
    )
}