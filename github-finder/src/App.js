import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NewCard from "./components/NewCard";
import React, { useEffect, useState } from "react";
import Styled from "styled-components";

function App() {
  const [userInfo, setUserInfo] = useState({ data: null, status: "idle" });
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <Wrapper>
      <Title>
        <Header />
        <SearchBar setUserInfo={setUserInfo} />
      </Title>
      <NewCard userInfo={userInfo} setUserInfo={setUserInfo} />
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  display: flex;
  width: 1000px;
  margin: 20px auto;
  justify-content: space-between;
`;

const Title = Styled.div`
  margin-right: 50px;
`;
export default App;
