import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Footer, PageRouter } from './components/common';

import './index.css';
import './styling/Buttons.css'

export default function AppMain() {

  const currentRoute = useLocation();

  let footer;
  if (currentRoute.pathname === "/") {
    footer = null;
  } else {
    footer = <Footer />;
  }

  return (
    <div>
        {/* Header + Socials + navigation bar */}
        <Header />
        {/* Show the correct page depending on our URL */}
        <PageRouter />
        {/* Footer only if page is not Home */}
        {footer}
    </div>
  )
}