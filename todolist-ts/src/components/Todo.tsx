import React from "react";
import deleteIcon from "../assets/delete.svg";
interface IProps {
  todoList: string[];
  setTodoList: (value: string[]) => void;
  todo: string;
}
function Todo({ todoList, setTodoList, todo }: IProps): React.ReactElement {
  return (
    <>
      <span>{todo}</span>
      <button
        type="button"
        onClick={() => {
          setTodoList(todoList.filter((elem) => elem !== todo));
        }}
      >
        <img src={deleteIcon} alt="remove-btn"></img>
      </button>
    </>
  );
}

export default Todo;
