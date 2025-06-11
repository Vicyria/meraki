import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/Navbar';
import Resources from './pages/Resources';
import Testimonials from "./pages/Testimonials"
import Courses from "./pages/Courses"
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';

export default function App(){

  return(
    <>
    <Router>
      <ScrollToTop />
      <div className = "app-container">
        <Navbar/>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/courses" element = {<Courses />} />
            <Route path = "/resources" element = {<Resources />} ></Route>
            <Route path = "/testimonials" element = {<Testimonials />} />
            <Route path = "/about" element = {<About />} />
          </Routes>
      </div>
    </Router>
    </>
  )
}