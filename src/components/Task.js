import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

import { ListItem, TaskBtn } from './Styles';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  return (
    <ListItem>
      <span>{task.title}</span>
      <div>
        <TaskBtn
          onClick={() => removeTask(task.id)}
          className="btn-delete"
          title="Delete Task"
        >
          <i className="fa fa-trash"></i>
        </TaskBtn>
        <TaskBtn
          onClick={() => findItem(task.id)}
          className="btn-edit"
          title="Edit Task"
        >
          <i className="fa fa-pencil"></i>
        </TaskBtn>
      </div>
    </ListItem>
  );
};

export default Task;
