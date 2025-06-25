import React from 'react'
import team1 from '../assets/rnnTeam1.png';
import team2 from '../assets/rnnTeam2.png';
import team3 from '../assets/rnnTeam3.png';
import team4 from '../assets/rnnTeam4.png';
import en from '../config/language/en';

const Team = () => {

  return (
    <section className="flex flex-col gap-12 mb-0 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
     
   <section className=' ml-10 mr-10 mt-16 md:mt-20 lg:mt-24 px-4 sm:px-8 md:px-12 flex items-center justify-center grid-cols-2 gap-10' >
        <div className=''>
         
          <h1 className="text-white text-[48px] font-base leading-[100%] whitespace-nowrap">
          {en.TEAM.title1} <br /> {en.TEAM.title2}
          </h1>
          <p className='text-white mt-5 mb-6 text-[24px] leading-[120%] whitespace-nowrap'>
              Our team is a dedicated group of React Native enthusiasts,<br/>
              developers, and community leaders committed to fostering<br/>
              learning, collaboration, and innovation. We work together to<br/>
              organize events, create valuable resources, and support<br/>
              developers at all levels.
          </p>

             <button className='items-center px-30 py-3 cursor-pointer bg-blue-500 rounded-md text-white  text-500 bg-[#00B4D8] hover:bg-white hover:text-black transition duration-300 ease-in' >
<a   href="https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn" 
     >         {en.TEAM.button}   </a>
          </button>
        
        </div>

        <div>
          <img src={team1} className='w-full max-h-screen '  alt="" />
        </div>
      </section>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-22 mr-5 lg:gap-8">
            <div className="w-full sm:w-1/3">
                <img 
                  src={team2} 
                  alt="Team Member" 
                  className="w-full h-[90] rounded-lg"
                />
            </div>
            <div className="w-full sm:w-1/3">
                <img 
                  src={team3} 
                  alt="Team Member" 
                  className="w-full max-h-screen rounded-lg"
                />
            </div>
            <div className="w-full sm:w-1/3">
                <img 
                  src={team4} 
                  alt="Team Member" 
                  className="w-full max-h-screen rounded-lg"
                />
            </div>
        </div>
    </section>
  )
}

export default Team;