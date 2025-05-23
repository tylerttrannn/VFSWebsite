import Caden from "../../assets/images/member_quarter/caden.jpg";

export default function StudentQuarter() {
  const members = [
    {
      title: "Caden Chang - Spring 2025",
      image: Caden,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 text-base sm:text-lg md:text-[1.15rem] leading-relaxed space-y-16">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-[#C30D3B]">
        Member of the Quarter
      </h1>

      {members.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-8 md:gap-16`}
        >
          {/* Text */}
          <div className="md:w-1/2 w-full space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#C30D3B] text-center md:text-left">
              {member.title}
            </h2>
            <div className="space-y-4">
                <p>
                    VFS @ UCI would like to congratulate <strong>Caden Chang</strong> for being selected as Spring 2025’s Member of the Quarter!
                </p>
                <p>
                    He is a first-year aerospace engineering major and has been part of the club since Week 1 of the 2024 Fall Quarter.
                </p>
                <p>
                    He is currently a <strong>Propulsion and Power Systems</strong> subteam member for the <strong>Student Design Competition (SDC)</strong>, one of two project teams hosted under VFS @ UCI.
                </p>
                <p>
                    In addition to his position within VFS, Caden also serves as a Corporate Outreach Intern for the UCI branch of the American Institute of Aeronautics and Astronautics (AIAA).
                </p>
                <p>
                    Outside of academics, Caden enjoys planespotting, photography, basketball, and football.
                </p>
            </div>

          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={member.image}
              alt={member.title}
              className="rounded-2xl shadow-md max-w-full h-auto object-cover w-[550px] h-[650px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
