import React from "react";
import TodoSetting from "./TodoSetting";
import styled from "styled-components";
interface IProps {
  selectedSection: string;
}
function TodoContainer({ selectedSection }: IProps): React.ReactElement {
  return (
    <SRoot>
      <TodoSetting
        isToday={true}
        selectedSection={selectedSection === "today" ? selectedSection : ""}
      ></TodoSetting>
      <TodoSetting
        isToday={false}
        selectedSection={selectedSection === "tomorrow" ? selectedSection : ""}
      ></TodoSetting>
    </SRoot>
  );
}

export default TodoContainer;

const SRoot = styled.div`
  display: flex;
`;
