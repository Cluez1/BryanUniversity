import React from 'react'
import './Training.css'
import Training1 from '../images/Training.jpg'
import Training2 from '../images/Overthere.jpg'
import {Link} from 'react-router-dom'

const Training = () => {
  return (
    <div className='training'>
    <div className='left'>
        <h1>Training</h1>
        <p>With the latest modern space technology, thorough training is a requirement prior to your travels throughout the galaxy. The GTA curriculum has geared around the teaching of military science to its officer cadets. Military science is defined as the theory, method, and practice of producing military capability in a manner consistent with national defense policy in order to protect and handle difficult situations upon your travels.</p>
        <Link to='/contact'><button className='btn'>Signup Now</button></Link>
    </div>
    <div className='right'>
    <div className='img-container'>
    <div className='image-stack top'>
    <img src={Training1} className='img1' alt='' />
    </div>
    <div className='image-stack bottom'>
    <img src={Training2} className='img2' alt='' />
    </div>
   
    </div>


    </div>
    </div>
  )
}

export default Training