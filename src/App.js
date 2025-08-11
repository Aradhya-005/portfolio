import React from 'react'
import { Routes, Route } from "react-router-dom";
import Project from './components/Project';
import About from './components/About'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div>
      <div >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App