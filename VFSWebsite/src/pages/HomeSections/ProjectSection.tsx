import React from "react";
import ProjectCard from "../../components/ProjectCard.jsx";
import {Link} from "react-router";
import DBVF from "../../assets/images/Projects/dbvf_comp/image4.png"
import SDC from "../../assets/images/Projects/SDC.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ProjectSection() {

    const [api, setApi] = React.useState<CarouselApi | null>(null)
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)


    React.useEffect(() => {
        if (!api) return
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        const onSelect = () => setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", onSelect)
    
        return () => api.off("select", onSelect)
      }, [api])
    

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

                <Carousel setApi = {setApi} opts={{ align: "center" }} className="w-full relative mt-6">
                    <CarouselContent className="flex gap-4">
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="w-full">
                                <ProjectCard project={project}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>


                {count > 0 && (
                    <div className = "mb-4 flex items-center justify-center gap-4">
                        <Button variant="outline" className = "rounded-full" onClick={() => api?.scrollPrev()}><ArrowLeft/></Button>
                        <span className="text-sm text-gray-800 font-medium">
                        Slide {current } of {count}
                        </span>
                        <Button variant="outline" className = "rounded-full" onClick={() => api?.scrollNext()}><ArrowRight/></Button>
                    </div>
                )}
                
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