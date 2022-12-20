import React from 'react';
import Task from './Task';
import Card from './Card';

const TaskList = ({ filteredTasks, tasks, filter, setTasks, updateTaskDB, deleteTaskDB }) => {

  return (
    <Card header={`${filter} Tasks`}>
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
    </Card>
  )
}

export default TaskList