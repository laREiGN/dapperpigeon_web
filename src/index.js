import ReactDOM from 'react-dom/client';
import { Header, PageRouter } from './components/common';
import './index.css';

export default function App() {
  return (
    <div>
      {/* Header + navigation bar */}
      <Header/>

      {/* Show the correct page depending on our URL */}
      <PageRouter/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
