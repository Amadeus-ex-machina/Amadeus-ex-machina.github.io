import "./App.css";

import Toggle from "./components/Toggle/Toggle";
import Project from "./pages/carepacker/carepacker";
import Weather from "./pages/weather/weather";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";

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
