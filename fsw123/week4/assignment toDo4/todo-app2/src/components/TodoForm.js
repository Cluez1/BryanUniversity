import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


function TodoForm(props) {
  const [input, setInput] = useState('')
  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();

    props.addTodo({
      id: uuidv4(),
      isCompleted: false,
      text: input
    })

    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}  >
        <input type="text"
        placeholder="Add a todo"
        value={input} name="text"
        onChange={handleChange}
         
        />
      <button >Add todo</button>

      </form>
    </div>
  )
}

export default TodoForm