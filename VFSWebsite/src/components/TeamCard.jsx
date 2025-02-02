import React from "react";
export default function TeamCard({member}) {

    return (
            <div className="relative w-full aspect-[3.5/4]">
            <img
                src={member.picture}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div
                className="absolute bottom-0 left-0 right-0 w-full bg-opacity-90 p-4">
                <div className="bg-white bg-opacity-90 pl-3 py-2 flex flex-col items-start">
                    <p className="text-red text-lg font-bold">{member.name}</p>
                    <p className="text-grey text-sm font-semibold">{member.position}</p>
                    <p className="text-grey text-xs font-light">{member.major}</p>
                </div>
            </div>
        </div>
    );
}
