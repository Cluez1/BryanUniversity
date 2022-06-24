import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBar.css'

const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >=100) {
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
    <Link to='/'><h1>Space Frontier </h1></Link>
    <ul className={click ? 'nav-menu active':'nav-menu'}>
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/pricing'>Pricing</Link>
    </li>
    <li>
        <Link to='/training'>Training</Link>
    </li>
    <li>
        <Link to='/contact'>Contact</Link>
    </li>
    </ul>
    <div className='space' onClick={handleClick}>
   {click ? (<FaTimes ize={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}

    </div>
    </div>
  )
}

export default NavBar