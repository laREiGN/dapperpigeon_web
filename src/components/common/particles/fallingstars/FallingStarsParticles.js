import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { fallingstars_config } from "../../particles";

import './FallingStarsParticles.css'

export default function FallingStarsParticles() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="particle-container">
            <Particles
                id="ts-fallingstars-particles"
                init={particlesInit}
                options={fallingstars_config}
            />
        </div>
    )
}