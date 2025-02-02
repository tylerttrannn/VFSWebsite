import React from "react";
import HeroImage from "../../assets/images/hero.webp"
import CustomLogo from "../../components/CustomLogo.jsx";

export default function HeroSection(){
    return (
        <div className="relative h-[26rem]">
            <img
                src={HeroImage}
                alt="Spring Career Dev Night Image"
                className="w-screen h-[26rem] object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white gap-6">
                <CustomLogo />
                <h1 className="text-4xl md:text-5xl font-bold">Welcome to the Vertical Flight Society at UCI</h1>
                <p className="text-lg md:text-3xl md:max-w-4xl mx-auto text-center font-light">A hub for all engineers at UCI to explore vertical flight technology and aerospace.</p>
            </div>
        </div>
    )
}