import React, { useState, useRef } from "react";
import Todo from "./Todo";
import Styled from "styled-components";

function Today() {
  const [input, setInputs] = useState("");
  const [list, setList] = useState([]);

  const nextId = useRef(1);
  const onChange = (e) => {
    setInputs(e.target.value);
  };
  const onCreate = () => {
    const todo = {
      id: nextId.current,
      input,
    };
    setList(list.concat(todo));
    setInputs("");
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setList(list.filter((li) => li.id !== id));
  };
  return (
    <SRoot>
      <SInput>
        <input
          onChange={onChange}
          value={input}
          placeholder="오늘 할일"
        ></input>
        <SButton onClick={onCreate}> 추가</SButton>
      </SInput>
      <div>
        {list.map((todo) => (
          <Todo todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
      </div>
    </SRoot>
  );
}

const SRoot = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const SInput = Styled.div`
  margin: 0 auto;
`;

const SButton = Styled.button`
  border: none;
  width: 70px;
  height: 30px;
  border-radius: 30px;
  color: #ff9191;
  font-size: 18px;
  font-weight: bold;
`;
export default Today;
