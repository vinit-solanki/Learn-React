import React, { useState } from 'react';
import { ListItem, TextField, Button } from '@mui/material';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task); // Add the new todo
      setTask(''); // Clear the text field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ListItem className="w-full flex justify-center gap-2">
        <TextField
          id="standard-basic"
          label="New Todo"
          variant="standard"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </ListItem>
    </form>
  );
}

export default TodoForm;
