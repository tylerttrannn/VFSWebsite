import React from "react";
import { Link } from "react-router";

export default function ProjectCard({ project }) {
    return (
        <div className="flex justify-center items-center w-full max-w-6xl mx-auto my-8">
            {/* Image and Text Section */}
            <div className="flex flex-col md:flex-row gap-10 items-center w-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={project.image}
                        alt="Image of Plane"
                        className="w-full max-w-sm md:max-w-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 text-center md:text-left">
                    <h1 className="text-2xl font-bold">{project.header}</h1>
                    <p className="text-sm text-gray-700">
                        {project.description.split("\n").map((paragraph, index) =>
                            paragraph.trim() ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />
                        )}
                    </p>

                    {/* Centered on mobile and left aligned on desktop */}
                    <Link 
                        to="/projects" 
                        className="w-fit mx-auto md:mx-0 text-red text-md border-2 border-red p-2 px-8 rounded-lg font-medium hover:border-[#6F0B27] hover:text-[#6F0B27]"
                    >
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    );
}
