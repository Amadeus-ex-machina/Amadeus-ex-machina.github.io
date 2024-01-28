import "./App.css";

import Toggle from "./Toggle";
import Project from "./Project";
import Weather from "./Weather";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <>
      <Toggle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
