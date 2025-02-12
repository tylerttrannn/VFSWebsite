import React from "react";
import ProjectCard from "../../components/ProjectCard.jsx";
import {Link} from "react-router";
import DBVF from "../../assets/Projects/dbvf_comp/image4.png"
import SDC from "../../assets/Projects/SDC.jpg"
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
            image:DBVF,
            header:"Design-Build-Vertical Fly (DBVF)",
            description:"The DBVF (Design-Build-Vertical Flight) competition is an eVTOL (electric-powered remote-control vertical take-off and landing) vehicle competition where university students have the opportunity to gain hands-on experience and familiarize themselves with eVTOL and AAM (advanced air mobility). \n" +

                "Student teams annually design, build, and test an eVTOL aircraft to meet specific objectives and attend a flyoff in Maryland, where they are scored on their ability to meet those objectives. \n" +

                "UCI’s DBVF team AeroZot currently consists of 19 members who are split into subteams to develop the airframe, hardware, software, and the financing of the eVTOL.\n",
        },
        {
            id:2,
            image:SDC,
            header:"Student Design Competition (SDC)",
            description:
                "The Vertical Flight Society (VFS) Student Design Competition (SDC) is an annual aircraft design competition that challenges students to innovate and engineer cutting-edge vertical lift solutions. As the VFS at UCI Chapter, we proudly sponsor a team of undergraduate students to compete in this competition, providing them with the opportunity to apply their aerospace engineering knowledge to real-world design problems. \n" +
                "Winning teams are awarded a cash stipend, as well as an invitation to present their designs at the Vertical Flight Society’s largest Annual Forum and Technology Display. The competition aims to encourage education and careers in vertical flight with rotating sponsorship between Airbus, The Boeing Company, Bell, Leonardo Helicopters, Sikorsky, a Lockheed Martin Co.; and US Army Research Lab. \n"

        },
    ]
    return (
        <div className="flex items-center justify-center px-4">
            <div className="my-6 sm:my-10 flex flex-col w-full max-w-6xl text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">PROJECTS</h1>

                <Carousel opts={{ align: "center" }} className="w-full relative mt-6">
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
                        className="hidden md:block text-white text-sm md:text-md bg-red p-2 px-4 md:p-3 md:px-6 rounded-lg font-normal hover:bg-[#950F35]"
                        >
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>

    )
}