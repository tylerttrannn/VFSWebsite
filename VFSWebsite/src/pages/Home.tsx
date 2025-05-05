import HeroSection from "./HomeSections/HeroSection.js"
import MissionStatement from "./HomeSections/MissionStatement.js";
import ProjectSection from "./HomeSections/ProjectSection.jsx";
import TeamSection from "./HomeSections/TeamSection.js";
import NewsletterSection from "./HomeSections/NewsletterSection.js";
import ContactSection from "./HomeSections/ContactSection.js";
import Divider from "../components/Divider.jsx";
import UpcomingEvents from "./HomeSections/UpcomingEvents.js";
import StripeCheckout from "./HomeSections/StripeCheckout";

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
