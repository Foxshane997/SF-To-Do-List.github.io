import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Make a portfolio",
    "Style the counter app",
    "Add local storage to the To-Do-List",
  ]);
  const [newTask, setNewTask] = useState("");

  // function for displaying input text
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // Making sure you cant add an empty task
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
