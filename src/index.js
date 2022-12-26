import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppMain from './AppMain';
import AppAlt from './AppAlt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppMain />
  </BrowserRouter>
);
