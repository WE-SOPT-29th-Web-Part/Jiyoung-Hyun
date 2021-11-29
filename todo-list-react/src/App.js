import React, { useState } from "react";
import Today from "./components/Today";
import Tomorrow from "./components/Tomorrow";
import Styled from "styled-components";

function App() {
  const [state, setState] = useState(2);
  let isToday = true;
  let isTomorrow = true;
  if (state === 0) {
    isToday = true;
    isTomorrow = false;
  } else if (state === 1) {
    isToday = false;
    isTomorrow = true;
  } else if (state === 2) {
    isToday = true;
    isTomorrow = true;
  }
  return (
    <SRoot>
      <SButtonList>
        <SButton
          onClick={() => {
            setState(0);
          }}
        >
          오늘만 보기
        </SButton>
        <SButton
          onClick={() => {
            setState(1);
          }}
        >
          내일만 보기
        </SButton>
        <SButton
          onClick={() => {
            setState(2);
          }}
        >
          모두 보기
        </SButton>
      </SButtonList>
      <SContent>
        <SToday isToday={isToday}>
          <Today></Today>
        </SToday>
        <STomorrow isTomorrow={isTomorrow}>
          <Tomorrow></Tomorrow>
        </STomorrow>
      </SContent>
    </SRoot>
  );
}

const SRoot = Styled.div`
  width: 800px;
  margin: 0 auto;
`;

const SButtonList = Styled.div`
  display: flex;
  width: 400px;
  margin: 0 auto;
  margin-top: 30px;
`;
const SContent = Styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const SToday = Styled.div`
  width: ${(props) => (props.isToday ? "100%" : "0")};
  visibility: ${(props) => (props.isToday ? "visible" : "hidden")};
`;
const STomorrow = Styled.div`
width: ${(props) => (props.isTomorrow ? "100%" : "0")};
  visibility: ${(props) => (props.isTomorrow ? "visible" : "hidden")};
`;

const SButton = Styled.button`
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 30px;
  background-color: #ff9191;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default App;
