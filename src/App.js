import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer';
import GridPatternLinearGradient from './components/GridPatternLinearGradient';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div className="app-container">
      <GridPatternLinearGradient />

      {/* Content of the page */}
      <div className="content-container">
        {/* Navbar */}
        <Navbar />

        {/* Main routes for the app */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Contact/>
        {/* Footer */}
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App