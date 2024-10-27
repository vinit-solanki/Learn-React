import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import TodoForm from "./TodoForm";
import Item from "./Item";
import { Typography } from "@mui/material";
const getInitialData = () => {
  const storedData = localStorage.getItem("todos");
  return storedData ? JSON.parse(storedData) : [];
};

function TodoList() {
  const [todos, setTodos] = useState(getInitialData);
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Typography variant="h2" className="w-full text-center font-bold">
        Todos
      </Typography>
      <TodoForm addTodo={addTodo} />
      <List>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            checked={checked}
            handleToggle={handleToggle}
            remove={removeTodo}
          />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
