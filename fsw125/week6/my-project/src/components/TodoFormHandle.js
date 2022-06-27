import { useState } from 'react'

function TodoFormHandle({submit,btnText, name,description}) {
    const initialInputs = {name:name ||'', description: description ||''};
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        submit(inputs, _id);
        // Post
        setInputs(initialInputs);
    }



  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        name='Name'
        value={inputs.name}
        onChange={handleChange}
        placeholder='Description'
        />
        <input  
        type='text'
        name='description'
        value={inputs.description}
        onChange={handleChange}
        placeholder='Description'/>
        <button>Add Todo</button>

        
    </form>
  )
}

export default TodoFormHandle