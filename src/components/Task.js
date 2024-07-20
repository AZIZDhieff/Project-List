import React from "react";

function Task({ task, toggleTaskCompletion }) {
  return (
    <div
      className={`task ${task.isDone ? "completed" : ""}`}
      onClick={() => toggleTaskCompletion(task.id)}
    >
      <p>{task.description}</p>
    </div>
  );
}

export default Task;
