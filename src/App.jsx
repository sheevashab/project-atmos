import logo from "./logo.svg";
import "./App.css";
import HomePage from "./screens/HomePage/HomePage";
import Homes from "./screens/Homes/Homes";
import Lots from "./screens/Lots/Lots";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/lots" element={<Lots />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
