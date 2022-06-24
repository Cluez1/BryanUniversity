import React from 'react'
import './Video.css'
import {Link} from 'react-router-dom';

import spaceVideo from '../images/background.mp4'

const Video = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
    </video>
    <div className='content'>
    <h1>Galactic Traveling Agency</h1>
    <p>Earth's first civilization space travel.</p>
    <br></br>
    <br></br>
    <div>
        <Link to='/training' className='btn'> training</Link>
        <Link to='/launchhome' className='btn btn-light'> Explore</Link>
    </div>
    </div>
    </div>
  )
}

export default Video