import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Pese from "./Components/Pese";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/pese" element={<Pese />} />
      </Routes>
      <Footer />
      </>

  );
}

export default App;