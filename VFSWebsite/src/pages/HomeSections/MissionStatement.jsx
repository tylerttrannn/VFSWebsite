import React from "react";
import VFSSymbol from "../../assets/images/vfs-symbol-small3.webp"

export default function MissionStatement() {
    return (
        <div className="relative h-[11rem]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6F0B27] from-10% to-red "></div>

            {/* Image */}
            <img
                src={VFSSymbol}
                alt="Vertical Flight Society Symbol"
                className="absolute inset-0 mx-auto my-auto w-[200px] h-[200px] object-contain z-10"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 gap-6 z-20">
                <p className="text-xs md:text-lg md:mx-10 text-center font-light">
                    The Vertical Flight Society at UCI is dedicated to bridging the gap between undergraduate
                    engineering students and the professional aerospace industry, with a strong emphasis on vertical
                    flight technology. Collaborating closely with the VFS SoCal Chapter, they organize events such as
                    guest speakers, networking events, technical workshops, company tours, and participation in student
                    competitions. Founded in Spring 2023, the long-term goal is to establish strong resources and
                    opportunities for future engineering students interested in vertical flight technology.
                </p>
            </div>
        </div>

    )
}