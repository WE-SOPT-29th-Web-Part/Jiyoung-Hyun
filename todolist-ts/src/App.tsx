import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import TodoContainer from "./components/TodoContainer";

function App(): React.ReactElement {
  const [selectedSection, setSelectedSection] = useState("");
  return (
    <>
      <Header></Header>
      <Menu setSelectedSection={setSelectedSection}></Menu>
      <TodoContainer selectedSection={selectedSection}></TodoContainer>
    </>
  );
}

export default App;
