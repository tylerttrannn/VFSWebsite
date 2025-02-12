import React from "react";
import VFSSymbol from "../../assets/images/vfs-symbol-small3.webp"

export default function MissionStatement() {
    return (
        <div className="relative h-[11rem]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6F0B27] from-10% to-red "></div>

            {/* Image */}
      

            {/* Text Overlay  pad that to the top */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 gap-6 z-20 max-w-5xl mx-auto">

                <p className="text-xs md:text-lg md:mx-10 text-center font-light">
                Our mission is to provide undergraduate students with meaningful professional development opportunities in vertical flight technology through events, workshops, and competition experience.
                </p>
            </div>
        </div>

    )
}