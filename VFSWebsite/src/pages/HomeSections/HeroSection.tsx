import HeroImage from "../../assets/images/hero.webp";
import CustomLogo from "../../components/CustomLogo.jsx";

export default function HeroSection() {
    return (
        <div className="relative w-full h-[26rem] flex">
            {/* Background Image */}
            <img
                src={HeroImage}
                alt="Spring Career Dev Night Image"
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white gap-4 px-4 text-center">
                <CustomLogo />
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    Welcome to the Vertical Flight Society at UCI
                </h1>
                <p className="text-base sm:text-lg md:text-3xl md:max-w-4xl mx-auto font-light">
                    A hub for all engineers at UCI to explore vertical flight technology and aerospace.
                </p>
            </div>
        </div>
    );
}
