import React, { useState, useEffect } from 'react';
import '../Style.css';
import Form from './Form';
import TaskList from './TaskList';

const ToDo = () => {
  // create states
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("All");


  // function to be executed whenever tass props changes
  useEffect(() => {
    console.log(" useEffect Called");
    updateFilteredTasks();
  }, [tasks, filter]);

  // function to show that has same status as in dropdown
  const updateFilteredTasks = () => {
    switch(filter){
        case "Completed":
            setFilteredTasks(tasks.filter(task => task.status === "Completed"))
            break;
        case "Pending":
            setFilteredTasks(tasks.filter(task => task.status === "Pending"));
            break;
        default:
            setFilteredTasks(tasks);
            break;
    }
  }

  return (
    <div className="container">
      <Form
        tasks={tasks}
        setTasks={setTasks}
        setFilter={setFilter}
        updateFilteredTasks={updateFilteredTasks}
      />
      <TaskList
        filteredTasks={filteredTasks}
        tasks={tasks}
        filter={filter}
        setTasks={setTasks}
      />
    </div>
  )
}

export default ToDo