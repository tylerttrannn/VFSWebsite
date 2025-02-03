
import TeamCard from "../../components/TeamCard";

export default function TeamSectionFull(){
    const members = [
        {
            id: 1,
            name: "Lucas Park",
            position: "President",
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
            name: "Nishali Desai",
            position: "Corporate Outreach",
            major: "Aerospace Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_dbca097b259a41d69efcf52098328310~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_32_48.png",
        },

        {
            id: 4,
            name: "Addison Rushing",
            position: "Treasurer",
            major: "Mechanical Engineering",
            picture:
                "https://static.wixstatic.com/media/66ee95_8ee3f992aed44717b6650de99470733e~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_37_21.png",
        },
        {
            id: 5,
            name: "Zeeshaan Adamjee",
            position: "Public Relations",
            major: "Mechanical Engineering",
            picture:
            "https://static.wixstatic.com/media/66ee95_e80068a4603641abbf829a3a420b0e34~mv2.png/v1/fill/w_336,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-06-12%20at%2020_39_10.png",
        },



    ];

    return (
        <div className ="flex flex-col justify-center items-center w-full space-y-10 ">
            <h1 className = "text-4xl font-bold text-[#C30D3B]">Meet the Team</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full p-4">

            {members.map((member) => (
                <TeamCard key={member.id} member={member} />
            ))}
            </div>

        </div>


    );
      
      
}

