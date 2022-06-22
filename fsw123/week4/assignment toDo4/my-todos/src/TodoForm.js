import {useState} from 'react'

function TodoForm({addTodo}) { //Adding addTodo as prop from App.js

  const [error, setError] = useState('');//Will be used to display error
  const [formValue, setFormValue] = useState(''); //Holds the text from our form


  const handleSubmit = (event) => {
    event.preventDefault(); //Keeps page from refreshing on submit
    if (formValue === ''){  //If input is empty we get an error message
      setError("Todo is empty");
      return;
    } else {
      addTodo(formValue) //Passing formValue state back to function created in App.js, it basically equals the text parameter(formValue is value in input)
      setFormValue(''); //Empties the input, test it out, add something to the empty string
    }
  }

   const handleChange = (event) => {
     if (error) setError('') //Clears the error message
     setFormValue(event.target.value) //Passing new todo into state
   }



  return (
    <div>


    <form onSubmit = {handleSubmit}> {/* Checks if input is empty, passes value from form into addTodo function */}
      
      <div>
        
        <input 
        type="text" 
        value = {formValue}
        placeholder = 'Add new todo'
        onChange = {handleChange} // This clear the error of screen if there is one
        />
        <button>Add new todo</button>

      </div>
      <div>{error}</div>
      </form>    
    </div>
  )
}

export default TodoForm