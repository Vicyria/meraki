import React from "react";
import './Header.css'
function Header() {
    return(
        <header>
            <div className = "header" >
                <div className = "logo">
                    <img rel = "/source" alt = "logo"></img>
                </div>
                <h1 id = "header__title">Learn with Meraki</h1>
                <div className = "navbarContainer">
                    <nav className = 'navbar'>
                        <ul className = "navbar__items">
                            <li>Home</li>
                            <li>Courses</li>
                            <li>Testimonials</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;