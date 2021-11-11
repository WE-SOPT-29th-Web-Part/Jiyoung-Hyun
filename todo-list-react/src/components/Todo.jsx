import React from "react";

function Todo({ todo, onRemove }) {
  const { id, input } = todo;
  return (
    <div>
      <span>{input}</span>
      <button onClick={() => onRemove(id)}>x</button>
    </div>
  );
}
export default Todo;
