import React from "react";
import {Router, Routes, Route} from 'react-router-dom'
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
