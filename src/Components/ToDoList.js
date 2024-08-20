import React, { useState, useEffect } from "react";

function ToDoList() {
  useEffect(() => {
    document.title = "To-Do";
    // Changing the tab title name
    return () => {
      document.title = "To-Do";
    };
  }, []);

  // State to hold the tasks array in local storage
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [newTask, setNewTask] = useState("");

  // Effect to update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  // Event handler for pressing enter for submit button
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  // Deleting a task
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
          onKeyPress={handleKeyPress}
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
