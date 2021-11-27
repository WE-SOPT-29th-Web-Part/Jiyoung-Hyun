import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/Profile";
import HomeNav from "../components/HomeNav";
import ArticlesContainer from "../components/ArticlesContainer";

const Home = () => {
  return (
    <div>
      <Header />
      <Profile />
      <HomeNav />
      <ArticlesContainer />
    </div>
  );
};

export default Home;
