import careerFlyer from "../../assets/Events/career_night/flyer.webp"
import career1 from "../../assets/Events/career_night/carrer.avif"
import career2 from "../../assets/Events/career_night/image2.webp"
import career3 from "../../assets/Events/career_night/image3.webp"
import career4 from "../../assets/Events/career_night/image4.webp"
import career5 from "../../assets/Events/career_night/image5.webp"
import career6 from "../../assets/Events/career_night/image1.webp"

import diachun_flyer from "../../assets/Events/diachun_event/flyer.webp"
import diachun1 from "../../assets/Events/diachun_event/image1.webp"
import diachun2 from "../../assets/Events/diachun_event/image2.webp"
import diachun3 from "../../assets/Events/diachun_event/image3.webp"
import diachun4 from "../../assets/Events/diachun_event/image4.webp"
import diachun5 from "../../assets/Events/diachun_event/image5.webp"

import rotorcraft_flyer2 from "../../assets/Events/rotorcraft_workshop2/flyer.webp"
import workshop2_image1 from "../../assets/Events/rotorcraft_workshop2/image1.webp"
import workshop2_image2 from "../../assets/Events/rotorcraft_workshop2/image2.webp"
import workshop2_image3 from "../../assets/Events/rotorcraft_workshop2/image3.webp"
import workshop2_image4 from "../../assets/Events/rotorcraft_workshop2/image4.webp"

import robinson_flyer from "../../assets/Events/robinson_tour/flyer.webp"
import robinson_image1 from "../../assets/Events/robinson_tour/image1.webp"
import robinson_image2 from "../../assets/Events/robinson_tour/heli1.webp"
import robinson_image3 from "../../assets/Events/robinson_tour/heli2.webp"

import rotorcraft_flyer1 from "../../assets/Events/rotorcraft_workshop1/flyer.webp"
import workshop1_image1 from "../../assets/Events/rotorcraft_workshop1/image1.webp"
import workshop1_image2 from "../../assets/Events/rotorcraft_workshop1/image2.webp"
import workshop1_image3 from "../../assets/Events/rotorcraft_workshop1/image3.webp"

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
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


export default function Events() {
  const events = [
      {
          title: "Guest Speaker Event (Ben Diachun)",
          date: "November 2024",
          description: "",
          images: [diachun_flyer, diachun1, diachun2, diachun3, diachun4, diachun5]
      },
      {
          title: "Rotorcraft Workshop #2",
          date: "October 2024",
          description: "",
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
          description: "",
          images: [rotorcraft_flyer1, workshop1_image1, workshop1_image2, workshop1_image3]
      },
    {
      title: "Spring Career Development Night",
      date: "May 2024",
      description: `
VFS at UCI hosted an Aerospace Career Development Night,
featuring a distinguished panel of executives and leaders
from the local industry: Axel Radermacher (Co-Founder, Head
of Product at Odys Aviation), Jason Holmstedt
(Sr. Director, Technology and Innovation at Intellisense),
Jim Orbon (Sr. Program Manager, Anduril), and Professor
Jacqueline Huynh (Assistant Professor, MAE Department UCI).
In addition, we were honored to welcome the executive director
of VFS, Angelo Collins and VFS Western Region VP, Dr. Colin
Theodore on our campus! Students learned more about potential
career opportunities in commercial, military, and academia.
`,
      images: [careerFlyer, career1, career2, career3, career4, career5, career6]

    }
  ];

  return (
      <div className="space-y-2 max-w-7xl mx-auto">
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
