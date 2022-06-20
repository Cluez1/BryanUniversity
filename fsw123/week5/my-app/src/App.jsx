import React from 'react';
import './App.css';
import Giphy from './components/Giphy';



const App = () => {
  return (
    <div className='mainContainer'> 
    <div className='bubbleContainer'>
    <div className='bubbles'>
        <span className="--i 12"></span>
        <span className="--i:11;"></span>
        <span className="--i:21;"></span>
        <span className="--i:18;"></span>
        <span className="--i:15;"></span>
        <span className="--i:22;"></span>
        <span className="--i:10;"></span>
        <span className="--i:13;"></span>
        <span className="--i:12;"></span>
        <span className="--i:24;"></span>
        <span className="--i:28;"></span>
        <span className="--i:19;"></span>
        <span className="--i:11;"></span>
        <span className="--i:23;"></span>
        <span className="--i:16;"></span>
        <span className="--i:17;"></span>
        <span className="--i:21;"></span>
        <span className="--i:24;"></span>
        <span className="--i:18;"></span>
        <span className="--i:12;"></span>
        <span className="--i:18;"></span>
        <span className="--i:21;"></span> 
    </div>
    </div>
    <Giphy />
    </div>
  );
};

export default App