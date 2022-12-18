import React, { useState, useEffect } from 'react';
import '../Style.css';
import Form from './Form';
import TaskList from './TaskList';

// importing firebase db
import DB from '../firebase';
import {query, collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';


const ToDo = () => {
  // create states
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    readTasksDB()
  }, []);

  // CREATE Task in FireBase
  const addTaskDB = async (newTask) => {
    try{
      await addDoc(collection(DB, 'tasks'), {
        task: newTask.task,
        status: newTask.status,
        last_modified: new Date()
      });
      console.log(`Task Added: ${newTask.task}`);
    }
    catch(err) { console.error(err.message) }
  }

  // READ Task from FireBase
  const readTasksDB = () => {
    const q = query(collection(DB, 'tasks'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasksArr = [];
      querySnapshot.forEach(doc => {
        tasksArr.push({...doc.data(), id: doc.id});
      })
      setTasks(tasksArr);
    });
    return () => unsubscribe();
  }

  // UPDATE Task in FireBase
  const updateTaskDB = async (updatedTask) => {
    try{
      await updateDoc(doc(DB, 'tasks', updatedTask.id), {
        status: updatedTask.status==="Pending" ? "Completed" : "Pending",
        last_modified: new Date()
      });
      console.log(`Task Updated with id: ${updatedTask.id}`);
    }
    catch(err) { console.error(err.message) }

  }

  // DELETE Task from FireBase
  const deleteTaskDB = async (deletedTask) => {
    try{
      await deleteDoc(doc(DB, 'tasks', deletedTask.id));
      console.log(`Task deleted with id: ${deletedTask.id}`);
    }
    catch(err) { console.error(err.message) }
  }


  // function to be executed whenever tass props changes
  useEffect(() => {
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
    <>
      <Form
        tasks = {tasks}
        setTasks = {setTasks}
        setFilter = {setFilter}
        updateFilteredTasks = {updateFilteredTasks}
        addTaskDB = {addTaskDB}
      />

      <TaskList
        filteredTasks = {filteredTasks}
        tasks = {tasks}
        filter = {filter}
        setTasks = {setTasks}
        updateTaskDB = {updateTaskDB}
        deleteTaskDB = {deleteTaskDB}
      />
    </>
  )
}

export default ToDo