import React, { useState } from 'react'
import Todo from './Todo'


function TodoList(props) {
  const [edit, setEdit] = useState(false)
  const toggleEdit = () => {
    setEdit(!edit)
  }
  console.log('edit mode: ', edit)
  return (
  <div>
  <h1>List of Todos</h1>
{props.data.map(function (todo) {
  return (
    <div>
    <Todo
    key={todo.id}
    todo={todo}
    completeTodo={props.completeTodo}
    deleteTodo={props.deleteTodo}
    />
    </div>
  )
  })}
    </div>
  )
}

export default TodoList