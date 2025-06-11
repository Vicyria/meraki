import React from "react";
import "./Choose.css"
import { useNavigate } from "react-router-dom";
export default function Choose(){
    const nav = useNavigate();
    return(
        <>
        <h2 className="choose-heading">Why learn from me?</h2>
        <h3 className="choose-subheading">Because here you'll find:</h3>
        <div className="max-w-6xl mx-auto m-4 flex flex-col">
            <div className="max-w-6xl mx-auto flex flex-row">
                <div>
                    <div className="height-l m-3 bg-white/30 backdrop-blur-sm text-center rounded-2xl border-4 duration-200 overflow-hidden border-white/40 hover:scale-105">
                        <img className="choose-image" src="/Turtle_courses.png" onClick={() => nav("/courses")} ></img>
                        <p className="caption">Courses</p>
                    </div>
                </div>
                <div>
                    <div className="height-l m-3 bg-white/30 backdrop-blur-sm rounded-2xl text-center border-4 duration-200 overflow-hidden border-white/40 hover:scale-105">
                        <img className="choose-image" src="/Turtle_courses2.png" onClick={() => nav("/Resources")}></img>
                        <p className="caption">Resources</p>
                    </div>
                </div>
                <div>
                    <div className="height-l m-3 bg-white/30 backdrop-blur-sm rounded-2xl text-center border-4 duration-200 border-white/40 hover:scale-105">
                        <img className="choose-image" src="/Turtle_courses3.png" onClick={() => nav("/Resources")}></img>
                        <p className="caption">Français sur Objectifs Spécifiques (FOS)</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}