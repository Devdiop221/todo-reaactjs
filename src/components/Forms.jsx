import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        if (!todo) return;
        addTodo(todo);
        setTodo("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
             type="text"
              className="input"
              value={todo}
              onChange={event => setTodo(event.target.value)}
              />
        </form>

    );
}

export default TodoForm;