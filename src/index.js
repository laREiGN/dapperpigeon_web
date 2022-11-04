import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from './Components/AllPosts';
import OnePost from './Components/OnePost';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AllPosts />} />
        <Route path="/:slug" element={<OnePost />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
