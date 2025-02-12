import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import dbvf_1 from "../../assets/Projects/dbvf_comp/image1.jpg";
import dbvf_2 from  "../../assets/Projects/dbvf_comp/image2.jpg";
import dbvf_3 from  "../../assets/Projects/dbvf_comp/image3.jpg";
import dbvf_4 from  "../../assets/Projects/dbvf_comp/image4.png";


const events = [
  {
    title: "DBVF Competition",
    description: `
      This competition challenges university students to design, build,
      and operate an electric-powered remote-control vertical take-off and
      landing (VTOL) aircraft. The goal is to promote hands-on experience
      with eVTOL and advanced air mobility (AAM) technology, preparing the
      next generation of engineers and innovators in unmanned aircraft
      systems.
    `,
    images: [dbvf_1, dbvf_2, dbvf_3, dbvf_4], 
  },
  {
    title: "Student Design Competition (SDC)",
    description: `
The Vertical Flight Society (VFS) Student Design Competition (SDC) is an annual aircraft design competition that challenges students to innovate and engineer cutting-edge vertical lift solutions. As the VFS at UCI Chapter, we proudly sponsor a team of undergraduate students to compete in this competition, providing them with the opportunity to apply their aerospace engineering knowledge to real-world design problems. 

Winning teams are awarded a cash stipend, as well as an invitation to present their designs at the Vertical Flight Society’s largest Annual Forum and Technology Display. The competition aims to encourage education and careers in vertical flight with rotating sponsorship between Airbus, The Boeing Company, Bell, Leonardo Helicopters, Sikorsky, a Lockheed Martin Co.; and US Army Research Lab. More information about the comeptition can be found below: 
https://vtol.org/awards-and-contests/student-design-competition 

    `,
    images: []
  },
];

export default function ProjectPage() {
  return (
    <div>
      {events.map((event, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center max-w-6xl mx-auto pb-8 px-6 gap-10 text-center"
        >
          {event.images.length > 1 ? (
            <Carousel className="relative w-full max-w-[85%]">
              <CarouselContent>
                {event.images.map((image, imgIndex) => (
                  <CarouselItem key={imgIndex} className="flex justify-center">
                    <img
                      src={image}
                      className="max-w-full rounded-lg"
                      alt={`Slide ${imgIndex + 1}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Navigation Buttons */}
              <div className="absolute inset-0 flex justify-between items-center px-4">
                <CarouselPrevious className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center" />
                <CarouselNext className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center" />
              </div>
            </Carousel>
          ) : (
            
            // displays single image for events with only one image
            <img
              src={event.images[0]}
              className="max-w-full rounded-lg"
              
            />
          )}

          <h1 className="text-4xl text-[#C30D3B] font-bold">{event.title}</h1>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}
