import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import Banner from "./Banner";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return(
        <>
        <Banner/>
        <nav className= {`navbar ${scrolled ? 'navbar-scrolled': ''}`}>
            <ul className="navbarContainer">
                <li><NavLink to = "/" className = "nav-link">Home</NavLink></li>
                <li><NavLink to = "/Courses" className = "nav-link">Courses</NavLink></li>
                <li><NavLink to = "/Resources" className= "nav-link">Resources</NavLink></li>
                <li><NavLink to = "/Testimonials" className = "nav-link">Testimonials</NavLink></li>
                <li><NavLink to = "/About" className = "nav-link">About</NavLink></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
