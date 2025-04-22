import supernal from "../../assets/images/Events/supernal_tour/supernal.avif"

import overair_img from "../../assets/images/Events/overair_tour/overair.avif"

import dietrich_flyer from "../../assets/images/Events/dietrich_event/flyer.webp"
import dietrich_img from "../../assets/images/Events/dietrich_event/dietrich.webp"

import nasa_flyer from "../../assets/images/Events/nasa_event/flyer.webp"
import nasa_img1 from "../../assets/images/Events/nasa_event/jason.webp"
import nasa_img2 from "../../assets/images/Events/nasa_event/image1.webp"

import careerFlyer from "../../assets/images/Events/career_night/flyer.webp";
import career1 from "../../assets/images/Events/career_night/carrer.avif";
import career2 from "../../assets/images/Events/career_night/image2.webp";
import career3 from "../../assets/images/Events/career_night/image3.webp";
import career4 from "../../assets/images/Events/career_night/image4.webp";
import career5 from "../../assets/images/Events/career_night/image5.webp";
import career6 from "../../assets/images/Events/career_night/image1.webp";

import EventCarousel from "./EventCarsouel"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


export default function Events1() {
    const events = [
        {
            title: "Spring Career Development Night",
            date: "May 2024",
            description: `
VFS at UCI hosted Axel Radermacher, Co-Founder and Head of Product at Odys Aviation, Jason Holmstedt, Sr. Director of Technology and Innovation at Intellisense Systems, Jim Orbon, Senior Technical Program Manager at Anduril, and Professor Jacqueline Huynh, Assistant Professor at UCI’s MAE Department, for a career development night. The goal of the event was to expose students to diverse career paths and network with some of the local industry’s senior and executive leaders. 

`,
            images: [careerFlyer, career1, career2, career3, career4, career5, career6]

        },

    {
      title: "Supernal Company Tour",
      date: "April 2024",
      description: ``,
      images: [supernal]
    },
    {
      title: "Overair Company Tour",
      date: "January 2024",
      description: ``,
    images: [overair_img]
    },

    {
        title: "Jump Aero Speaker Event: Dr. Carl Dietrich",
        date: "January 2024",
        description: `
Dr. Carl Dietrich, Founder and CEO of Jump Aero, joined us for an insightful speaker event where he shared his journey in aviation entrepreneurship, from founding Terrafugia to developing high-speed eVTOL aircraft for first responders at Jump Aero. Dr. Dietrich provided valuable perspectives on the future of Urban Air Mobility and the challenges of bringing innovative aircraft to market. 
  `,
    images: [dietrich_flyer, dietrich_img]
      },

    {
      title: "NASA Project Dragonfly - October 2023",
      date: "October 2023",
      description: `
Dr. Jason Cornelius, a researcher supporting NASA’s Dragonfly mission, joined us for a discussion on the upcoming rotorcraft exploration of Titan, Saturn’s largest moon. He shared insights into the mission’s goals, including the search for prebiotic chemistry and potential signs of life, as well as his experiences in vertical lift research and aerospace engineering.

`,
    images: [nasa_flyer, nasa_img1, nasa_img2],

    },

    ];

    return (
        <div className="space-y-2 max-w-7xl mx-auto pb-10">
        <h1 className="text-3xl sm:text-6xl font-extrabold text-center sm:text-left sm:ml-16 my-10">Past Events</h1>
        {events.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}  p-5 `}>

                <div className="md:w-1/2 w-full flex items-center justify-center relative pb-5">
                {event.images && event.images.length > 0 && (
                    <EventCarousel images={event.images} />

                )}
                </div>

                {/* Description of Event */}
                <div className="md:w-1/2 flex flex-col justify-center sm:p-10 ">
                    <div className="px-4">
                        <div>
                            <h1 className="text-[#C30D3B] font-bold text-3xl sm:text-4xl">{event.title}</h1>
                            <h2 className="text-2xl font-bold mt-2">{event.date}</h2>
                        </div>
                        <div className="max-w-full mt-4">
                            <p className="text-sm md:text-md">
                                {event.description}
                            </p>
                        </div>
                    </div>
                </div>

              </div>
          ))}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="/events/1"/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/events/1">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/events/2" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/events/3">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="/events/3"/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
