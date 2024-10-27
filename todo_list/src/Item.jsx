import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';

function Item({ todo, checked, handleToggle, remove }) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => remove(todo.id)}
          className="p-4 font-bold"
        >
          <DeleteForeverIcon className="bg-red-500 text-white rounded-lg" />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton onClick={handleToggle(todo.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.includes(todo.id)}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.task} />
      </ListItemButton>
    </ListItem>
  );
}

export default Item;
