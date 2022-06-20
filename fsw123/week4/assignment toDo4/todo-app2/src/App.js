import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { todoObj } from './data/STORE';
import TodoForm from "./components/TodoForm";


function App() {
  const [todoItems, setTodos] = useState(todoObj) //List of todos come from store.js

  const [edit, setEdit] = useState({ //Using state to edit todo
    id: null,
    value: ''
  })

  const completeTodo = id => {
    let updatedTodos = [...todoItems]  // make a copy of the existing todos stored in state,tooItems has list of todos stored

    const index = updatedTodos.findIndex(todo => todo.id === id)  // find the specific todo in array to update
    // Index is now equal to whatever todo was selected 
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted  // toggle the isCompleted property of that todo

    setTodos(updatedTodos)  // update the todos array
  }

  const deleteTodo = (id) => {
    let updatedTodos = [...todoItems]  // make a copy of the existing todos stored in state
    let filteredTodos = updatedTodos.filter(todo => todo.id !== id) // filter the copy of the specific todo to be deleted

    setTodos(filteredTodos) // update the todos array
  }

  const addTodo = text => {
    if (!text.text || /^\s*$/.test(text.text)) {
      alert(' Todo form is empty')
      return      
}
const newTodos = [text, ...todoItems]
setTodos(newTodos)
  }

return (
  <div>
    <TodoForm addTodo={addTodo} />
    <TodoList data={todoItems} completeTodo={completeTodo} deleteTodo={deleteTodo} />
  </div>
)
}

export default App
