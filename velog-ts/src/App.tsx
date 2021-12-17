import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Write from "./pages/write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
