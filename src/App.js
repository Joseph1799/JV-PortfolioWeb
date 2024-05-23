import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Proyects from "./Pages/Proyects";
import ContactMe from "./Pages/ContactMe";

function App() {
  return (
    <Router basename="/JV-PortfolioWeb">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
