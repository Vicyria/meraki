import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
function Header() {
    return(
        <header>
            <div className = "header" >
                <div className = "logo">
                    <img rel = "/source" alt = "logo"></img>
                </div>
                <h1 className = "header__title">Learn with <span style={{color: 'var(--secondary-color)'}}>Meraki</span></h1>
                <div className = "navbarContainer">
                    <nav className = 'navbar'>
                        <ul className = "navbar__items">
                            <li><NavLink to = "/" className = "nav-link">Home</NavLink></li>
                            <li><NavLink to = "/Courses" className = "nav-link">Courses</NavLink></li>
                            <li><NavLink to = "/Testimonials" className = "nav-link">Testimonials
                            </NavLink></li>
                            <li><NavLink to = "/About" className = "nav-link">About</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;