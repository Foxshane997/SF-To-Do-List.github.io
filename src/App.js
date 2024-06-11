import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  // // Utility function to safely parse JSON
  // const safeJSONParse = (str) => {
  //   try {
  //     return JSON.parse(str);
  //   } catch (e) {
  //     console.error('JSON parse error:', e);
  //     return null;
  //   }
  // };

  // // Load the to-do list from localStorage when the component mounts
  // useEffect(() => {
  //   const savedList = safeJSONParse(localStorage.getItem('todoList')) || [];
  //   console.log('Loaded list from localStorage:', savedList);
  //   setList(savedList);
  // }, []);

  // // Save the to-do list to localStorage whenever it changes
  // useEffect(() => {
  //   console.log('Saving list to localStorage:', list);
  //   localStorage.setItem('todoList', JSON.stringify(list));
  // }, [list]);

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo
    };

    // Add to the list
    setList([...list, newToDo]);

    // Clear the input 
    setInput("");
  };

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input 
        type='text' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={() => addToDo(input)}>Add To Do</button>
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
