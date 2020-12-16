import React, {useState} from "react";
import './App.css';
import TodoForm from "./components/Forms";
import Todo from "./components/Todo";


function App() {
  const data = [
    { text: "Apprendre JS", isCompleted : false},
    { text: "Apprendre React",  isCompleted : false},
    { text: "Apprendre Axios",  isCompleted : false}
  ];
  const [todos, setTodos]= useState(data);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="todo-List">
        {todos.map((todo, index) =>(
           <Todo 
           key={index} 
           index={index}
            todo={todo} 
            completedTodo={completedTodo} 
            removeTodo={removeTodo}
            />
        ))}
       
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
   
  );
}

export default App;
