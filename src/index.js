import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Header, PageRouter, Footer } from './components/common';
import './index.css';
import './styling/post_styling.css';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Header + navigation bar */}
        <Header/>

        {/* Show the correct page depending on our URL */}
        <PageRouter/>

        {/* Footer, contacts etc. */}
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
