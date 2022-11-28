import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Header, Countdown, MailingList, Brief, PageRouter } from './components/common';
import { FallingStarsParticles } from './components/common/particles';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
        <div className='site-container'>
          {/* Header + Socials + navigation bar */}
          <Header />
          {/* Show the correct page depending on our URL */}
          <PageRouter />
          <div className='component-container'>
            <FallingStarsParticles/>
            <div className='tight-container'>
              {/* Show the countdown timer */}
              <Countdown />
              {/* Show the mailinglist field */}
              <MailingList />
            </div>
            {/* CTA, Release button */}
            <Brief />
          </div>
        </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
