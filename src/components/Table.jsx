import React from "react";

export default function Table() {
    return (
        <>
        <div className="max-w-4xl mx-auto mb-12">
            <table className = "mt-8 mb-8 border-spacing-2 bg-white/30 p-2 rounded-xl border-separate border shadow-[4px_4px_rgba(255,255,255,0.5)] border-white/50 backdrop-blur-sm table-fixed">
                <thead>
                    <tr>
                        <th className="bg-white/55 p-4 rounded-xl">Feature</th>
                        <th className="bg-white/55 p-4 rounded-xl">DELF-DALF</th>
                        <th className="bg-white/55 p-4 rounded-xl">TEF (Test d'Évaluation de Français)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Purpose</td>
                        <td>General French language proficiency exam</td>
                        <td>Mainly for immigration (Canada, Quebec) and professional requirements</td>
                    </tr>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Structure</td>
                        <td>Divided into six levels (A1 to C2) <br></br>DELF from A1 till B2 (4 separate exams)
                        <br></br>DALF only for C1 and C2 (2 separate exams)</td>
                        <td>A scored exam (not pass/fail); higher score = better proficiency</td>
                    </tr>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Validity</td>
                        <td>Valid for life</td>
                        <td>Valid for 2 years</td>
                    </tr>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Skills Tested</td>
                        <td>Listening, Reading, Writing, Speaking</td>
                        <td>Listening, Reading, Writing, Speaking</td>
                    </tr>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Who recognises It?</td>
                        <td>French universities, employers, official institutions worldwide</td>
                        <td>Canada & Quebec immigration authorities, some professional and academic institutions</td>
                    </tr>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Difficulty</td>
                        <td>Each level is separate (e.g., A2, B1, B2, etc.)</td>
                        <td>A single test that assesses your overall proficiency; exam has questions from all 6 levels (A1-C2)</td>
                    </tr>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Where to Take It?</td>
                        <td className="m">Official exam centers (e.g., Alliance Française, French institutes)</td>
                        <td>Official TEF test centers worldwide</td>
                    </tr>
                    <tr>
                        <td className="bg-white/30 p-4 rounded-xl font-bold">Best for</td>
                        <td>Academic purposes, professional applications, proving language ability for personal growth</td>
                        <td>Immigration to Canada (TEF Canada) or Quebec (TEFAQ), certain job applications</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}