import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='live'>
   <section>
    <h1>
      <span>G</span>
      <span>I</span>
      <span>P</span>
      <span>H</span>
      <span>Y</span>
      <span>S</span>
      <span>I</span>
      <span>T</span>
      <span>E</span>
    </h1>
    <React.StrictMode>
    <App />
  </React.StrictMode>
   </section>
  </div>
);

