import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./pages/article";
import Home from "./pages/home";
import Write from "./pages/write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
        <Route path="/article/edit/:id" element={<Write />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
