import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Router>
        <App />
      </Router>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
