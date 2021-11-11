import React from "react";
import Today from "./components/Today";
import Tomorrow from "./components/Tomorrow";
import Styled from "styled-components";

function App() {
  return (
    <SRoot>
      <Today></Today>
      <Tomorrow></Tomorrow>
    </SRoot>
  );
}

const SRoot = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
`;

export default App;
