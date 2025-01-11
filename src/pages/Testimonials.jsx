import React from "react";
import "./Testimonials.css"
export default function Testimonials() {
    return(
        <>
        <div className = "testimonialsContainer">
            <iframe className = "testimonials" src="https://embed-v2.testimonial.to/w/what-my-students-say?animated=on&theme=light&shadowColor=ffffff&speed=1&hideDate=on&tag=all&cc=off" frameborder="0" scrolling="yes" width="100%"></iframe>
        </div>
        </>
    )
}