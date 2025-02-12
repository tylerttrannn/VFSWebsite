import React from "react";
import jeopardy from "../../assets/Events/upcoming_events/jeopardy_flyer.jpg"
export default function UpcomingEvents() {
    return (
        <div className={"py-5 bg-white flex flex-col text-center"}>
            <h1 className={"text-3xl pb-5 font-bold"}>Upcoming Events</h1>
            <div className="flex items-center text-start justify-center gap-5 sm:gap-10 border-y-2 p-4 border-black/20">
                <div className={"flex flex-col text-center"}>
                    {/*/ prevents the text from wrapping on smaller screens */}
                    <p className={"font-light whitespace-nowrap"}>5-7pm</p>
                    <h1 className={"font-bold text-3xl"}>30</h1>
                    <p>Jan</p>
                </div>
                <img src={jeopardy} alt="Jeopardy Night Flyer" className="w-[120px] sm:w-[100px] rounded-lg shadow-md"/>
                <div className="bg-gray-100 p-4 sm:w-auto">
                    <p className="text-sm sm:text-xl mb-2">
                        Bring your friends and your brain powers for an unforgettable night of jeopardy!
                    </p>
                    <p className="text-sm sm:text-xl">
                        <strong>Location:</strong> Engineering Gateway 3161
                    </p>
                </div>
            </div>
        </div>
    )
}