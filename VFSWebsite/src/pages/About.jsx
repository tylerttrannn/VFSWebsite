import vfslogo from "../assets/images/vfsatucilogo.webp";
import TeamSection from "./HomeSections/TeamSection.jsx";
import Plane from "../assets/images/plane.jpg";
import TeamCard from "../components/TeamCard.jsx";
import React from "react";

export default function About() {
    const members = [
        {
            id: 1,
            name: "Jane Doe",
            position: "President",
            major: "Aerospace Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_456fd8416d25472f9b60b8ccb56aef74~mv2.jpeg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d.jpeg",
        },
        {
            id: 2,
            name: "John Smith",
            position: "Vice President",
            major: "Mechanical Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_dbca097b259a41d69efcf52098328310~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_32_48.png",
        },
        {
            id: 3,
            name: "Alice Johnson",
            position: "Treasurer",
            major: "Aerospace Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_60f8c02ebb2542cfbd2fa094c11b03be~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_34_25.png",
        },
        {
            id: 4,
            name: "Alice Johnson",
            position: "Treasurer",
            major: "Civil Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_8ee3f992aed44717b6650de99470733e~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_37_21.png",
        },
        {
            id: 6,
            name: "Bob Brown",
            position: "Secretary",
            major: "Electrical Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_c5bc844244dc4ba394e095212d4f7703~mv2.jpeg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/g.jpeg",
        },
        {
            id: 7,
            name: "Bob Brown",
            position: "Secretary",
            major: "Electrical Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_e80068a4603641abbf829a3a420b0e34~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_39_10.png",
        },
        {
            id: 8,
            name: "Bob Brown",
            position: "Secretary",
            major: "Electrical Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_6ba5d90f23514ed798fdfbef163717c5~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ginaheadshot.jpg",
        },
    ];
    return (
        <div>
            {/* About Section */}
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto py-12 px-6">
                {/* Logo */}
                <img src={vfslogo} alt="VFS Logo" className="mb-10 w-72 h-auto"/>

                {/* Main Heading */}
                <h1 className="text-3xl font-bold text-[#C30D3B] mb-8">About Us</h1>

                {/* Text Content */}
                <div className="text-center text-md leading-relaxed text-gray-700">
                    <p>
                        The Vertical Flight Society is the world’s oldest and largest technical society dedicated to
                        enhancing the understanding of vertical flight technology. VFS is a non-profit, charitable
                        educational and technical organization. Since it was founded as the American Helicopter Society
                        (AHS) in 1943 — just as the first US helicopter was being put into service — the Society has
                        been the primary forum for the interchange of information on vertical flight technology.
                    </p>
                    <br/>
                    <p>
                        According to the Society Bylaws, the purpose of the Society is to "advance the theory and
                        practices of the science of vertical flight aircraft."
                    </p>
                    <br/>
                    <p>
                        In November 2022, the VFS Board of Directors approved updates to the VFS Vision and Mission
                        Statements, as well as a statement of the Goals & Supporting Initiatives underway by the
                        Society: <strong>2022 VFS Strategic Statements.</strong>
                    </p>
                </div>

                {/* Mission Section */}
                <div className="text-center mt-16">
                    <h2 className="text-[#C30D3B] font-bold text-3xl mb-6">Mission</h2>
                    <p className="text-md leading-relaxed text-gray-700  mx-auto">
                        Provide opportunity for technical data exchange and dissemination; promote awareness of vertical
                        flight capabilities, challenges, and development; engage in community outreach and advocate for
                        public policy consistent with the goals of the Society; leverage the technical base to explore
                        innovation; and foster a diverse and inclusive environment that promotes careers and
                        professional advancement in vertical flight.
                    </p>
                    <br/>
                    <p className="text-md leading-relaxed text-gray-700 mx-auto">
                        The Vertical Flight Society at UCI is dedicated to bridging the gap between undergraduate
                        engineering students and the professional aerospace industry, with a strong emphasis on vertical
                        flight technology. Collaborating closely with the VFS SoCal Chapter, they organize events such
                        as guest speakers, networking events, technical workshops, company tours, and participation in
                        student competitions. Founded in Spring 2023, the long-term goal is to establish strong
                        resources and opportunities for future engineering students interested in vertical flight
                        technology.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="relative h-screen">
                <img
                    src={Plane}
                    alt="Plane in clouds"
                    className="w-screen h-screen object-cover"
                />
                {/* Text Overlay */}
                <div
                    className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-black gap-10">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">Meet the Team</h1>
                    <div className={"grid grid-cols-4 gap-10"}>
                        {members.map((member) => (
                            <TeamCard member={member} />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}