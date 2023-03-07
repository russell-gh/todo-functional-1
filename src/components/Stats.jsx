import React from "react";

const Stats = (props) => {
  const { todos } = props;

  let done = 0;
  todos.forEach((todo) => {
    if (todo.completed) {
      done += 1;
    }
  });

  return (
    <>
      <p>Done: {done}</p>
      <p>Undone: {todos.length - done}</p>
    </>
  );
};

export default Stats;
