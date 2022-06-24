import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training'
import Contact from './routes/Contact'
import LaunchHome from './components/subComponents/LaunchHome'
import LaunchPhoto from './components/subComponents/LaunchPhoto'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/training' element={<Training />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/launchhome' element={<LaunchHome />} />
    <Route path='/launchphoto' element={<LaunchPhoto />} />
    </Routes>


    </>
  )
}

export default App