import React, {useState} from 'react'

function Todo({todo, completeTodo, deleteTodo, editTodo}) {//Prop functions passed from App.js
    let completed = {textDecorationLine: 'none'} //Will be passed as style to each todo

    if(todo.isCompleted){ //Changes style of todo if it is completed
        completed = {textDecorationLine: 'line-through'}
    }

    const [edit, setEdit] = useState(false) //Used to toggle edit on and off
    const[error, setError] = useState(false) //Used to check if input is empty
    const [text, setText] = useState(todo.text) //todo.text comes from App.js, it is the text of the todo

    const toggleEdit = () => {
        setEdit(!edit) //Toggles edit on and off
        setText(todo.text) //Will test to see if need later
        setError(false) //Will test to see if need later
    }

    const handleEdit = (event) => {
        (event.target.value === "") ? setError(true) : setError(false) //If input is empty display error.
        setText(event.target.value); //Passing input text into state
    }

    const handleUpdate = (id, text) => {//Id will be how we know what todo to edit and text will be the new todo
        editTodo(id, text) //Function comes from App.js
        toggleEdit(); // Calls toggle edit function to toggle off
      }
  return (
    <div>
        {!edit ? ( //If edit is false we will show the todo
        <div>
          <input // Will show a checkbox 
            type='checkbox'
            checked={todo.isCompleted} //If the todo is completed the box will automatically be checked
            onChange={() => completeTodo(todo.id)} //Call completeTodo function from app.js, passing in the todo.id
          />
          <label style={completed} for={todo.id}>{todo.text}</label> 
        </div>
      ) : ( //If edit is true, show an input text box// : = else//
        <div>
          <input type='text' value={text} onChange={handleEdit} /> //The value is our text
        </div>
      )}
      {!edit ? (!todo.isCompleted ? //If edit is false and todo is not completed, we can edit
        (<div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => toggleEdit()}>Edit</button>
        </div>) : //Otherwise the edit button is disabled
        (<div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button disabled onClick={() => toggleEdit()}>Edit</button>
        </div>)
      ) : (
        <div>//Submit will be disabled if error is true
          <button disabled={error} onClick={() => handleUpdate(todo.id, text)}>Submit</button>//Saves our todo
          <button onClick={() => toggleEdit()}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Todo