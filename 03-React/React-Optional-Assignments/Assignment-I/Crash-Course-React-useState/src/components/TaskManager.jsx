// src/components/TaskManager.jsx

import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = () => {
    setTasks(tasks.slice(1));
  };

  return (
    <div>
      <span className="flex">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <button
          onClick={() => {
            removeTask();
          }}
          disabled={tasks.length === 0}
        >
          Remove First Task
        </button>
      </span>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
