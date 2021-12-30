import React, { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";
import { IUserInfo } from "./types/user.type";
function App(): React.ReactElement {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    data: null,
    status: "idle",
  });
  return (
    <>
      <Header />
      <SearchBar setUserInfo={setUserInfo}></SearchBar>
      <Result userInfo={userInfo} setUserInfo={setUserInfo}></Result>
    </>
  );
}

export default App;
