import {Link} from 'react-router-dom'
import './LaunchPhoto.css'
// import Spacewarp from '../subComponents/spacespeed.gif'




const LaunchHome = () => {
  return (
    <div className='launchhome'>
    <video autoPlay loop muted id='video1'>
    {/* <source src={Spacewarp} type='video/mp4' important/> */}
    </video>
        <Link className='home-link' to="/launchphoto"> See into the Galaxy!</Link>
    </div>
  )
}

export default LaunchHome