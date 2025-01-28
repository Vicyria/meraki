import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from "./pages/Home"
import About from "./pages/About"
import Testimonials from "./pages/Testimonials"
import Courses from "./pages/Courses"
import Background from './components/Background';

export default function App(){

  return(
    <>
    <Router>
      <div className = "app-container">
        <Header />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/courses" element = {<Courses />} />
            <Route path = "/testimonials" element = {<Testimonials />} />
            <Route path = "/about" element = {<About />} />
          </Routes>
      </div>
    </Router>
    </>
  )
}