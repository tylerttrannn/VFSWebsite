import React from "react";
import Plane from "../../assets/images/plane.jpg";
import TeamCard from "../../components/TeamCard.jsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function TeamSection() {
    const members = [
        {
            id: 1,
            name: "Lucas Park",
            position: "President & Founder",
            major: "Aerospace Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_456fd8416d25472f9b60b8ccb56aef74~mv2.jpeg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d.jpeg",
        },
        {
            id: 2,
            name: "Gina Kim",
            position: "Vice President",
            major: "Aerospace Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_6ba5d90f23514ed798fdfbef163717c5~mv2.jpg/v1/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ginaheadshot.jpg",
        },
        {
            id: 3,
            name: "Addison Rushing",
            position: "Treasurer",
            major: "Mechanical Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_8ee3f992aed44717b6650de99470733e~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_37_21.png",
        },
        {
            id: 4,
            name: "Zeeshaan Adamjee",
            position: "Public Relations",
            major: "Mechanical Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_e80068a4603641abbf829a3a420b0e34~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_39_10.png",
        },
        {
            id: 6,
            name: "Nishali Desai",
            position: "Corporate Outreach",
            major: "Aerospace Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_dbca097b259a41d69efcf52098328310~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_32_48.png",
        },
        {
            id: 7,
            name: "Matthew Rea",
            position: "Membership Chair",
            major: "Aerospace Engineering",
            picture:
                "https://media.licdn.com/dms/image/v2/D4D03AQFz3Mfr3SiGZw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685237387750?e=1744243200&v=beta&t=urThhkso9NoSbrh9zaPsB_30t0er1CtfHzwyZDpU4C8",
        },
        {
            id: 8,
            name: "Brycen Santos",
            position: "Treasury Intern",
            major: "Mechanical Engineering",
            picture:
                "https://media.discordapp.net/attachments/1331367915034906796/1335015923593248788/PXL_20240701_2134261062.jpg?ex=67a144f7&is=679ff377&hm=c90742b6fb97a0fff0ad8f42bb13e441c327474fe55854a7cec0768da08aadc9&=&format=webp&width=612&height=648",
        },
        {
            id: 9,
            name: "Sarghi Kamboj",
            position: "PR Intern",
            major: "Aerospace Engineering",
            picture:
                "https://media.discordapp.net/attachments/1331367915034906796/1335015923593248788/PXL_20240701_2134261062.jpg?ex=67a144f7&is=679ff377&hm=c90742b6fb97a0fff0ad8f42bb13e441c327474fe55854a7cec0768da08aadc9&=&format=webp&width=612&height=648",
        },
        {
            id: 8,
            name: "Nicole Nardi",
            position: "VP Intern",
            major: "Aerospace Engineering",
            picture:
                "https://media.licdn.com/dms/image/v2/D5603AQGUHAG0M-0afQ/profile-displayphoto-shrink_400_400/B56ZQ8rlpdHIAo-/0/1736184857129?e=1744243200&v=beta&t=R_97Cz9i45M4vmQEOC7XY_886pb3ejYQN81G5XX9WdU",
        },
    ];
    return (
        <div className="relative h-[32rem]">
            <div className="relative w-full min-h-[20rem] md:h-[32rem]">
                <img
                    src={Plane}
                    alt="Plane in clouds"
                    className="w-screen h-[32rem] object-cover"
                />
                {/* Text Overlay */}
                <div
                    className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-black gap-10">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">Meet the Team</h1>
                    <Carousel
                        opts={{align: "start"}}
                        className="w-full max-w-5xl">
                        <CarouselContent className="flex gap-4">
                            {members.map((member) => (
                                <CarouselItem
                                    key={member.id}
                                    className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0 px-2"
                                >
                                    <TeamCard member={member}/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}