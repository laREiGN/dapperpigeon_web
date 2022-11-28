import React from "react";
import Particles from "react-tsparticles";

import { fallingstars_config } from "../../particles";

import './FallingStarsParticles.css'

export default function FallingStarsParticles() {
    return (
        <div className="particle-container">
            <Particles
                id="ts-fallingstats-particles"
                options={fallingstars_config}
            />
        </div>
    )
}