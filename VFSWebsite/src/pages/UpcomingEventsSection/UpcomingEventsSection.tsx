import React from "react";
import EventCarousel from "../EventSections/EventCarsouel";

interface Event {
  title: string;
  date?: string;
  description?: string;
  images?: string[];
}

const UpcomingEventSection: React.FC = () => {
  const events: Event[] = [
    // {
    //   title: "Aerospace Career Panel",
    //   date: "May 28, 2025",
    //   description:
    //     "Join us for an engaging discussion with professionals from the aerospace industry",
    //   images: [networking_flyer],
    // },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 space-y-16">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-[#C30D3B]">
        Upcoming Events
      </h1>

      {events.length === 0 ? (
        <div className="text-center text-xl sm:text-2xl text-gray-500 py-12">
          No upcoming events at the moment. Check back soon!
        </div>
      ) : (
        events.map((event, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col-reverse md:flex-row
              ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}
              gap-8 md:gap-16 items-center
              border rounded-xl shadow-lg p-6 bg-white
            `}
          >
            {/* Text */}
            <div className="md:w-1/2 w-full space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#C30D3B]">
                {event.title}
              </h2>
              {event.date && (
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600">
                  {event.date}
                </h3>
              )}
              {event.description && (
                <p className="text-gray-700">{event.description}</p>
              )}
              {/* Example: RSVP button */}
              {/* <StripeCheckout eventId={...} /> */}
            </div>

            {/* Image or Carousel */}
            <div className="md:w-1/2 w-full flex justify-center">
              {event.images && event.images.length > 0 ? (
                <EventCarousel images={event.images} />
              ) : (
                <div className="w-[300px] h-[200px] flex items-center justify-center bg-gray-100 rounded-lg text-gray-400 text-sm">
                  No image available
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default UpcomingEventSection;
