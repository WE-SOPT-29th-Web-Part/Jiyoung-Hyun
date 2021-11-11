import React from "react";
import Styled from "styled-components";
function Todo({ todo, onRemove }) {
  const { id, input } = todo;
  return (
    <div>
      <span>{input}</span>
      <SButton onClick={() => onRemove(id)}>x</SButton>
    </div>
  );
}
const SButton = Styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #003e8f;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
export default Todo;
