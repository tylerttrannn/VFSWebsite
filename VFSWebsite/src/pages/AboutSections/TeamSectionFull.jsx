
import TeamCard from "../../components/TeamCard";

export default function TeamSectionFull(){
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
                "https://media.discordapp.net/attachments/1331367915034906796/1335015923593248788/PXL_20240701_2134261062.jpg?ex=67a33f37&is=67a1edb7&hm=006ecfb2fbad4be5dd34296bc5ae41c883ce930ad2c0356f2b450b068f9463a6&=&format=webp&width=612&height=648",
        },
        {
            id: 9,
            name: "Sarghi Kamboj",
            position: "PR Intern",
            major: "Aerospace Engineering",
            picture:
                "https://media.discordapp.net/attachments/1336604810631450624/1336605870338998303/IMG_7960.jpg?ex=67acfc78&is=67abaaf8&hm=b6604818e3f87bd4d2caca9feb6b97035897c3fc10fa35e341953f1091224954&=&format=webp&width=541&height=650",
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

