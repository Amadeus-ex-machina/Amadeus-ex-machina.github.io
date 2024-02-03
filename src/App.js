import "./App.css";

// Components
import Toggle from "./components/Toggle/Toggle";

// Pages
import Home from "./pages/home/Home";
import Carepacker from "./pages/carepacker/carepacker";
import Weather from "./pages/weather/weather";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Toggle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carepacker" element={<Carepacker />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
