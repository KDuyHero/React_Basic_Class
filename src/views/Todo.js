const Todo = (props) => {
    const {todos, title, deleteDataTodo} = props
    let handleOnClick = (id)=> {
        deleteDataTodo(id)
    }
    return (
        <div className="todos-container">
            <div>
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div>
                        <li className="todo-child" key={todo.id}>{todo.title} 
                        <span onClick={() => handleOnClick(todo.id)}> x</span>
                    </li>
                    </div>
                )
            })}
            <hr />
        </div> 
    )

}

export default Todo;