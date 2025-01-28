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
        {
            id: 4,
            title: 'B2',
            description: "C1 course",
            duration: "10 weeks"
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <>
        <div className = "courses_container">
            <h3 className = "courses_heading">Courses List</h3>
            <ul className="course_list">
            {courses.map((course) => (
                <li key = {course.id} className="course_card">
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p>Duration: {course.description}</p>
                </li>
            ))}
            </ul>
        </div>
        </>
    )
}