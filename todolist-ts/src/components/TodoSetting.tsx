import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

interface IProps {
  isToday: boolean;
  selectedSection: string;
}
function TodoSetting({ isToday, selectedSection }: IProps): React.ReactElement {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoValue, setTodoValue] = useState("");
  console.log(isToday);
  const handleTodoValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
  };
  const isRedundant = (list: any, target: any) => new Set(list).has(target);
  const handleTodoCreate = () => {
    if (
      todoValue &&
      typeof todoValue === "string" &&
      !isRedundant(todoList, todoValue.trim())
    )
      setTodoList([...todoList, todoValue.trim()]);
    setTodoValue("");
  };

  return (
    <SRoot isToday={isToday} isSelectedSection={selectedSection}>
      <h2>{isToday ? "오늘 할 일" : "내일 할 일"}</h2>
      {todoList.map((todo, index) => (
        <Todo
          key={index}
          setTodoList={setTodoList}
          todoList={todoList}
          todo={todo}
        ></Todo>
      ))}
      <STodoInput>
        <input type="text" value={todoValue} onChange={handleTodoValue} />
        <button type="button" onClick={handleTodoCreate}>
          추가하기
        </button>
      </STodoInput>
    </SRoot>
  );
}

export default TodoSetting;

const SRoot = styled.div<{ isToday: boolean; isSelectedSection: string }>`
  ${(props) =>
    props.isSelectedSection
      ? `
    width: 0;
    visibility: hidden;`
      : ""}
`;

const STodoInput = styled.div``;
