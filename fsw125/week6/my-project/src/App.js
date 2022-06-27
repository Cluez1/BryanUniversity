import TodoFormHandle from '..AddTodos/components/TodoFormHandle';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from '../components/Todo';
import './App.css';



const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    axios.get('/todoItems')
    .then(res => setTodos(res.data))
    .catch(err => console.log(err.response.data.err));
  }

  const addTodo = (newTodo) => {
    axios.post('/todoItems', newTodo)
    .then(res => 
      setTodos(prevTodos => [...prevTodos. res.data]))
    .then(err => console.log(err))
  };

  const deleteTodo = (todoId) => {
    axios.delete(`/todoItems/${todoId}`)
    .then(res =>{
      setTodos(prevTodos => prevTodos.filter(todo = todoList._id !== todoId))
    })
  }

  const editTodo = (updates, todoId) => {
    axios.put(`/todoItems/${todoId}`, updates)
    .then(res =>{
      setTodos(prevTodos => prevTodos.map(todo = todoList._id !== todoId ? todo : res.data))
    })
    .catch(err => console.log(err))
  }

  
  useEffect(() => {
    getTodos();
  }, []);

  const todoList = todoItems.map(todo => <Todo {...todo} deleteTodo={deleteTodo} key={todoList.name} />)

  return (
    
    <div className='App'>
    
    <TodoFormHandle
    btnText='Add Todo'
    submit={addTodo}/>
    {todoList}
      
    </div>
  )
};

export default App
