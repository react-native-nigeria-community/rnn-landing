import React from "react";
import team1 from "../assets/rnnTeam1.jpg";
import team2 from "../assets/rnnTeam2.jpeg";
import team3 from "../assets/rnnTeam3.png";
import team4 from "../assets/rnnTeam4.png";

const teamMembers = [
  {
    img: team3,
    name: "Mishael Akinyemi",
    role: "Co-founder & Organizer",
  },
  {
    img: team2,
    name: "Okikioluwa Shokunbi",
    role: "Event Managers",
  },
  {
    img: team4,
    name: "Edmund Ekott",
    role: "Media & Communication Lead",
  },
];

const Team = () => {
  return (
    <section className="py-10 px-4 sm:px-[70px] text-white flex flex-col gap-20">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">
        <div className="flex flex-col items-start text-center lg:text-left gap-6 w-full lg:w-1/2">
          <h1 className="text-white text-center lg:text-left text-4xl font-semibold ">
            Meet the Team Behind React <br /> Native Nigeria
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:max-w-full ">
            Our team is a dedicated group of React Native enthusiasts,
            developers, and community leaders committed to fostering 
            learning, collaboration, and innovation. We work together to 
            organize events, create valuable resources, and support 
            developers at all levels.
          </p>

          <button 
            className="w-full inline-flex justify-center items-center whitespace-nowrap lg:w-[70%] px-8 py-3 rounded-md text-white bg-[#00B4D8] hover:bg-white hover:text-black transition duration-300 ease-in"
          >
            <a
              href="https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              View All Team
            </a>
          </button>
        </div>

        <div className="w-full lg:w-[40%]">
          <img
            src={team1}
            alt="Core React Native Nigeria Team"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-2 text-center">
            <p className="font-semibold text-lg">Oluwatobi Shokunbi</p>
            <p className="text-sm text-gray-300">Founder & Lead Organizer</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 lg:gap-8">
  {teamMembers.map(({ img, name, role }, index) => (
    <div key={index} className="w-full sm:w-1/3">
      <div className="h-80 overflow-hidden rounded-lg"> {/* fixed height container */}
        <img
          src={img}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-2 text-center">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-300">{role}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default Team;
