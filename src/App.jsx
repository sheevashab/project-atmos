import "./App.css";
// import HomePage from "./screens/HomePage/HomePage";
import HomePlans from "./screens/HomePlans/HomePlans";
import Lots from "./screens/Lots/Lots";
// import SideBar from "./components/SideBar/SideBar";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SideBar /> */}
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/homeplans" element={<HomePlans />} />
            <Route path="/lots" element={<Lots />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
