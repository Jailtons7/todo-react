import React, { useState } from 'react';

import "./AddTask.css"
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState("")

  const handleInputchange = (e) => {
    setInputData(e.target.value);
  }

  const handleAddTaskClick = () => {
    if (inputData !== "") {
      handleTaskAddition(inputData);
    }
    setInputData("");
  }

  return (
    <div className='add-task-container'>
      <input 
        onChange={handleInputchange} 
        className='add-task-input' 
        type="text"
        placeholder='Type some task'
        value={inputData}
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Add</Button>
      </div>
    </div>
  );
}

export default AddTask
