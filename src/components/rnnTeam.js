import React from 'react'
import team1 from '../assets/rnnTeam1.png';
import team2 from '../assets/rnnTeam2.png';
import team3 from '../assets/rnnTeam3.png';
import team4 from '../assets/rnnTeam4.png';

const Team = () => {
  return (
    <section className="flex flex-col gap-12 mt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 max-w-2xl">
               <div className="flex flex-col gap-4">
                 <h1 className="text-white text-3xl lg:text-5xl">Meet the Team Behind React Native Nigeria</h1>
                 <p className="text-white text-lg lg:text-2xl">Our team is a dedicated group of React Native enthusiasts, developers, and community leaders committed to fostering learning, collaboration, and innovation. We work together to organize events, create valuable resources, and support developers at all levels.</p>
               </div>
               <div className="bg-[#1681FE] py-3 px-8 items-center rounded-lg cursor-pointer w-fit hover:bg-blue-600">
                 <a href="https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn" target="_blank" rel="noopener noreferrer" className="text-white">View All Team</a>
               </div>
            
            </div>

            <img src={team1} alt="Team" className="w-full max-w-md rounded-lg object-cover"/>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:gap-6 gap-4">
            <img src={team2} alt="Team" className="w-full md:w-[30%] object-cover rounded-lg"/>
            <img src={team3} alt="Team" className="w-full md:w-[30%] object-cover rounded-lg"/>
            <img src={team4} alt="Team" className="w-full md:w-[30%] object-cover rounded-lg"/>
        </div>
    </section>
  )
}

export default Team;