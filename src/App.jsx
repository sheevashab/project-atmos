import "./App.css";
import Home from "./screens/Home/Home";
import HomePlans from "./screens/HomePlans/HomePlans";
import Lots from "./screens/Lots/Lots";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
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
}

export default App;
