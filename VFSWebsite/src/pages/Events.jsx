import Event from "./EventSections/EventPage1.jsx";
import Footer from "../components/Footer";

export default function Events() {
    return (
        <div>
            <div className="max-w-7xl mx-auto my-10">
                {/* Past Events Heading */}
                <h1 className="text-6xl font-extrabold pl-16 pt-8">Past Events</h1>
                <div>
                    <Event />
                </div>
            </div>
            <Footer/>

        </div>

    );
}