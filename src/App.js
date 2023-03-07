import React, { useEffect, useState } from "react";
import axios from "axios";
import Todos from "./components/Todos";
import "./App.css";
import Stats from "./components/Stats";
import Title from "./components/Title";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState();

  const getTodos = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/`
    );
    data.length = 10;
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onToggleCompleted = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const _todos = [...todos];
    _todos[index].completed = !_todos[index].completed; //invested the boolean
    setTodos(_todos);
  };

  const onDelete = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const _todos = [...todos];
    _todos.splice(index, 1);
    setTodos(_todos);
  };

  const onSaveEdit = (id, title) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const _todos = [...todos];
    _todos[index].title = title;
    setTodos(_todos);
  };

  if (!todos) {
    return <h3>Loading todos!</h3>;
  }

  return (
    <>
      <Title />
      <Stats todos={todos} />
      <Todos
        todos={todos}
        onToggleCompleted={onToggleCompleted}
        onDelete={onDelete}
        onSaveEdit={onSaveEdit}
      />
      <Footer />
    </>
  );
};

export default App;
