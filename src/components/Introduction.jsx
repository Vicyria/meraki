import React from "react";
import "./Introduction.css"
import { Link } from "react-router-dom";
export default function Introduction() {
    return(
        <>
        <div className="m-3 p-4 md:mx-auto max-w-5xl flex flex-col flex-auto border bg-white/30 border-white/50 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm mb-12">
            <div className="flex flex-col justify-center align-center mb-1">
                <h3 className="intro-heading">Meet yer Cap'n!</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mt-3 w-full md:w-3/4 order-2 md:order-1 height-xl radius-l">
                <p className="text-l">Hi, I'm Anushka! I've taught French at Alliance Française de Chandigarh and I've been a certified DELF examiner since 2018. 
                    I'm passionate about making French learning immersive, practical, and confidence-building.
                    I love learning languages and using that curiosity to stay connected with my students' experiences.
                    <br></br>I believe in teaching French through real-life situations, while also valuing how memorisation helps build a strong foundation.
                    My mission? To help you gain confidence and actually use French for work, study, or personal growth.
                    </p>
                    <Link to ="/About" className="about-link">Know more about me!</Link>
                </div>
                <div className="w-2/4 md:w-1/4 order-1 md:order-2 height-xl">
                <img className = "rounded-[50%] border-2 md:border-4 border-black/20 " src = "/photo.jpg"></img> 
                </div>
            </div>
        </div>
        </>
    )
}