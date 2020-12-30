
import React from "react";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Navbarr from "./components/Navbar";

import "./App.css";
import { Navbar } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Navbar/>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;