import React, { useState, useRef } from "react";
import Todo from "./Todo";
import Styled from "styled-components";

function Tomorrow() {
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
      <div>
        <input
          onChange={onChange}
          value={input}
          placeholder="내일 할일"
        ></input>
        <button onClick={onCreate}> 추가</button>
      </div>
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
`;
export default Tomorrow;
