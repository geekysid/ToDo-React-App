import React from 'react';
import Task from './Task';

const TaskList = ({ filteredTasks, tasks, filter, setTasks, updateTaskDB, deleteTaskDB }) => {

  return (
    <div className="container margin-bottom-3r">
      <header className="header">{filter} Tasks</header>
      <div className="task-list--div">
        <div className="task-list--list">
          {
            filteredTasks.map(task =>
              <Task
                key = {task.id}
                filteredTask = {task}
                tasks = {tasks}
                setTasks = {setTasks}
                updateTaskDB = {updateTaskDB}
                deleteTaskDB = {deleteTaskDB}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TaskList