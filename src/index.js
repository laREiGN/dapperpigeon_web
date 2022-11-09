import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Header, PageRouter } from './components/common';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Header + navigation bar */}
        <Header/>

        {/* Show the correct page depending on our URL */}
        <PageRouter/>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
