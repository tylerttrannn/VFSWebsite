import image1 from "../../assets/Events/carrer.avif";
import image2 from "../../assets/Events/supernal.avif";
import image3 from "../../assets/Events/overair.avif";
import image4 from "../../assets/Events/jump_aero.avif";
import image5 from "../../assets/Events/nasa_speaker.avif";
import image6 from "../../assets/Events/puneet_singh.avif";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Events() {
  const events = [
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
      images: [image1, image2, image3]

    },
    {
      title: "Supernal Company Tour",
      date: "April 2024",
      description: `
VFS at UCI had the exciting opportunity to visit Supernal’s Waterworks
location and see the SA2 prototype up close. Our tour was hosted by
Samuel Im, a senior test evaluation certification lab engineer, who
provided us with comprehensive insights into the prototype.
`,
      images: [image2, image2, image3]
    },
    {
      title: "Overair Company Tour",
      date: "January 2024",
      description: `
UC Irvine students got an inside look at Overair, a local company
shaping the future of urban air mobility! VFS at UCI collaborated
with AIAA at UCI for this event and got to explore firsthand the
intersection of cutting-edge technology and transportation.

Special thanks to Puneet Singh and Mat Garcia for hosting our group
and sharing valuable insights into the industry and Butterfly aircraft!
`,
    images: [image3, image2, image3]
    },

    {
        title: "Jump Aero Speaker Event: Dr. Carl Dietrich",
        date: "January 2024",
        description: `
Carl is the Founder and CEO of Jump Aero where he and his team are developing a high-speed, all-electric, vertical takeoff and landing (eVTOL) aircraft to help first responders save lives. Prior to Jump Aero, Carl founded and led Terrafugia as CEO/CTO from inception in 2006 through acquisition by the Zhejiang Geely Holding Group in 2017. Carl spearheaded the development of the first integrated roadable aircraft capable of converting between flying and driving in less than 30 seconds. He established and ran a world-class R&D center for Terrafugia focused on the development of novel eVTOL configurations and business plans for the emerging Urban Air Mobility market.
  `,
    images: [image4, image2, image3]
      },

    {
      title: "NASA Speaker Event: Dr. Jason Cornelius",
      date: "October 2023",
      description: `
VFS at UCI hosted an Aerospace Career Development Night, featuring a
distinguished panel of executives and leaders from the local industry:
Axel Radermacher (Co-Founder, Head of Product at Odys Aviation), Jason
Holmstedt (Sr. Director, Technology and Innovation at Intellisense),
Jim Orbon (Sr. Program Manager, Anduril), and Professor Jacqueline
Huynh (Assistant Professor, MAE Department UCI). In addition, we were
honored to welcome the executive director of VFS, Angelo Collins and
VFS Western Region VP, Dr. Colin Theodore on our campus! Students learned
more about potential career opportunities in commercial, military, and academia.
`,
    images: [image5, image2, image3]

    },

    {
      title: "Overair Speaker Event: Dr. Puneet Singh",
      date: "May 2023",
      description: `
VFS at UCI had the honor of hosting Dr. Puneet Singh for our inaugural
speaker event. Dr. Singh gave an inspiring talk about his impressive career
and the emerging rotorcraft industry. He also shared insights into the eVTOL
industry and explained various key design decisions and capabilities of
Overair's Butterfly aircraft.
`,
    images: [image6, image2, image3]
    }
  ];

  return (
    <div className="space-y-2">
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
              <Carousel className="relative w-full max-w-[85%]">
                <CarouselContent>
                  {event.images.map((image, index) => (
                    <CarouselItem key={index} className="flex justify-center">
                      <img src={image} className="max-w-full rounded-lg" alt={`Slide ${index + 1}`} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/*modifying the styling of the buttons to make it more compact*/}
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  <CarouselPrevious className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center" />
                  <CarouselNext className="bg-gray-800/70 rounded-full p-2 hover:bg-gray-900 transition w-10 h-10 flex items-center justify-center" />
                </div>
              </Carousel>
            )}
          </div>


          {/* Description of Event */}
          <div className="md:w-1/2 flex flex-col justify-center p-10">
            <div className = "px-4">
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
    </div>
  );
}
