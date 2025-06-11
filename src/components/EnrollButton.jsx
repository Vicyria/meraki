import React from "react";
import "./EnrollButton.css"

export default function EnrollButton() {
    const handleClick = (e) =>{
        e.stopPropagation();
    }
    return(
        <>
        <button className="enroll-btn" onClick={handleClick}>
            Enroll
        </button>
        </>
    )
}
