import vfslogo from "../assets/images/vfsatucilogo.webp";
import TeamSectionFull from "./AboutSections/TeamSectionFull.jsx";

export default function About() {
    return (
        <div>
            {/* About Section */}
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto py-16 px-6 sm:px-12">
                {/* Logo */}
                <img src={vfslogo} alt="VFS Logo" className="mb-10 w-96 h-auto" />

                {/* Main Heading */}
                <h1 className="text-4xl font-bold text-[#C30D3B] mb-8">About Us</h1>

                {/* Text Content */}
                <div className="text-center text-lg leading-relaxed text-gray-700">
                    <p>
                        The Vertical Flight Society is the world’s oldest and largest technical society dedicated to enhancing the understanding of vertical flight technology. VFS is a non-profit, charitable educational and technical organization. Since it was founded as the American Helicopter Society (AHS) in 1943 — just as the first US helicopter was being put into service — the Society has been the primary forum for the interchange of information on vertical flight technology.
                    </p>
                    <br />
                    <p>
                        According to the Society Bylaws, the purpose of the Society is to "advance the theory and practices of the science of vertical flight aircraft."
                    </p>
                    <br />
                </div>

                {/* Mission Section */}
                <div className="text-center mt-16">
                    <h2 className="text-[#C30D3B] font-bold text-4xl mb-6">Mission</h2>
                    <p className="text-lg leading-relaxed text-gray-700  mx-auto">
                        Provide opportunity for technical data exchange and dissemination; promote awareness of vertical flight capabilities, challenges, and development; engage in community outreach and advocate for public policy consistent with the goals of the Society; leverage the technical base to explore innovation; and foster a diverse and inclusive environment that promotes careers and professional advancement in vertical flight.
                    </p>
                    <br />
                    <p className="text-lg leading-relaxed text-gray-700 mx-auto">
                        The Vertical Flight Society at UCI is dedicated to bridging the gap between undergraduate engineering students and the professional aerospace industry, with a strong emphasis on vertical flight technology. Collaborating closely with the VFS SoCal Chapter, they organize events such as guest speakers, networking events, technical workshops, company tours, and participation in student competitions. Founded in Spring 2023, the long-term goal is to establish strong resources and opportunities for future engineering students interested in vertical flight technology.
                    </p>
                </div>
            </div>

            {/* Team Section */}
        <TeamSectionFull/>

        </div>
    );
}