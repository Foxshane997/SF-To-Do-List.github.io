import React, { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo
    }

    // Add to the list
    setList([...list, newToDo])

    // Clear the input 
    setInput("")
  }

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id)

    setList(newList)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input 
        type='text' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={() => addToDo(input)} >Add To Do</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
