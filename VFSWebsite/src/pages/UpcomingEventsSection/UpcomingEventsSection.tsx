
import netowrking_flyer from "../../../src/assets/Events/upcoming_events/panelflight.png"

import EventCarousel from "../EventSections/EventCarsouel"
import StripeCheckout from "../HomeSections/StripeCheckout"

export default function UpcomingEventSection() {

  const events = [
      {
          title: "Aerospace Career Flight Path ",
          date: "May 14, 2025",
          description: "The Vertical Flight Society at UCI is thrilled to announce an exclusive aerospace career panel featuring distinguished industry professionals! This engaging session will provide valuable insights into aerospace career trajectories, from early-career positions to executive leadership roles. Join us to learn from and connect with experienced panelists who will share their career journeys, industry tips, and strategies for success.",
          images: [netowrking_flyer],
      },
  ];

  return (
<div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16 text-base sm:text-lg md:text-[1.15rem] leading-relaxed">
  <h1 className="text-3xl sm:text-5xl font-extrabold text-center sm:text-left my-12">
    Upcoming Events
  </h1>

  {events.map((event, index) => (
  <div className="px-4 sm:px-8 lg:px-16">
    <div
      key={index}
      className={`flex flex-col-reverse md:flex-row ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      } gap-6 md:gap-12 items-center`}
    >
      {/* Description */}
      <div className="md:w-1/2 w-full">
        <div className="space-y-4">
          <h1 className="text-[#C30D3B] font-bold text-2xl sm:text-3xl md:text-4xl">
            {event.title}
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold">{event.date}</h2>
          <h2 className="text-xl sm:text-2xl font-semibold">Location: ISEB 1010</h2>
          <h2 className="text-xl sm:text-2xl font-semibold">Time: 5:00 - 6:30 PM</h2>

          <p>{event.description}</p>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        {event.images?.length > 0 && <EventCarousel images={event.images} />}
      </div>
    </div>
  </div>
))}


  <div className="flex flex-col pt-12 items-center">
    <h1 className = "text-3xl sm:text-4xl font-extrabold text-center sm:text-left">Purchase Your Tickets Below</h1>
    <StripeCheckout />
  </div>
</div>


  );
}