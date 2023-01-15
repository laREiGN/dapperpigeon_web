import React from 'react';
import { Header, Footer, PageRouter } from './components/common';
import { FallingStarsParticles } from "./components/common/particles";

import './index.css';
import './styling/Buttons.css'
import './styling/Alignment.css'
import './styling/Fonts.css'

export default function AppMain() {
  return (
    <div className='component-container'>

    
        {/* PARTICLES */}
        <FallingStarsParticles />


        {/* Header + Socials + navigation bar */}
        <Header />
        {/* Show the correct page depending on our URL */}
        <PageRouter />
        {/* Footer only if page is not Home */}
        <Footer />
    </div>
  )
}