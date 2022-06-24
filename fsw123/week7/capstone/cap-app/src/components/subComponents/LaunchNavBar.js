import React from 'react'
import {Link} from 'react-router-dom'

const LaunchNavBar = () => {
  return (
    <div className='navbar'>
    <ul>
        <Link className='link' to='/' >
            Return to Home
        </Link>
    </ul>

    </div>
  )
}

export default LaunchNavBar