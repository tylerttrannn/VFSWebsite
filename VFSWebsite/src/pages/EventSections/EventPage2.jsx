import supernal from "../../assets/Events/supernal_tour/supernal.avif"

import overair_img from "../../assets/Events/overair_tour/overair.avif"

import dietrich_flyer from "../../assets/Events/dietrich_event/flyer.webp"
import dietrich_img from "../../assets/Events/dietrich_event/dietrich.webp"

import nasa_flyer from "../../assets/Events/nasa_event/flyer.webp"
import nasa_img1 from "../../assets/Events/nasa_event/jason.webp"
import nasa_img2 from "../../assets/Events/nasa_event/image1.webp"

import speaker from "../../assets/Events/speaker_event/puneet_singh.avif"
import speaker3 from "../../assets/Events/speaker_event/overair_speaker.webp"
import speaker1 from "../../assets/Events/speaker_event/image2.webp"
import speaker2 from "../../assets/Events/speaker_event/image3.webp"

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

    {
      title: "Rotorcraft & eVTOL Technology",
      date: "May 2023",
      description: `
Dr. Puneet Singh, Staff Engineer at Overair, joined us for an engaging discussion on the development of the Butterfly eVTOL aircraft and the future of Urban Air Mobility. He shared insights into rotorcraft aeromechanics, flight dynamics, and control laws, providing students with a deeper understanding of the challenges and innovations shaping next-generation electric vertical flight. `,
    images: [speaker, speaker1, speaker2, speaker3]
    }
    ];

    return (
        <div className="space-y-2 max-w-7xl mx-auto pb-10">
            <h1 className="text-6xl font-extrabold pl-16 my-10">Past Events</h1>
            {events.map((event, index) => (
                <div
                    key={index}
                    // using flex-row-reverse to alternate image
                    className={`flex flex-col md:flex-row ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }  p-5 `}
                >

                    {/* Image */}
                    <div className="md:w-1/2 flex items-center justify-center relative">
                        {event.images && event.images.length > 0 && (
                            <Carousel className="relative w-full max-w-[65%]">
                                <CarouselContent>
                                    {event.images.map((image, index) => (
                                        <CarouselItem key={index} className="flex justify-center">
                                            <img src={image} className="rounded-lg h-[320px] "
                                                 alt={`Slide ${index + 1}`}/>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/*modifying the styling of the buttons to make it more compact*/}
                                <div className="absolute inset-0 flex justify-between items-center px-4">
                                    <CarouselPrevious
                                        className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center"/>
                                    <CarouselNext
                                        className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center"/>
                                </div>
                            </Carousel>
                        )}
                    </div>

                    {/* Description of Event */}
                    <div className="md:w-1/2 flex flex-col justify-center p-10">
                        <div className="px-4">
                            <div>
                                <h1 className="text-[#C30D3B] font-bold text-4xl">{event.title}</h1>
                                <h2 className="text-2xl font-bold mt-2">{event.date}</h2>
                            </div>
                            <div className="max-w-full mt-4">
                                <p className="">
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
