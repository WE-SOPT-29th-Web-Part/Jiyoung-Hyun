import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import SeriesCategory from "./pages/SeriesCategory";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write/*" element={<Write />} />
          <Route path="/seriesCategory/*" element={<SeriesCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
