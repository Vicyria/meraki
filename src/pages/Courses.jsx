import React from "react";
import { useState } from "react";
import "./Courses.css"
import EnrollButton from "../components/EnrollButton";

export default function Courses() {
    const courses = [
        {
            id: 1,
            title: 'A1',
            description: "A1 course",
            duration: "10 weeks",
        },
        {
            id: 2,
            title: 'A2',
            description: "A2 course",
            duration: "10 weeks",
        },
        {
            id: 3,
            title: 'B1',
            description: "B1 course",
            duration: "10 weeks",
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % courses.length)
    }

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + courses.length) % courses.length)
    }
    return(
        <>
        <div className = "courseCarousel">
            <h1 id = "course__title" >Available Courses</h1>
            <div className = "course__description">
                <p>Helloink lorem ipsum <br></br><br></br></p>
            </div>
            <div className = "carousel">
                <button className = "carousel__btn prev" onClick = {prevSlide}>
                    &lt;
                </button>
                <div className = "carousel__content"
                style = {{transform: `translateX(-${currentIndex * 100}%)`}}>
                    {courses.map((course, index) => (
                        <div className = { `carousel__slide 
                        ${index === currentIndex ? 'active' : ""}`} 
                        key = {course.id}>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <p>{course.duration}</p>
                            <EnrollButton />
                        </div>
                    ))}
                </div>
                <button className = "carousel__btn next" onClick = {nextSlide}>
                    &gt;
                </button>
                <div className = "carousel__dots">
                    {courses.map((_, index) => (
                        <span 
                        key = {index}
                        className = {`dot ${index === currentIndex ? 'active' : '' }`}
                        onClick={() => setCurrentIndex(index)}>
                        </span>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}