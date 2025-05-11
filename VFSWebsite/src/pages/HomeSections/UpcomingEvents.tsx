import rotocraft_workshop_4 from "../../assets/Events/upcoming_events/panelflight.png"
export default function UpcomingEvents() {
    return (
        <div className={"py-5 bg-white flex flex-col  border-y-2 "}>
            <h1 className={"text-3xl pb-5 font-bold text-center"}>Upcoming Events</h1>
            <div className="flex items-center text-start justify-center gap-5 sm:gap-10 p-4 border-black/20">
                <div className={"flex flex-col text-center"}>
                    <p className={"font-light whitespace-nowrap"}>5-6:30pm</p>
                    <h1 className={"font-bold text-3xl"}>14</h1>
                    <p>May</p>
                </div>
                <img src={rotocraft_workshop_4} alt="Jeopardy Night Flyer" className="w-[100px] rounded-lg shadow-md"/>
                <div className="bg-gray-100 p-2 md:max-w-4xl w-auto">
                    <p className="text-sm sm:text-xl mb-2">
                    Vertical Flight Society (VFS) @ UCI is thrilled to announce an exclusive aerospace career panel featuring distinguished industry professionals! This engaging session will provide valuable insights into aerospace career trajectories.

                    </p>
                    <p className="text-sm sm:text-xl">
                        <strong>Location:</strong> ISEB 1010
                    </p>
                </div>
            </div>
        </div>
    )
}