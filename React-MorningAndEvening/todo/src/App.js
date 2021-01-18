import {useState} from "react";
import TodoList from './TodoList';
import './App.css';
import './index.css';
import TodoForm from './TodoForm';
function App() {
  const [todos, setTodos] = useState([
    {title:"Assignment-Angular", completed:true},
    {title: "Assignment-React", completed: false}]);
  const handleCompleteTodo=(index) => {
    todos[index].completed = !todos[index].completed;
    let copy = [...todos];
    let rem = copy.filter((todo)=>todo!==copy[index]);
    rem.push(copy[index]);
    setTodos(rem);
  }
  const handleDeleteTodo=(index) =>{
    todos.splice(index,1);
    setTodos([...todos]);
  };
  const handleAddTodo =(title) =>{
    let copy = [{
      title, completed: false},...todos]
      setTodos([...copy])
    }
  /*const handleSortToDo=(index) =>{
    [...todos];
  }*/
  return (
    
    <div className='task-container'>
      
      <h3> Task to be Completed : {todos.filter(({completed}) => completed === false).length} </h3>
      <br/>
      <br/>
      <TodoList todos={todos} 
      handleComplete={handleCompleteTodo}
      handleDelete={handleDeleteTodo}
      /*handleSort={handleSortToDo} />*/
      />
      <TodoForm onSubmit={handleAddTodo}/>
      
    </div>
  );
}

export default App;
