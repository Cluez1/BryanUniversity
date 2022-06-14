import { Todos } from "./Store";
function TodoList({todos, completeTodo, deleteTodo}){




  return(
      <h1>{Todos.map(item =>{
        return (
          <div>
            <input type="checkbox" checked = {item.isCompleted} onChange= {(e) => completeTodo(item.id)} />

            {item.text}
           <button onClick = {(e) => deleteTodo(item.id)}>Delete</button>
          </div>
        )
      }
        )}</h1>
  )
}
export default TodoList;