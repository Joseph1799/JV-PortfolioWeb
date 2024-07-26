import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Proyects from "./Pages/Proyects";
import ContactMe from "./Pages/ContactMe";
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
