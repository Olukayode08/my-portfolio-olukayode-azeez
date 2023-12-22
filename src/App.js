import React from "react";
import {Routes, Route} from 'react-router-dom'
import Hero from "./components/Hero";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
    </>
  );
}

export default App;
