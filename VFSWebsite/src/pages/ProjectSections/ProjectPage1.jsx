import EventCarousel from "../EventSections/EventCarsouel";

import dbvf_1 from "../../assets/images/Projects/dbvf_comp/image1.jpg";
import dbvf_2 from "../../assets/images/Projects/dbvf_comp/image2.jpg";
import dbvf_3 from "../../assets/images/Projects/dbvf_comp/image3.jpg";
import dbvf_4 from "../../assets/images/Projects/dbvf_comp/image4.png";
import SDC from "../../assets/images/Projects/SDC.jpg"


const events = [
  {
    title: "DBVF Competition",
    description: `
This competition challenges university students to design, build, and operate an electric-powered remote-control vertical take-off and landing (VTOL) aircraft. 

The goal is to promote hands-on experience with eVTOL and advanced air mobility (AAM) technology, preparing the next generation of engineers and innovators in unmanned aircraft systems.
    `,
    images: [dbvf_1, dbvf_2, dbvf_3, dbvf_4],
  },
  {
    title: "Student Design Competition (SDC)",
    description: `
The Vertical Flight Society (VFS) Student Design Competition (SDC) is an annual aircraft design competition that challenges students to innovate and engineer cutting-edge vertical lift solutions. 

As the VFS at UCI Chapter, we proudly sponsor a team of undergraduate students to compete in this competition, providing them with the opportunity to apply their aerospace engineering knowledge to real-world design problems. 

Winning teams are awarded a cash stipend, as well as an invitation to present their designs at the Vertical Flight Society’s largest Annual Forum and Technology Display. The competition aims to encourage education and careers in vertical flight with rotating sponsorship between Airbus, The Boeing Company, Bell, Leonardo Helicopters, Sikorsky, a Lockheed Martin Co.; and US Army Research Lab. 

More information about the competition can be found below:  
<a href="https://vtol.org/awards-and-contests/student-design-competition" target="_blank" class="text-blue-500 underline">
VFS Student Design Competition
</a>
    `,
    images: [SDC],
  },
];

export default function ProjectPage() {
  return (
    <div>
      {events.map((event, i) => (
        <section key={i} className="flex flex-col items-center justify-center mx-auto pb-8 px-6 gap-10 mb-16 text-center">
          <EventCarousel images={event.images} className = "rounded-lg w-full md:h-[500px] h-[350px] object-contain"/>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl text-[#C30D3B] font-bold pb-5">
              {event.title}
            </h1>
            <p
              className="text-sm sm:text-md"
              dangerouslySetInnerHTML={{
                __html: event.description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
