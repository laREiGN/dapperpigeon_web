import React from "react";

import { Layer1, Layer2, Layer3, Layer4 } from "../../../assets";
import './Home.css';

export default function Home() {

    return (
        <div className="home-container">
            <div className="parallax-wrapper">
                <div value="0" className="parallax-layer">
                    <Layer1 />
                </div>
                <div value="1" className="parallax-layer">
                    <Layer2 />
                </div>
                <div value="2" className="parallax-layer">
                    <Layer3 />
                </div>
                <div value="3" className="parallax-layer">
                    <Layer4 />
                </div>
                <div className="text-container">
                    <h1 className="title">DAPPER PIGEON</h1>
                    <h2 className="subtitle">Soon available on Steam</h2>
                </div>
            </div>
        </div>
    )
}