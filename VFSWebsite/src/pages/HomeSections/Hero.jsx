import React from "react";
import HeroImage from "../../assets/images/hero.webp"
import CustomLogo from "../../components/CustomLogo.jsx";

export default function Hero(){
    return (
        <div className="relative w-screen h-[28rem]">
            <img
                src={HeroImage}
                alt="Spring Career Dev Night Image"
                className="w-screen h-[28rem] object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white gap-6">
                <CustomLogo />
                <h1 className="text-4xl md:text-5xl font-bold">Welcome to the Vertical Flight Society at UCI</h1>
                <p className="text-lg md:text-3xl md:max-w-2xl mx-auto text-center">A hub for all engineers at UCI to explore vertical flight technology and aerospace.</p>
            </div>
        </div>
    )
}