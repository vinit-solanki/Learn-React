import React from "react";
import { Button, Typography, CssBaseline } from "@mui/material";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-purple-900">
      <CssBaseline />
      <div className="flex justify-center bg-white p-7 rounded-lg bg-opacity-50 ">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
