import "./App.css";
import Home from "./screens/Home/Home";
import HomePlans from "./screens/HomePlans/HomePlans";
import Lots from "./screens/Lots/Lots";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeplans" element={<HomePlans />} />
          <Route path="/lots" element={<Lots />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
