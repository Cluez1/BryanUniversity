import Todo from "./Todo";

function TodoList({todos, completeTodo, deleteTodo, editTodo}){//Prop functions from app.js
  const listTodos = todos.map((todo) => { //Maps through todos passed from app.js, listoftodos is passed from data and stored in state(todos)
    return <Todo //Each loop returns a todo with the functions passed into each todo
             key ={todo.id}
             todo = {todo}
             completeTodo ={completeTodo}
             deleteTodo = {deleteTodo}
             editTodo = {editTodo}
             />
  })
  return(
    <div>
      <ul>{listTodos}</ul> 
    </div>
  )
}
export default TodoList;