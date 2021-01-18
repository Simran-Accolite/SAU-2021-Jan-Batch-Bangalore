import { useState } from "react";

function TodoForm( {onSubmit }){
    const [value, setValue] = useState('')
    const handleChange = (event) =>{
        const value = event.target.value;
        setValue(value);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        setValue('');
        onSubmit(value);
        
    }
    return(<form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} placeholder="Create Todo"/>
        <button className="add-button" type="submit">Add Task</button>
    </form>);
}
export default TodoForm;