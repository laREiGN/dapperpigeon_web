import React, { useEffect } from "react";
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

import { Layer1, Layer2, Layer3, Layer4 } from "../../../assets";
import { white_bubbles, yellow_bubbles, fireflies } from "../../config";

import './Home.css';

export default function Home() {

    useEffect(() => {
        resizeParent();
    }, []);

    document.addEventListener("mousemove", parallaxStart);
    document.addEventListener("mouseleave", parallaxEnd);
    window.addEventListener("resize", resizeParent);

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
        console.log(main);
        await loadFull(main);
    };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>
            <div className="parallax-wrapper">
                <div value="0" id="largest" className="parallax-layer">
                    <Layer1 />
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
                    <h1 className="title">DAPPER PIGEON</h1>
                    <h2 className="subtitle">Soon available on Steam</h2>
                </div>
                <Particles
                    id="ts-white-bubbles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={white_bubbles}
                />
            </div>
        </div>
    )
}