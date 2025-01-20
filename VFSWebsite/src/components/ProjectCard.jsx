import React from "react";
import Plane from "../assets/images/plane.jpg";
import { Link } from "react-router";

export default function ProjectCard() {
    return (
        <div className="flex flex-col justify-center items-center container my-5 max-w-6xl mx-auto">
            {/* Image and Text Section */}
            <div className="flex gap-10 items-stretch">
                {/* Image Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src={Plane}
                        alt="Image of Plane"
                        className="h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-1/2 max-w-lg mx-auto flex flex-col justify-center gap-4">
                    <h1 className="text-2xl font-bold">Student Design Competition (SDC)</h1>
                    <p className="text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu.
                    </p>
                    <Link
                        to="/project"
                        className="text-blue-600 hover:underline"
                    >
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    );
}
