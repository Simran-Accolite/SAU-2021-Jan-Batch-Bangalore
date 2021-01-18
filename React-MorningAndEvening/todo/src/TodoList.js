import Todo from "./Todo";
function TodoList({ todos, handleComplete, handleDelete }) {
    const renderTodos=(todoList)=>{
    return todoList.map((todo , index) => {
    return (<Todo 
        index={index}
        title={todo.title}
        completed={todo.completed}
        onComplete={handleComplete}
        onDelete={handleDelete}
         />);
    });
};
    return(
        <ul>
            {renderTodos(todos)}
        </ul>);
}
export default TodoList;