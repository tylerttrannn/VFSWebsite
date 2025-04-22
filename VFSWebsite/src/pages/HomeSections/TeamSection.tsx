import Plane from "../../assets/images/plane.jpg";
import TeamCard from "../../components/TeamCard.jsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import lucas from "../../assets/images/Team/lucas_park.webp"
import gina from "../../assets/images/Team/gina_kim.webp"
import addison from "../../assets/images/Team/addison_rushing.jpg"
import zeeshaan from "../../assets/images/Team/zeeshaan_adamjee.avif"
import nishali from "../../assets/images/Team/nishali_desai.avif"
import matthew from "../../assets/images/Team/matthew_rea.jpg"
import brycen from "../../assets/images/Team/brycen_santos.webp"
import sarghi from "../../assets/images/Team/sarghi_kamboj.webp"
import nicole from "../../assets/images/Team/nicole_nardi.jpg"
import ashley from "../../assets/images/Team/ashley_anyanwu.jpeg"
import tyler from "../../assets/images/Team/tyler_tran.jpeg"
import zara from "../../assets/images/Team/zarnigor_sodikova.webp"

export default function TeamSection() {
    const members = [
        {
            id: 1,
            name: "Lucas Park",
            position: "President & Founder",
            major: "Aerospace Engineering",
            picture: lucas
        },
        {
            id: 2,
            name: "Gina Kim",
            position: "Vice President",
            major: "Aerospace Engineering",
            picture:gina
        },
        {
            id: 3,
            name: "Addison Rushing",
            position: "Treasurer",
            major: "Mechanical Engineering",
            picture: addison

        },
        {
            id: 4,
            name: "Zeeshaan Adamjee",
            position: "Public Relations",
            major: "Mechanical Engineering",
            picture: zeeshaan
        },
        {
            id: 6,
            name: "Nishali Desai",
            position: "Corporate Outreach",
            major: "Aerospace Engineering",
            picture: nishali

        },
        {
            id: 7,
            name: "Matthew Rea",
            position: "Membership Chair",
            major: "Aerospace Engineering",
            picture:
                matthew},
        {
            id: 8,
            name: "Brycen Santos",
            position: "Treasury Intern",
            major: "Mechanical Engineering",
            picture:
                brycen},
        {
            id: 9,
            name: "Sarghi Kamboj",
            position: "PR Intern",
            major: "Aerospace Engineering",
            picture:
                sarghi},
        {
            id: 10,
            name: "Nicole Nardi",
            position: "VP Intern",
            major: "Aerospace Engineering",
            picture:nicole
        },
        {
            id: 11,
            name: "Ashley Anyanwu",
            position: "Web Developer",
            major: "Software Engineering",
            picture:ashley
        },
        {
            id: 12,
            name: "Tyler Tran",
            position: "Web Developer",
            major: "Computer Science",
            picture:tyler
        },
        {
            id: 13,
            name: "Zarnigor Sodikova",
            position: "Executive Chair",
            major: "Biomedical Engineering",
            picture: zara
        }
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
                    className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-black gap-10 ">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">Meet the Team</h1>
                    <Carousel
                        opts={{align: "start"}}
                        className="w-full max-w-5xl">
                        <CarouselContent className="ml-5 flex gap-4">
                            {members.map((member) => (
                                <CarouselItem
                                    key={member.id}
                                    className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0 px-2"
                                >
                                    <TeamCard member={member}/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className ="hidden sm:block" />
                        <CarouselNext className ="hidden sm:block" />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}