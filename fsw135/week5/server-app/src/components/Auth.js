import React, { useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import AuthForm from './AuthForm.js'

const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const {signup, login,errMsg, resetAuthErr, } = UserContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    // signup
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    // login
    login(inputs)
  }

  function toogleForm() {
    setToggle(prev => !prev)
    resetAuthErr()
  }
  return (
    <div className="auth-container">
      <h1>Todo App</h1>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={ errMsg }
          />
          <p onClick={() => toogleForm()}>Already a member?</p>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={ errMsg }
          />
          <p onClick={() => toogleForm()}>Not a member?</p>
        </>
      }
    </div>
  )
}