
import TeamCard from "../../components/TeamCard";
import lucas from "../../assets/images/Team/lucas_park.webp";
import gina from "../../assets/images/Team/gina_kim.webp";
import addison from "../../assets/images/Team/addison_rushing.jpg";
import zeeshaan from "../../assets/images/Team/zeeshaan_adamjee.avif";
import nishali from "../../assets/images/Team/nishali_desai.avif";
import matthew from "../../assets/images/Team/matthew_rea.jpg";
import brycen from "../../assets/images/Team/brycen_santos.webp";
import sarghi from "../../assets/images/Team/sarghi_kamboj.webp";
import nicole from "../../assets/images/Team/nicole_nardi.jpg";
import ashley from "../../assets/images/Team/ashley_anyanwu.jpeg"
import tyler from "../../assets/images/Team/tyler_tran.jpeg"
import zara from "../../assets/images/Team/zarnigor_sodikova.webp"

export default function TeamSectionFull(){
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
        <div className="flex flex-col justify-center items-center w-full space-y-10 sm:p-16 md:p-16 lg:p-32 max-w-screen-2xl mx-auto"> 
            <h1 className="text-4xl font-bold text-[#C30D3B]">Meet the Team</h1>
    
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-8 w-full p-4">
                {members.map((member) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
    
}

