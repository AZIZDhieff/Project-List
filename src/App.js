import React, { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Learn React", isDone: false },
    { id: 2, description: "Build a project", isDone: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;
