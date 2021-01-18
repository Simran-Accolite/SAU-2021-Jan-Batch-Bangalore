function Todo({index,title, completed, onComplete, onDelete}) {
    const handleChange = () => {
        onComplete(index);
    };
    const handleDeleteClick = () =>{
        onDelete(index);
    }
    const completedClass= completed ? "todo--completed": '';
    return (
        <li className={completedClass}>
            
            <input type="checkbox"
             checked={completed} 
             onChange={handleChange}
             />
            <span>{title}</span>
            <button  type="button" className='add-button' onClick={handleDeleteClick}>Delete</button>

        </li>
        );
    };
export default Todo;