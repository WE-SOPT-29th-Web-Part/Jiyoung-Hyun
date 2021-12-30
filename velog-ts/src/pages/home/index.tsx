import React from "react";
import { Routes, Route } from "react-router-dom";
import Articles from "./articles";
import Series from "./series";
function Home() {
  return (
    <>
      <div>home</div>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </>
  );
}

export default Home;
