import HeroSection from "./HomeSections/HeroSection.jsx"
import MissionStatement from "./HomeSections/MissionStatement.jsx";
import ProjectSection from "./HomeSections/ProjectSection.jsx";
import TeamSection from "./HomeSections/TeamSection.jsx";
import NewsletterSection from "./HomeSections/NewsletterSection.jsx";
import ContactSection from "./HomeSections/ContactSection.jsx";
import Divider from "../components/Divider.jsx";
import UpcomingEvents from "./HomeSections/UpcomingEvents.jsx";
export default function Home() {
    return (
        <div className="">
            <HeroSection/>
            <Divider/>
            <MissionStatement/>
            <ProjectSection/>
            <TeamSection/>
            <Divider/>
            <UpcomingEvents/>
            <Divider/>
            <NewsletterSection/>
            <ContactSection/>
        </div>
    );
}
