import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import Hero from "../components/Hero"
import Submarine from "../components/Submarine";
import "./Home.css"
import Choose from "../components/Choose";
import Footer from "../components/Footer";
export default function Home() {
    return(
        <>
        <Hero />
        <Introduction />
        <Submarine />
        <Choose />
        <h3 className="table-heading">Difference between DELF/DALF and TEF</h3>
        <Table />
        <h3 className="testimonial-title">Join <u>100+</u> happy learners</h3>
        <div className="testimonial">
            <h3 className="crewline">And immortalize your name on the wall of decorated crewmates</h3>
            <iframe  id='testimonialto-what-my-students-say-tag-all-light-animated' src="https://embed-v2.testimonial.to/w/what-my-students-say?animated=on&horizontal=on&theme=light&shadowColor=black&speed=0.5&rows=1&tag=all&cc=off" 
            frameborder="0"
            background="transparent"
            style={{ border: 'none', maxWidth: '95%', margin: '1 auto', display: 'block', height: '500px'}}
            scrolling="no" width="100%"></iframe>
        </div>
        <Footer />
        </>
    )
}