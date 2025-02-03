import React from "react";
import ProjectCard from "../../components/ProjectCard.jsx";
import {Link} from "react-router";
import dbvf_1 from "../../assets/Projects/dbvf_comp/image1.jpg";

import Helicopter from "../../assets/images/helicopter.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectSection() {
    const projects = [

        {
            id:1,
            image:dbvf_1,
            header:"Design-Build-Vertical Fly (DBVF)",
            description:"This competition challenges university students to design, build, operate an electric-powered remote-control vertical take-off and landing (VTOL) aircraft. The goal is to promote hands-on experience with eVTOL and advanced air mobility (AAM) technology, preparing the next generation of engineers and innovators in unmanned aircraft systems. ",
        },
        {
            id:1,
            image:Helicopter,
            header:"Student Design Competition (SDC)",
            description:"The Vertical Flight Society (VFS) Student Design Competition (SDC) is an annual challenge that pushes students to develop cutting-edge vertical lift solutions. As the VFS at UCI Chapter, we sponsor a team of undergraduates to apply their aerospace engineering skills to real-world design problems. Winning teams receive a cash stipend and the opportunity to present at VFS’s largest Annual Forum and Technology Display. The competition fosters education and careers in vertical flight, with rotating sponsorship from Airbus, Boeing, Bell, Leonardo Helicopters, Sikorsky (Lockheed Martin), and the US Army Research Lab.",
        },

    ]
    return (
        <div className="flex items-center justify-center px-4">
            <div className="my-6 sm:my-10 flex flex-col w-full max-w-6xl text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">PROJECTS</h1>

                <Carousel opts={{ align: "center" }} className="w-full relative mt-6">
                    <CarouselContent className="flex gap-4">
                        {projects.map((project) => (
                            <CarouselItem
                                key={project.id}
                                className="w-full"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 bg-white">
                                    {/* Image */}
                                    <img
                                        src={project.image}
                                        alt={project.header}
                                        className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                                    />

                                    {/* Text Content */}
                                    <div className="flex flex-col md:w-1/2 text-center md:text-left">
                                        <h2 className="text-xl md:text-2xl font-bold">{project.header}</h2>
                                        <p className="text-sm sm:text-md mt-2">{project.description}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="text-blue border-yellow border-2" />
                    <CarouselNext className="text-blue border-yellow border-2" />
                </Carousel>

                <div className="flex justify-center mt-5">
                    <Link
                        to="/projects"
                        className="text-white text-sm sm:text-md bg-red p-2 px-4 sm:p-3 sm:px-6 rounded-lg font-normal hover:bg-[#950F35]"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}