import React from "react";
import { useState } from "react";
import "./Courses.css"
import turtle1 from "/Turtle_1.png";
import turtle2 from "/Turtle_2.png"
import turtle3 from "/Turtle_3.png"
import turtle4 from "/Turtle_4.png"
import EnrollButton from "../components/EnrollButton";
import FaqSection from "../components/FaqSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Courses() {
    const courses = [
        {
            image: turtle1,
            id: 1,
            title: 'A1',
            description: "Beginner Level French: \n Introduce yourself, Understand Common expressions, Simple conversations",
            duration: "10 weeks",
        },
        {
            image: turtle2,
            id: 2,
            title: 'A2',
            description: "Elementary Level French: \n Discuss daily routines, Give basic information, Understand directions.",
            duration: "10 weeks",
        },
        {
            image:turtle3,
            id: 3,
            title: 'B1',
            description: "Intermediate Level French: \n Talk about past events, Share opinions, Write short texts and emails",
            duration: "10 weeks",
        },
        {
            image:turtle4,
            id: 4,
            title: 'B2',
            description: "Upper Intermideate Level French: \n Understand and write complex texts, Give clear opinions and reasons, Speak fluently with others",
            duration: "10 weeks"
        }
    ]
    const [activeId, setactiveId] = useState(null);
    const handleClick = (id) => {
        setactiveId(activeId === id ? null : id);
    }
    
    return(
        <>
        <div className="course-heading">Courses</div>
        <div className = "courses_container">
            {courses.map((course) => (
                <div
                    key = {course.id}
                    className = {`courseCard ${activeId === course.id ? 'active' : ''}`}
                    onClick={() => handleClick(course.id)}
                >
                    {activeId !== course.id && (
                        <div className="relative w-full flex flex-col ">
                            <div>
                                <img src={course.image} className="w-84 h-63 object-cover"></img>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full text-center">
                                <div className = "course-title-small">{course.title}</div>
                            </div>
                        </div>
                    )
                    }
                    {activeId === course.id && (
                        <>
                        <div className="turtle-img">
                            <img src={course.image}></img>
                        </div>
                        <div>
                            <h3 className = "course-title">{course.title}</h3>
                            <div className="course-description">{course.description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {index === 0 ? <strong>{line}</strong> : line}
                                <br></br>
                            </React.Fragment>
                            ))}
                            <div className="course-duration"><strong>Duration:</strong> {course.duration}</div>    
                            </div>
                        </div>
                        <EnrollButton />
                        </>
                    )}
                </div>
            ))}
        </div>
        <FaqSection />
        <Footer />
        </>
    )
}