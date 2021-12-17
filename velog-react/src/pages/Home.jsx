import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/home/Profile";
import HomeNav from "../components/home/HomeNav";
import ArticlesContainer from "../components/home/ArticlesContainer";
import SeriesCategory from "../components/home/SeriesCategory";

import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <StyledRoot>
      <Header />
      <StyledMain>
        <Profile />
        <HomeNav />
        <Routes>
          <Route path="/series" element={<SeriesCategory />} />
          <Route path="/" element={<ArticlesContainer />} />
        </Routes>
      </StyledMain>
    </StyledRoot>
  );
};

export default Home;

const StyledRoot = styled.div`
  background-color: white;
`;

const StyledMain = styled.main`
  max-width: 768px;
  width: 100%;
  margin: auto;
`;
