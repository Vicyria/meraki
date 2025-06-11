import React from "react";
import "./Testimonials.css"
import Footer from "../components/Footer";
export default function Testimonials() {
    return(
        <>
        <h1 className="testimonial-heading">Testimonials</h1>
        <div className="mx-auto flex items-center justify-center">
            <div className = "testimonialsContainer">
            <iframe id='testimonialto-what-my-students-say-tag-all-light' src="https://embed-v2.testimonial.to/w/what-my-students-say?theme=light&card=base&loadMore=on&initialCount=10&tag=all&cc=off" frameborder="0" scrolling="yes" width="100%"></iframe>
        </div>
        </div>
        <Footer />
        </>
    )
}