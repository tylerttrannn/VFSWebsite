import React from "react";
import ProjectCard from "../../components/ProjectCard.jsx";
import {Link} from "react-router";
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
            image:Helicopter,
            header:"Student Design Competition (SDC)",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            id:1,
            image:Helicopter,
            header:"Design-Build-Vertical Fly (DBVF)",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
    ]
    return (
        <div className="flex items-center justify-center">
            <div className={"my-10 flex flex-col"}>
                <h1 className="text-4xl font-bold">PROJECTS</h1>
                <Carousel opts={{align: "center"}} className="w-full max-w-6xl relative ">
                    <CarouselContent className="flex gap-4">
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="w-full">
                                <ProjectCard project={project}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className={"text-blue border-yellow border-2"}/>
                    <CarouselNext className={"text-blue border-yellow border-2"}/>
                </Carousel>
                <div className="flex justify-center mt-5">
                    <Link
                        to="/projects"
                        className="text-white text-md bg-red p-3 px-6 rounded-lg font-normal hover:bg-[#950F35]"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>

    )
}