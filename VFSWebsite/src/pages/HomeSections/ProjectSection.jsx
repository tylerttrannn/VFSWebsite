import React from "react";
import ProjectCard from "../../components/ProjectCard.jsx";
import {Link} from "react-router";

export default function ProjectSection() {
    return (
        <div className={"max-w-6xl mx-auto py-14"}>
            <h1 className={"text-4xl font-semibold"}>Projects</h1>
            <ProjectCard/>
            <Link to="/projects" className="text-white text-md bg-red p-3 px-6 rounded-lg font-normal hover:bg-[#950F35]">View All Projects</Link>
        </div>
    )
}