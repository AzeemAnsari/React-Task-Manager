import React, { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

import { Form, TaskInput, AddButton, ClearButton, Buttons } from './Styles';

const TaskForm = () => {
  const { addTask, clearTaskList, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <TaskInput
        onChange={handleChange}
        className="task-input"
        type="text"
        placeholder="Add Task..."
        value={title}
        required
      />
      <Buttons>
        <AddButton type="submit">
          {editItem ? 'Edit Task' : 'Add Task'}
        </AddButton>
        <ClearButton onClick={clearTaskList}>Clear</ClearButton>
      </Buttons>
    </Form>
  );
};

export default TaskForm;
