import React from "react";

const TodoEdit = (props) => {
  const { onSave, onInput, setIsEdit, isEdit } = props;

  return (
    <>
      {isEdit ? (
        <>
          <input onInput={onInput} type="text" />
          <button onClick={onSave}>Save</button>
        </>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}
    </>
  );
};

export default TodoEdit;
