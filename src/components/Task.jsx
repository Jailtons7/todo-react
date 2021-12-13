import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleDeleteClick }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div 
      className="task-container" 
      style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}
    >
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
          {task.title}
        </div>
        <div className="buttons-container">
          <button 
            className="task-details-button" 
            onClick={handleTaskDetailsClick}
          >
            <CgInfo />
          </button>
          <button 
            className="remove-task-button" 
            onClick={() => handleDeleteClick(task.id)}
          >
            <CgClose />
          </button>
        </div>
    </div>
  )
}

export default Task;