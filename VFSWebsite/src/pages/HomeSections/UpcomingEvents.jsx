import gad from "../../assets/images/Events/upcoming_events/Gad_Speaker.png"
export default function UpcomingEvents() {
    return (
        <div className={"py-5 bg-white flex flex-col text-center"}>
            <h1 className={"text-3xl pb-5 font-bold"}>Upcoming Events</h1>
            <div className="flex items-center text-start justify-center gap-5 sm:gap-10 border-y-2 p-4 border-black/20">
            <div className="flex items-center text-start justify-center gap-5 sm:gap-10 border-y-2 p-4 border-black/20">
                <div className={"flex flex-col text-center"}>
                    {/*/ prevents the text from wrapping on smaller screens */}
                    <p className={"font-light whitespace-nowrap"}>6-7:30pm</p>
                    <h1 className={"font-bold text-3xl"}>25</h1>
                    <p>Feb</p>
                </div>
                <img src={gad} alt="Jeopardy Night Flyer" className="w-[100px] rounded-lg shadow-md"/>
                <div className="bg-gray-100 p-2 sm:w-auto">
                    <p className="text-sm sm:text-xl mb-2">
                    Join Gad Shaanan, CEO of Unmanned Aerospace, to learn about the GH-4, a simple, lightweight VTOL gyrocopter.
                    </p>
                    <p className="text-sm sm:text-xl">
                        <strong>Location:</strong> ISEB 1010 
                    </p>
                </div>
            </div>
        </div>
    )
}