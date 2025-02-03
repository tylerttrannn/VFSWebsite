import React from "react";
import jeopardy from "../../assets/Events/upcoming_events/jeopardy_flyer.jpg"
export default function UpcomingEvents() {
    return (
        <div className={"py-5 bg-white flex flex-col text-center"}>
            <h1 className={"text-3xl pb-5 font-bold"}>Upcoming Events</h1>
            <div className={"flex items-center text-start justify-center gap-10 border-y-2 border-black/20"}>
                <div className={"flex flex-col text-center"}>
                    <p className={"font-light "}>5-7pm</p>
                    <h1 className={"font-bold text-3xl"}>30</h1>
                    <p>Jan</p>
                </div>
                <img src={jeopardy} alt="Jeopardy Night Flyer" className="w-[100px]"/>
                <div>
                    <p className={"text-lg"}>Bring your friends and your brain powers for an unforgettable night of jeopardy!</p>
                    <p className={"text-lg"}><strong>Location:</strong> Engineering Gateway 3161</p>
                </div>
            </div>
        </div>
    )
}