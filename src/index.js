import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Header, Countdown, MailingList, PageRouter } from './components/common';
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
            {/* Show the countdown timer */}
            <Countdown />
            {/* Show the mailinglist field */}
            <MailingList />
          </div>
        </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
