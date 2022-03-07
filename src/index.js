import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import './customFont.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
