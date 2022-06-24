import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import SpaceImage from '../components/SpaceImage'
import TrainingSection from '../components/Training'
import Footer from '../components/Footer'

const Training = () => {
  return (
    <div>
        <NavBar />
        <SpaceImage heading='TRAINING.' text='Pre-Flight and In-Flight Training Free upon purchase of ticket.' />
        <TrainingSection />
        <Footer />

    </div>
  )
}

export default Training