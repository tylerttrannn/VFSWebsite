import rotocraft_workshop_4 from "../../assets/images/Events/James_Bechler_Rotorcraft_Workshop.webp"
export default function UpcomingEvents() {
    return (
        <div className={"py-5 bg-white flex flex-col text-center"}>
            <h1 className={"text-3xl pb-5 font-bold"}>Upcoming Events</h1>
            <div className="flex items-center text-start justify-center gap-5 sm:gap-10 border-y-2 p-4 border-black/20">
                <div className={"flex flex-col text-center"}>
                    <p className={"font-light whitespace-nowrap"}>6:30-8pm</p>
                    <h1 className={"font-bold text-3xl"}>09</h1>
                    <p>Apr</p>
                </div>
                <img src={rotocraft_workshop_4} alt="Jeopardy Night Flyer" className="w-[100px] rounded-lg shadow-md"/>
                <div className="bg-gray-100 p-2 md:max-w-4xl w-auto">
                    <p className="text-sm sm:text-xl mb-2">
                    Join James Bechler, Flight Simulation and Handling Qualities Engineer at Supernal, in the fourth session of our Rotorcraft 101 Workshop Series.
                    </p>
                    <p className="text-sm sm:text-xl">
                        <strong>Location:</strong> EG 3161
                    </p>
                </div>
            </div>
        </div>
    )
}