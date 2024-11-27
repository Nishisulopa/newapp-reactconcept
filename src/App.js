import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainFile from "./Component/MainFile";
import ChildOne from "./Component/ChildOne";
import Usememoparent from "./Component/usememo/Usememoparent";
import FirstPage from "./tailwind-css-page/FirstPage";
import Navbar from "./tailwind-css-page/Navbar";
import CardShow from "./tailwind-css-page/CardShow";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<MainFile />} />
    //     <Route path="/child" element={<ChildOne />} /> */}
    //     {/* <Route path="/" element={<Customhookuse />} /> */}
    //   </Routes>
    // </Router>
    // <Usememoparent />
    <>
      {/* <Navbar /> */}
      {/* <FirstPage /> */}
      <CardShow />
    </>
  );
}

export default App;
