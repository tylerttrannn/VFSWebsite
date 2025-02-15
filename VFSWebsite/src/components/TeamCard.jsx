export default function TeamCard({ member }) {
    return (
        <div className="relative w-full aspect-[4/4] sm:aspect-[4/5] md:aspect-[3/4]">
            <img
                src={member.picture}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 w-full bg-opacity-80 sm:bg-opacity-90 p-2 sm:p-4">
                <div className="bg-white bg-opacity-80 sm:bg-opacity-90 px-2 py-1 sm:pl-3 sm:py-2 flex flex-col items-start">
                    <p className="text-red text-sm sm:text-lg font-bold">{member.name}</p>
                    <p className="text-grey text-xs sm:text-sm font-semibold">{member.position}</p>
                    <p className="text-grey text-[10px] sm:text-xs font-light">{member.major}</p>
                </div>
            </div>
        </div>
    );
}
