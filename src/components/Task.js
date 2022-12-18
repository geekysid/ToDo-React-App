import React from 'react';


const Task = ({ filteredTask, tasks, setTasks, updateTaskDB, deleteTaskDB }) => {

  // handling task when its status changes
  const changeStatusHandler = async (e) => {
    // adding style on status change
    if (filteredTask.status.toLowerCase() === "pending") e.target.parentNode.parentNode.classList.add("completed");
    else if (filteredTask.status.toLowerCase() === "completed") e.target.parentNode.parentNode.classList.remove("completed");

    // updating tasks state and also reflecting in DB
    updateTaskDB(filteredTask);
    // setTasks(tasks.map(task => {
    //   if (task.id === filteredTask.id) {
    //     return {
    //       ...filteredTask,
    //       status: filteredTask.status==="Pending" ? "Completed" : "Pending"
    //     }
    //   } else return task;
    // }));
  }

  // removing task
  const deleteTaskHandler = () => {
    deleteTaskDB(filteredTask);
    // setTasks(tasks.filter(task => task.id !== filteredTask.id));
  }

  return (
    <div className={`task-list--item ${filteredTask.status === 'Completed' ? "completed" : ""}`}>
      {
        filteredTask &&
        <>
          <div className="padding-5px color-red"><ion-icon name="caret-forward-outline"></ion-icon></div>
          <div className="text padding-5px"> {filteredTask.task} </div>
          <div className="action-btn padding-5px">
            {
              filteredTask.status !== 'Completed'
              ? <ion-icon name="create-outline"></ion-icon>
              : <ion-icon name="create-outline"></ion-icon>
            }
          </div>
          <div className="action-btn padding-5px" onClick={changeStatusHandler} >
            {
              filteredTask.status !== 'Completed'
              ? <ion-icon name="checkmark-done-outline"></ion-icon>
              : <ion-icon name="arrow-redo-outline"></ion-icon>
            }
          </div>
          <div className="action-btn padding-5px" onClick={deleteTaskHandler}>
            <ion-icon name="trash-outline"></ion-icon>
        </div>
        </>
      }
    </div>
  )
}
export default Task;