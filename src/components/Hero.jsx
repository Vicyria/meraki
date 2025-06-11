import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"
export default function app() {
    return(
        <>
        <p className="hero-text"><span className="bonjour">Bonjour</span> et Bienvenue à bord, set sail on your french journey with meraki.<br></br>
        <span className="hero-subheading">Immerse yourself in the joy of language learning.<br></br></span></p>
        <p className="plunge-text"><Link to ="/Courses" className="cta-1">Come, take the plunge</Link>, the water's French!</p>
        </>
        
    )
}