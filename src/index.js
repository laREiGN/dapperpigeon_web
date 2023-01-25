import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppMain from './AppMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AppMain />
  </HashRouter>
);
