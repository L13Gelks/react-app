import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AutoScrollGallery from './AutoScrollGallery';
import NavBar from './NavBar';
import SlidingInfo from './SlidingInfo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <AutoScrollGallery />
    <SlidingInfo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
