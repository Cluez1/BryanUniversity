import React, { useState } from 'react'
import GameHandleForm from './GameHandleForm'

function Game({deleteGame, name, description, _id}) {
    const [editToggle, setEditToggle] = useState(false)
  return (
    <div className='game'>
    {!editToggle ?
    <>
    <h1>Name: {name}</h1>
    <p>Description: {description}</p>
    <button
    onClick={() => deleteGame(_id)}
    className='delete-btn'>
    Delete</button>
    </>
    :
    <>
    <GameHandleForm 
    name={name}
    description={description}
    btnText='Submit Edit' />
    <button
    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
    Close</button>
    </>
    }
    </div>
  )
}

export default Game