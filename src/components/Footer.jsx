import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="footer-container">
            <p className=" text-center col-start-2 mb-2">&copy; {currentYear} Learn with Meraki. All rights reserved</p>
            <div className=" flex justify-end items-center mb-2 gap-2 mr-2 md:mr-6 lg:mr-10 whitespace-nowrap">
                <p>Socials:</p>
                <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="icons"
                    viewBox="0 0 24 24"
                    >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761
                    0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966
                    0-1.75-.804-1.75-1.732s.784-1.732 1.75-1.732c.965 0 1.75.804
                    1.75 1.732s-.785 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869
                    0-2.156 1.46-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.76
                    1.381-1.562 2.841-1.562 3.038 0 3.6 2.001 3.6 4.604v5.591z"/>
                    </svg>
            </a>
            </div>
        </footer>
    )
}