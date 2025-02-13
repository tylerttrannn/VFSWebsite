import kickoff from "../../assets/Events/kickoff_event/image1.webp"
import kickoff1 from "../../assets/Events/kickoff_event/image2.webp"

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
    PaginationPrevious,
} from "@/components/ui/pagination"


export default function Events1() {
    const events = [
        {
            title: "Kick-off Event ",
            date: "May 2023",
            description: `
The Kick-off Event celebrated the launch of the Vertical Flight Society (VFS) at UCI. It served as an introduction to the organization’s mission, bringing together students interested in vertical flight technology and aerospace innovation. This event provided an opportunity for members to connect, learn about upcoming projects, and get involved in shaping the future of VFS at UCI.
`,
            images: [kickoff1, kickoff]
        },
    ];

    return (
        <div className="space-y-2 max-w-7xl mx-auto pb-10">
        <h1 className="text-3xl sm:text-6xl font-extrabold text-center sm:text-left sm:ml-16 my-10">Past Events</h1>
        {events.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}  p-5 `}>

                <div className="md:w-1/2 w-full flex items-center justify-center relative pb-5">
                {event.images && event.images.length > 0 && (
                    <Carousel className="relative w-full sm:max-w-[65%]">
                    <CarouselContent>
                        {event.images.map((image, index) => (
                        <CarouselItem key={index} className="flex justify-center">
                            <img
                            src={image}
                            className="rounded-lg w-full sm:h-[320px] h-[350px] object-contain"
                            alt={`Slide ${index + 1}`}
                            />
                        </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Modifying the styling of the buttons to make them more compact */}
                    <div className="hidden sm:block absolute inset-0 flex justify-between items-center px-4">
                        <CarouselPrevious className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center" />
                        <CarouselNext className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center" />
                    </div>
                    </Carousel>
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
                        <PaginationPrevious href="/events/2"/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/events/1">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/events/2">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/events/3" isActive>3</PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </div>
    );
}
