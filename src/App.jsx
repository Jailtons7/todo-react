import React, { useState, useEffect } from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

import "./App.css"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false
    },
    {
      id: "2",
      title: "Assistir Vikings",
      completed: false
    }
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      )
      setTasks(data)
    }

    fetchTasks()
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }]
    setTasks(newTasks) 
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed};
      return task;
    })
    setTasks(newTasks)
  }

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter(task => (task.id !== taskId));
    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition}/>
            <Tasks 
              tasks={ tasks } 
              handleTaskClick={handleTaskClick} 
              handleDeleteClick={handleDeleteClick} 
            />
          </>
        )} />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  )
};

export default App;
