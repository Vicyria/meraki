import React from "react";
import "./FaqSection.css";
export default function FaqSection(){
    return(
        <>
        <h1 className="faq-heading">Frequently Asked Questions</h1>
        <div className = "max-w-4xl mx-auto mb-12">
            <details className = "mt-4 group border-white/50  p-2 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between transition duration-300">How many levels are there for any European language?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "m-2">European languages follow the Common European Framework of Reference for Languages (CEFR), which divides proficiency into six levels:</p>
                <ul className = "ml-6 list-disc">
                    <li>A1 (Beginner)</li>
                    <li>A2 (Elementary)</li>
                    <li>B1 (Intermediate)</li>
                    <li>B2 (Upper Intermediate)</li>
                    <li>C1 (Advanced)</li>
                    <li>C2 (Proficient/Near-Native)</li>
                </ul>
            </details>
            <details className = "mt-4 group border-white/50 p-2 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">What is the structure of the courses?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "m-2">The courses follow a structured and progressive learning approach based on CEFR levels. Each course includes:</p>
                <ul className = "ml-4">
                    <li>✅ Interactive live classes</li>
                    <li>✅ Focus on all four skills: speaking, listening, reading, and writing</li>
                    <li>✅ Practical exercises and real-life scenarios</li>
                    <li>✅ Personalised feedback and guidance</li>
                    <li>📚 Book currently being used: Cosmopolite Series by Hachette</li>
                    <li>📌 Course Format (Weekend-Only classes)</li>
                    <p>Since I'm only teaching on weekends, the full CEFR levels are divided into half-levels:</p>
                    <ul className = "list-disc">A1 = Complete Level
                        <li className = "ml-8">A1.1 = First half of A1</li>
                        <li className = "ml-8">A1.2 = Second half of A1</li>
                    </ul>
                </ul>
            </details>
            <details className = "mt-4 p-2 group border-white/50 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">What material is used for the courses?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "mt-2">Course materials include:</p>
                <ul className = "ml-4">
                    <li>📚 Standard textbooks and workbooks recommended for CEFR levels</li>
                    <li>📰 Authentic materials (news articles, podcasts, videos, dialogues)</li>
                    <li>📄 Custom worksheets and practice exercises</li>
                    <li>💻 Digital tools for language learning</li>
                </ul>
            </details>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">I heard that I can reach B2 in 3-6 months even though I'm a complete beginner. Is it true?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "mt-2">❌ No. Reaching B2 from zero in just 3-6 months is unrealistic unless you dedicate full-time, intensive immersion (8+ hours daily).</p>
                <p>Language acquisition takes time, practice, and reinforcement to build real proficiency.</p>
            </details>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">What is the fastest timeline to reach a B2 level?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "mt-2">📌 On average, it takes 1.5 to 2 years to reach B2 with consistent learning, practice, and exposure.</p>
            </details>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">I wish to immigrate to Canada and need to take the TEF exam. Can I learn French in 3-6 months?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "mt-2">❌ No, if your goal is B1/B2+. Language learning is a gradual process because the brain needs time to absorb and transfer knowledge into long-term memory.
                    <br></br><span className = "font-bold">📌 Memorizing vocabulary quickly ≠ fluency.</span><br></br>A strong foundation requires consistent practice and exposure over time to develop real proficiency.
                    <br></br>✅ Yes, if your goal is A1/A2. If you aim to learn basic French (A1/A2), then 3-6 months of intensive study can help you reach a foundation level.
                    <br></br> 🧠 For TEF Canada, a structured learning plan of at least 1.5 to 2 years is recommended to achieve B1/B2 proficiency, which is typically required for immigration points.
                </p>
            </details>
            <h2 className="subheading">Course Availability & Scheduling</h2>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">What are your available dates and times?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "mt-2">I'm not publicly advertising for any level of classes at the moment. Most of my students come through word of mouth from past students.
                </p>
                <ul className = "list-disc ml-4">
                    <li>As I am currently working elsewhere, I only conduct classes on weekends (Saturday & Sunday).</li>
                    <li>The proposed timings are discussed with students, as they may be from different time zones.</li>
                    <li>I try to accommodate as many students as possible within my schedule, but not all requests can be accepted.</li>
                </ul>
                <p className = "font-bold">📌 Important Notes:</p>
                <ul className = "list-disc ml-6">
                    <li>Please check my availability before purchasing any package/course.</li>
                    <li>If you don’t see available slots for your preferred date and time, those slots are already booked by other students or are simply not available.</li>
                    <li><span className ="font-bold">For current students:</span> You will receive a Zoom link for each class on your registered email ID, along with further instructions.</li>
                </ul>
            </details>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">How long does each lesson take?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <ul className = "list-disc ml-4">
                    <li><span className ="font-bold">Group Coaching:</span> 60 to 120 minutes, depending on the course.</li>
                    <li><span className = "font-bold">One-on-One Private Lessons:</span> 60 minutes (double lessons are available).</li>                </ul>
            </details>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">What payment options are available?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <ul className = "list-disc ml-4">
                    <li>✅ Razorpay Payment (Automatic confirmation email will be sent).</li>
                    <li>✅ Direct Bank Transfer (Only if Razorpay is unsuccessful).</li>
                    <li>❌ No installment plans - Payment is one-time before the course starts.</li>
                </ul>
            </details>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">Which package should I choose?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <ul className = "list-disc ml-4">
                    <li><span className= "font-bold">Group Lessons:</span> Best for students who want to learn regularly and progress faster with peer interaction.</li>
                    <li><span className = "font-bold">1:1 Personalized Session:</span> Best for students who want to study at their own pace but only have one hour per week.</li>
                </ul>
            </details>
            <h2 className="subheading">Registration, Cancellation & Attendance</h2>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">How to register for classes?
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p className = "font-bold">For Group Classes:</p>
                <ul className = "ml-4 list-disc">
                    <li>After payment, you will be added to a WhatsApp group.</li>
                </ul>
                <p className = "For Personal Coaching:">For Personal Coaching:</p>
                <ul>
                    <li>After payment, we will discuss and finalize a time slot that works for both the student and me.</li>
                </ul>
            </details>
            <h2 className="subheading">Refunds & Policies</h2>
            <details className = "mt-4 group border-white/50 p-3 rounded-xl shadow-[4px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-white/30">
                <summary className = "cursor-pointer text-xl flex justify-between">Can I get a refund? (Money-Back Guarantee Policy)
                    <span className = "rotate-180 transition-transform group-open:rotate-0">^</span>
                </summary>
                <p>✅ Yes, you do have a guarantee.<br></br>But only under specific conditions.<br></br><span>Money-Back Guarantee Policy:</span></p>
                <ul>
                    <li>A refund is available only within 24 hours after your first lesson. If you are unsatisfied, you may request a refund via email.</li>
                    <li>❌ The trial lesson is non-refundable.</li>
                    <li>❌ Lessons cannot be transferred to another person.</li>
                    <li>❌ Unused lessons must be used within the validity period; otherwise, they will be forfeited without a refund.</li>
                </ul>
            </details>
        </div>
        </>
        
    )
}