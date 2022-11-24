import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Header, Countdown, PageRouter } from './components/common';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
        <div className='site-container'>
          {/* Header + Socials + navigation bar */}
          <Header />
          {/* Show the correct page depending on our URL */}
          <PageRouter />
          {/* Show the countdown timer */}
          <Countdown />
        </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
