import React from "react";
import { Link } from "react-router";

export default function ProjectCard({project}) {
    return (
        <div className="flex flex-col justify-center items-center container my-8 max-w-6xl mx-auto">
            {/* Image and Text Section */}
            <div className="flex gap-10 items-stretch">
                {/* Image Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src={project.image}
                        alt="Image of Plane"
                        className="h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-1/2 flex flex-col justify-center gap-4">
                    <h1 className="text-2xl font-bold">{project.header}</h1>
                    <p className="text-sm text-gray-700">{project.description.split("\n").map((paragraph, index) =>
                        paragraph.trim() ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />
                    )}</p>
                    <Link to="/project" className="w-fit text-red text-md border-2 border-red p-2 px-8 rounded-lg font-medium hover:border-[#6F0B27] hover:text-[#6F0B27]">
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    );
}
