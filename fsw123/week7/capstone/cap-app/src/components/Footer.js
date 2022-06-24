import React from 'react'
import './Footer.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaGithub,FaSearchLocation, FaPhone} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                <FaSearchLocation size={20} style={{color: '#fffff', marginRight: '2rem'}} />
                </div>
                <div>
                    <p>1156 Space Station 1242 </p>
                    <h4>Galactic Gate 2.3</h4>
                </div>
            </div>
            <div className='phone'>
            <h4><FaPhone size={20} style={{color: '#fffffff', marginRight: '2rem'}} /> SpaceCom: 3445434-4344-3</h4>
            </div>

            <div className='email'>
            <h4><FaMailBulk size={20} style={{color: '#fffffff', marginRight: '2rem'}} />Email: SpaceFronteer@GTA.com</h4>
            </div>

            <div className='right'>
            <h4>About Us</h4>
            <p>
                "Space.Travel was created to fill a void in the burgeoning space tourism industry. With passenger space travel becoming a routine activity, outer space needed a destination website just like any other travel destination. Hence Space.Travel was born. 
                A one-stop destination for all of your space tourism needs and information."
            </p>
            <div className='social'>
            <FaFacebook size={30} style={{color: '#fffffff', marginRight: '1rem'}} />
            <FaGithub size={30} style={{color: '#fffffff', marginRight: '1rem'}} /> 
            <FaLinkedin size={30} style={{color: '#fffffff', marginRight: '1rem'}} />
            </div>
            </div>


        </div>
    </div>
  )
}

export default Footer