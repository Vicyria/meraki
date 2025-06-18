import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css"
import Banner from "./Banner";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if(isMobile) return;
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    return(
        <>
        {isOpen && (
                <div className="hamburger">
                    <button className= "cancel-btn" onClick={ () => setIsOpen(!isOpen)}>X</button>
                    <ul className="hamburger-menu">
                        <li><NavLink to = "/" className = "nav-link-m-1">Home</NavLink></li>
                        <li><NavLink to = "/Courses" className = "nav-link-m-2">Courses</NavLink></li>
                        <li><NavLink to = "/Resources" className= "nav-link-m-3">Resources</NavLink></li>
                        <li><NavLink to = "/Testimonials" className = "nav-link-m-4">Testimonials</NavLink></li>
                        <li><NavLink to = "/About" className = "nav-link-m-5">About</NavLink></li>
                    </ul>
                </div>  
            )}
        <Banner/>
        <nav className= {`navbar ${scrolled ? 'navbar-scrolled': ''}`}>
            <button className="hamburger-btn" onClick={ () => setIsOpen(!isOpen)}>☰</button>
            <p className="title">Learn With Meraki</p>
            <ul className="navbarContainer">
                <li><NavLink to = "/" onClick = { () => setIsOpen(false)} className = "nav-link">Home</NavLink></li>
                <li><NavLink to = "/Courses" onClick = { () => setIsOpen(false)} className = "nav-link">Courses</NavLink></li>
                <li><NavLink to = "/Resources" className= "nav-link" onClick = { () => setIsOpen(false)}>Resources</NavLink></li>
                <li><NavLink to = "/Testimonials" className = "nav-link">Testimonials</NavLink></li>
                <li><NavLink to = "/About" className = "nav-link">About</NavLink></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
