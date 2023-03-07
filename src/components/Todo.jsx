import React, { useState } from "react";
import TodoEdit from "./TodoEdit";

const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");

  const { todo, onToggleCompleted, onDelete, onSaveEdit } = props;

  const onSave = () => {
    setIsEdit(false);
    onSaveEdit(todo.id, title);
  };

  const onInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        <p onClick={() => onToggleCompleted(todo.id)}>{todo.title}</p>
        <button
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          Delete
        </button>

        <TodoEdit
          onSave={onSave}
          onInput={onInput}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
      </li>
    </>
  );
};

export default Todo;
