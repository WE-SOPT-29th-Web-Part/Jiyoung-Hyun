import React from "react";
import { Routes, Route } from "react-router-dom";
import Articles from "./articles";
import Series from "./series";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import { SWrapper } from "./style";

function Home() {
  return (
    <>
      <SWrapper>
        <Header />
        <UserProfile />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </SWrapper>
    </>
  );
}

export default Home;
