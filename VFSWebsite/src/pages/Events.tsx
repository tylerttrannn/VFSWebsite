import Event from "./EventSections/EventPage1";

export default function Events() {
    return (
        <div>
            <div className="max-w-7xl mx-auto ">
                {/* Past Events Heading */}
                <h1 className="text-6xl font-extrabold pl-16 my-10">Past Events</h1>
                <div>
                    <Event />
                </div>
            </div>


        </div>

    );
}