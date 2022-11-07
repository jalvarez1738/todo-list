import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    todos.push(newTodo)
    console.log(newTodo);
};
  return (
    <div>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}
      >
        <input onChange={(event) => {
          setNewTodo(event.target.value);
          }}
          type="text"
          />
          <div>
            <button>Add</button>
          </div>
      </form>
    </div>
  );
}

export default App;
