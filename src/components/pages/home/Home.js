import React, { useEffect } from "react";
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

import { Layer1, Layer2, Layer3, Layer4 } from "../../../assets";
import { whitebubbles_config, FallingStarsParticles } from "../../common/particles";
import { Countdown, Brief, RecentNews, Faq, Footer } from '../../common';

import './Home.css';

export default function Home() {

    useEffect(() => {
        resizeParent();

        window.addEventListener("resize", resizeParent);
        document.addEventListener("mousemove", parallaxStart);
        document.addEventListener("mouseleave", parallaxEnd);

        return () => { 
            window.removeEventListener("resize", resizeParent);
            document.removeEventListener("mousemove", parallaxStart);
            document.removeEventListener("mouseleave", parallaxEnd);
        };
    }, []);

    function parallaxStart(event) {
        let element = document.querySelector('.parallax-wrapper')
        let { width, height } = element.getBoundingClientRect();
        let offX = event.pageX - (width * 0.5);
        let offY = event.pageY - (height * 0.5);

        for (let layer of document.querySelectorAll('.parallax-layer')) {
            const speed = layer.getAttribute('value')
            const x = (offX * speed) / 100;
            const y = (offY * speed) / 100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        }

        for (let layer of document.querySelectorAll('#ts-white-bubbles')) {
            const speed = 4.8;
            const x = (offX * speed) / 100;
            const y = (offY * speed) / 100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        }
    }

    function parallaxEnd() {
        for (let layer of this.querySelectorAll('.parallax-layer')) {
            layer.style.transform = `translateX(0px) translateY(0px)`
        }
    }

    function resizeParent() {
        let container = document.querySelector('.parallax-wrapper')
        let largestLayer = document.querySelector('#largest')
        container.style.height = `${largestLayer.clientHeight}px`;
    }

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div>
            <div className="parallax-wrapper">
                <div value="0" className="parallax-layer">
                    <Layer1 id="largest" />
                </div>
                <div value="1.2" className="parallax-layer">
                    <Layer2 />
                </div>
                <div value="2.4" className="parallax-layer">
                    <Layer3 />
                </div>
                <div value="3.6" className="parallax-layer">
                    <Layer4 />
                </div>
                <div className="text-container">
                    <h1 className="title">FOREST OF FREQUENCIES</h1>
                    <h2 className="subtitle">Step into a world where music, magic and nature collide</h2>
                </div>
                <Particles
                    id="ts-white-bubbles"
                    init={particlesInit}
                    options={whitebubbles_config}
                />
            </div>
            <div className='component-container'>
                <FallingStarsParticles/>
                    <div className='tight-container'>
                        {/* Show the countdown timer */}
                        <Countdown />
                    </div>
                {/* CTA, Release button */}
                <Brief />
                {/* Recent news */}
                <RecentNews />
                {/* FAQ */}
                <Faq />
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}