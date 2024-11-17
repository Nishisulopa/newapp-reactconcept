import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainFile from "./Component/MainFile";
import ChildOne from "./Component/ChildOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFile />} />
        <Route path="/child" element={<ChildOne />} />
      </Routes>
    </Router>
  );
}

export default App;
