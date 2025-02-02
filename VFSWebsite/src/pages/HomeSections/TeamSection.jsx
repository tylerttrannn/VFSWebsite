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
        <div className="relative h-[32rem]">
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
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-5xl"
                >
                    <CarouselContent className="flex gap-4">
                        {members.map((member) => (
                            <CarouselItem
                                key={member.id}
                                className="basis-1/4 flex-shrink-0 px-2"
                            >
                                <TeamCard member={member} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
