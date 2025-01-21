import React from "react";
import HeroSection from "./HomeSections/HeroSection.jsx"
import MissionStatement from "./HomeSections/MissionStatement.jsx";
import ProjectSection from "./HomeSections/ProjectSection.jsx";
import TeamSection from "./HomeSections/TeamSection.jsx";
import NewsletterSection from "./HomeSections/NewsletterSection.jsx";
import Contact from "./Contact.jsx";

export default function Home(){
    return (
        <div>
            <HeroSection />
            <div className={"p-3"}></div>
            <MissionStatement />
            <ProjectSection />
            <TeamSection />
            <NewsletterSection/>
            <Contact/>
        </div>
    )
}