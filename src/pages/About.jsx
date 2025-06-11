import React from "react";
import "./About.css"
import ReactPlayer from "react-player";
import videoFile from "/rocket.mp4"
import videoFile2 from "/onepiece.mp4"
import imageFile from "/crochet.jpg"
import Footer from "../components/Footer";
export default function About() {
    return(
        <>
        <h1 className="about-title">About Me</h1>
        <p className="about-hero">I'm just a very curious person who loves exploring the world of languages. 
            In my free time (when I can), I enjoy <u>learning new languages</u>, which helps me stay connected to the student experience—something I find invaluable as a language teacher. 
            I have been <u>teaching French since 2018</u> at Alliance Française de Chandigarh and have had the opportunity to guide learners of different backgrounds and levels.</p>
        <div className = "flex items-center justify-center overflow-hidden">
            <div className = "aboutContainer">
                <div>
                    <h3 className="box-title">My Background & Qualifications:</h3>
                </div>
                <div className="flex flex-row">
                    <div>
                        <p className="text"> <span className = "font-bold">Master's Degree in Teaching French as a Second and Foreign Language | M2 FLES (Français Langue Étrangère et Seconde)</span><span className="italic">(Université Grenoble-Alpes, France)</span></p>
                        <h4 className = "font-bold text-xl">Languages I Speak:</h4>
                        <ul className = "list-disc ml-4 text-l">
                            <li>🇫🇷French (Advanced)</li>
                            <li>🇬🇧English (Advanced)</li>
                            <li>🇮🇳Hindi & Punjabi (Native)</li>
                            <li>🇰🇷Korean (Lower Intermediate)</li>
                            <li>🇯🇵Japanese (Basic)</li>
                        </ul>
                    </div>
                    <div className="about-photo">
                        <img clasName= "picture" src= "/about_photo.jpeg"></img>
                    </div>
                </div>
            </div>
        </div>
        <h2 className="beyond-title">Beyond Teaching: My Interests & Passions</h2>
        <div className="flex items-center justify-center mt-4 m-8">
             <div className="flex flex-col items-center justify-center m-2">
            <div className = "interestsContainer">
                <h3 className="box-title">Space Enthusiast</h3>
                <p className="text">As a child, I dreamed of becoming an astronaut and working in space exploration (life had other plans 😅). But my love for space remains, 
                    and I'm currently working on <span className="font-bold">a resource for space enthusiasts that connects French learning with space-related topics.</span>
                </p>
                <div className = "rocketContainer">
                    <div className="rocket">
                        <ReactPlayer url={videoFile} playing loop muted width="30vw" height="30vw" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center m-2">
            <div className = "interestsContainer">
                <h3 className="box-title">Avid Reader & Manga Fan</h3>
                <p className="text">I read a <strong>LOT</strong> of manga—so much that I've lost count! My absolute favourite is One Piece!
                <strong> Recent additions/Currently reading: </strong>Kaiju No. 8, Sakamoto Days, and many more.</p>
                <div className = "rocketContainer">
                    <div className="onepiece">
                        <ReactPlayer url={videoFile2} playing loop muted width="30vw" height="30vw" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center m-2">
            <div className = "interestsContainer">
                <h3 className="box-title">Craft Lover</h3>
                <p className="text">I enjoy quilling, embroidery, and crochet (my latest obsession!). 
                    Creating with my hands gives me a break from screens and allows me to express creativity in a different way.</p>
                    <div className = "crochetContainer">
                    <div className="rocketContainer">
                        <img className ="crochet-image" src="/crochet.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}