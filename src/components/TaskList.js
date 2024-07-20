import React from "react";
import Task from "./Task";

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
}

export default TaskList;
