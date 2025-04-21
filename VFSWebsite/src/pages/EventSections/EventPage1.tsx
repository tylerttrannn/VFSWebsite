
import rotorcraft_flyer3 from "../../assets/images/Events/rotorcraft_workshop3/flyer.png"
import workshop3_image1 from "../../assets/images/Events/rotorcraft_workshop3/rotorcraft_1.webp"
import workshop3_image2 from "../../assets/images/Events/rotorcraft_workshop3/rotorcraft_2.webp"
import workshop3_image3 from "../../assets/images/Events/rotorcraft_workshop3/rotorcraft_3.webp"
import workshop3_image4 from "../../assets/images/Events/rotorcraft_workshop3/rotorcraft_4.webp"
import workshop3_image5 from "../../assets/images/Events/rotorcraft_workshop3/rotorcraft_5.webp"
import workshop3_image6 from "../../assets/images/Events/rotorcraft_workshop3/rotorcraft_6.webp"

import diachun_flyer from "../../assets/images/Events/diachun_event/flyer.webp"
import diachun1 from "../../assets/images/Events/diachun_event/image1.webp"
import diachun2 from "../../assets/images/Events/diachun_event/image2.webp"
import diachun3 from "../../assets/images/Events/diachun_event/image3.webp"
import diachun4 from "../../assets/images/Events/diachun_event/image4.webp"
import diachun5 from "../../assets/images/Events/diachun_event/image5.webp"

import rotorcraft_flyer2 from "../../assets/images/Events/rotorcraft_workshop2/flyer.webp"
import workshop2_image1 from "../../assets/images/Events/rotorcraft_workshop2/image1.webp"
import workshop2_image2 from "../../assets/images/Events/rotorcraft_workshop2/image2.webp"
import workshop2_image3 from "../../assets/images/Events/rotorcraft_workshop2/image3.webp"
import workshop2_image4 from "../../assets/images/Events/rotorcraft_workshop2/image4.webp"

import robinson_flyer from "../../assets/images/Events/robinson_tour/flyer.webp"
import robinson_image1 from "../../assets/images/Events/robinson_tour/image1.webp"
import robinson_image2 from "../../assets/images/Events/robinson_tour/heli1.webp"
import robinson_image3 from "../../assets/images/Events/robinson_tour/heli2.webp"

import rotorcraft_flyer1 from "../../assets/images/Events/rotorcraft_workshop1/flyer.webp"
import workshop1_image1 from "../../assets/images/Events/rotorcraft_workshop1/image1.webp"
import workshop1_image2 from "../../assets/images/Events/rotorcraft_workshop1/image2.webp"
import workshop1_image3 from "../../assets/images/Events/rotorcraft_workshop1/image3.webp"


import { type CarouselApi } from "@/components/ui/carousel"


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
} from "@/components/ui/pagination"
import React from "react"
import EventCarousel from "./EventCarsouel"


export default function Events() {

 

  const events = [
      {
          title: "Rotorcraft Workshop #3",
          date: "February 2025",
          description: "In the third session of our Rotorcraft 101 Workshop Series, Professor Jacqueline Huynh led an insightful discussion on rotorcraft noise, aeroacoustics, and policy considerations for Advanced Air Mobility. Students explored rotor noise sources, mitigation strategies, and the impact of acoustics on future rotorcraft design.",
          images: [rotorcraft_flyer3, workshop3_image1, workshop3_image2, workshop3_image3, workshop3_image4, workshop3_image5, workshop3_image6],
      },
      {
          title: "Ben Diachun Speaker Event",
          date: "November 2024",
          description: "As a former executive at Scaled Composites, Pivotal, and Supernal, Ben Diachun has led teams to develop over 17 revolutionary aircraft and spacecraft. Ben delivered an insightful talk titled: “Builidng Your Career: A Guide for Future Aerospace Leaders at UC Irvine”, where he shared his extraordinary journey in aerospace, career tips for undergraduates, and the future of the industry. ",
          images: [diachun_flyer, diachun1, diachun2, diachun3, diachun4, diachun5]
      },
      {
          title: "Rotorcraft Workshop #2",
          date: "October 2024",
          description: "In this session of our Rotorcraft 101 Workshop Series, students explored the fundamentals of rotorcraft structural dynamics, covering flapping dynamics of rotor blades, rotor hub loads, and rotor vibration control. Led by Dr. Ryan Patterson, Aerostructures Engineer at Karem Aircraft, the workshop provided valuable insights into how engineers mitigate vibrations and design for structural efficiency in rotorcraft.",
          images: [rotorcraft_flyer2, workshop2_image2, workshop2_image3, workshop2_image4, workshop2_image1]
      },
      {
          title: "Robinson Helicopter Company Tour",
          date: "October 2024",
          description: "",
          images: [robinson_flyer, robinson_image1, robinson_image2, robinson_image3]
      },
      {
          title: "Rotorcraft Workshop #1",
          date: "October 2024",
          description: "In the kickoff session of our Rotorcraft 101 Workshop Series led by Dr. Frederick Tsai, Sr. Rotor Dynamics Engineer at Supernal, students gained a foundational introduction to rotorcraft engineering. The workshop covered a history of rotorcraft, momentum theory in hover, and flight mechanics including axial climb, descent, and forward flight. Key topics including axial flow states, swashplates, collective and cyclic control, and ground resonance were also introduced. ",
          images: [rotorcraft_flyer1, workshop1_image1, workshop1_image2, workshop1_image3]
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
                      <PaginationLink href="/events/1" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                      <PaginationLink href="/events/2">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                      <PaginationLink href="/events/3">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                      <PaginationNext href="/events/2"/>
                  </PaginationItem>
              </PaginationContent>
          </Pagination>
      </div>
  );
}
