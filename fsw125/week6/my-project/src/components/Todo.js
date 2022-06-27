import React, { useState } from 'react'
import TodoFormHandle from './TodoFormHandle'

function Todo({deleteTodo, name, description, _id}) {
    const [editToggle, setEditToggle] = useState(false)
  return (
    <div className='todo'>
    {!editToggle ?
    <>
    <h1>Name: {name}</h1>
    <p>Description: {description}</p>
    <button
    onClick={() => deleteTodo(_id)}
    className='delete-btn'>
    Delete</button>
    </>
    :
    <>
    <TodoFormHandle 
    name={name}
    description={description}
    btnText='Submit Edit' />
    <button
    onClick={() => setEditToggle(prevToggle => !prevToogle)}>
    Close</button>
    </>
    }
    </div>
  )
}

export default Todo
    
    