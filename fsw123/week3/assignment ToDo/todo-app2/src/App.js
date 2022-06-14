import React, {useState} from 'react';
import './App.css';
import { Todos } from './Store';
import TodoList from './Todolist';






function App() {
const [todos, setTodos] = useState(Todos)

const complete = (id, text, isCompleted) => {
console.log(id)
setTodos(todos.map((todo, id) =>{
  
const newTodo = [...todos,
  {
    id: id,
    text: text,
    isCompleted: true
  }
]
  setTodos(newTodo)
})) 

}
const deleteTodo = (id) => {
console.log(id)
}
  



return (
    <div className="App">
     <TodoList Todo = {todos} 
     completeTodo = {complete} deleteTodo = {deleteTodo}
     />
    </div>
  );
}

export default App;
