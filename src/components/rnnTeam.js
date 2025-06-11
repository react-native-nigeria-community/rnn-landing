import React from 'react'
import team1 from '../assets/rnnTeam1.png';
import team2 from '../assets/rnnTeam2.png';
import team3 from '../assets/rnnTeam3.png';
import team4 from '../assets/rnnTeam4.png';

const Team = () => {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-20 mt-16 md:mt-20 lg:mt-24 px-4 sm:px-8 md:px-12 lg:px-[51px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2 max-w-none lg:max-w-2xl">
               <div className="flex flex-col gap-4 md:gap-6">
                 <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                   Meet the Team Behind React Native Nigeria
                 </h1>
                 <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                   Our team is a dedicated group of React Native enthusiasts, developers, and community leaders committed to fostering learning, collaboration, and innovation. We work together to organize events, create valuable resources, and support developers at all levels.
                 </p>
               </div>
               
               <button className="bg-[#1681FE] py-3 px-6 md:px-8 lg:px-10 items-center rounded-lg cursor-pointer w-fit hover:bg-blue-600 transition-colors duration-200">
                 <a 
                   href="https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-white text-sm md:text-base lg:text-lg font-medium"
                 >
                   View All Team
                 </a>
               </button>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img 
                  src={team1} 
                  alt="React Native Nigeria Team" 
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg object-cover aspect-[4/5] lg:aspect-auto"
                />
            </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 lg:gap-8">
            <div className="w-full sm:w-1/3">
                <img 
                  src={team2} 
                  alt="Team Member" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg"
                />
            </div>
            <div className="w-full sm:w-1/3">
                <img 
                  src={team3} 
                  alt="Team Member" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg"
                />
            </div>
            <div className="w-full sm:w-1/3">
                <img 
                  src={team4} 
                  alt="Team Member" 
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg"
                />
            </div>
        </div>
    </section>
  )
}

export default Team;