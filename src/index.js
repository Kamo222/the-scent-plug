import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import State from './Components/State/State';
import ScrollToTop from './Components/ScrollToTop';
// import './assets/css/amimate.css';
// import './assets/css/flex-slider.css';
// import './assets/css/fontawesome.css';
// import './assets/css/owl.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <State>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </State>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
