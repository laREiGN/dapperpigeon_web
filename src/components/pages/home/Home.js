import React from "react";

import './Home.css';
import { MostRecentPost } from "../../common";

export default function Home() {
    return (
        <div className="homeContainer">
            <div className="ctaContainer">
                <h1>About us</h1>
                <div className="flex">
                    <div>
                        <img className="logo" src={'assets/logos/DPLogoFull.png'} alt="Dapper Pigeon Logo"/>
                    </div>
                    <div>
                        <p>
                            We are Dapper Pigeon - a game studio that consists of <span className="textAccent">16 students.</span> The studio was
                            created as part of the <span className="textAccent">Game Design and Development minor</span> at the 
                            <span className="textAccent">Rotterdam University of Applied Sciences.</span>
                            Our team consists of 5 developers, 5 designers and 6 artists.
                        </p>
                        <p>
                            Our goal and task is to create a <span className="textAccent">3D game in 13 weeks</span>, 
                            starting mid october and ending mid january. This website will serve as a blog to showcase our progress and update our fans about the current state of the game.
                        </p>
                    </div>
                </div>
                <MostRecentPost />
            </div>
        </div>
    )
}