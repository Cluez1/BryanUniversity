import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider'
import ProtectedRoute from './components/ProtectedRoute.js'





export default function App(){
  const {token} = useContext(UserContext)
  return (
    <div className='app'>
    {<Navbar />}
    <Switch>
      <Route
      exact path='/'
      render={() => token ? <Redirect to='/profile' /> : <Auth />}
      />
      <ProtectedRoute
      path='/profile'
      compound={Profile}
      redirectTo='/'
      token={token}
      />
      <ProtectedRoute
      ath='/public'
      compound={Public}
      redirectTo='/'
      token={token}
      />
    </Switch>
    </div>
  )
}