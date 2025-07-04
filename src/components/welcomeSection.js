import React from 'react'
import welcomeImage1 from '../assets/welcomeImg1.png';
import welcomeImage2 from '../assets/welcomeImg2.png';
import welcomeImage3 from '../assets/welcomeImg3.png';
import welcomeImage4 from '../assets/welcomeImg4.png';

const WelcomeSection = () => {
  return (
   <>
   
   
   
   
   <section className=' ml-10 text-white leading-relaxed tracking-wide mb-10'> 
    <div>
        <p className='xl:text-5xl lg:text-5xl md:text-4xl text-xl'> 
            New Here? <span className="lg:hidden  "><br /></span> <span className='md:ml-24 lg:ml-0'>Welcome to React Native Nigeria!</span>
        </p>
            <p  className='px-2 md:text-center text-center lg:text-left text-xs mt-5 lg:text-xl font-[300] md:text-base lg:tracking-wider md:font-base '>

                React Native Nigeria is a vibrant community of developers passionate about   <span className="hidden sm:inline "><br /></span>
                 building cross-platform mobile apps using React Native. Our mission is to foster   <span className="hidden sm:inline "><br /></span>
                 learning, collaboration, and innovation by providing a space for developers to  <span className="hidden sm:inline "><br /></span>
                  connect, share knowledge, and grow together.
            </p>
    </div>
<div>




    
</div>

  </section>
  
   
   

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center px-6">
            <div className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-[250px] lg:max-w-[240px] xl:max-w-[250px]">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <img 
                        src={welcomeImage1} 
                        alt="Who We Are" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-between items-center gap-4 flex-1">
                    <div className="flex flex-col gap-3 text-center">
                        <h3 className="text-white text-lg md:text-xl font-medium">Who we Are</h3>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base leading-relaxed">
                            React Native Nigeria is a community of passionate developers dedicated to learning, building, and growing with React Native.
                        </p>
                    </div>
                    <button className="inline-flex bg-black py-3 px-8 md:px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto justify-center">
                        <a 
                            className="text-sm md:text-base text-[#04B4FC] font-medium" 
                            href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Join Now
                        </a>
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-[250px] lg:max-w-[240px] xl:max-w-[250px]">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <img 
                        src={welcomeImage2} 
                        alt="Join Our Community" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-between items-center gap-4 flex-1">
                    <div className="flex flex-col gap-3 text-center">
                        <h3 className="text-white text-lg md:text-xl font-medium">Join Our Community</h3>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base leading-relaxed">
                            Be part of a growing network of React Native developers in Nigeria. Connect, and collaborate through events, discussions, and open-source projects.
                        </p>
                    </div>
                    <button className="inline-flex bg-black py-3 px-8 md:px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto justify-center">
                        <a 
                            className="text-sm md:text-base text-[#04B4FC] font-medium" 
                            href="#Read More" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Read More
                        </a>
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-[250px] lg:max-w-[240px] xl:max-w-[250px]">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <img 
                        src={welcomeImage3} 
                        alt="Events" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-between items-center gap-4 flex-1">
                    <div className="flex flex-col gap-3 text-center">
                        <h3 className="text-white text-lg md:text-xl font-medium">Events</h3>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base leading-relaxed">
                            Stay engaged with the community through meetups, webinars, and tech talks. Learn from experts, share ideas, and grow your React Native skills.
                        </p>
                    </div>
                    <button className="inline-flex bg-black py-3 px-8 md:px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto justify-center">
                        <a 
                            className="text-sm md:text-base text-[#04B4FC] font-medium" 
                            href="https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Events
                        </a>
                    </button>
                </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-[250px] lg:max-w-[240px] xl:max-w-[250px]">
                <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                    <img 
                        src={welcomeImage4} 
                        alt="Podcasts" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-between items-center gap-4 flex-1">
                    <div className="flex flex-col gap-3 text-center">
                        <h3 className="text-white text-lg md:text-xl font-medium">Podcasts</h3>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base leading-relaxed">
                            Listen to insightful discussions on React Native, mobile development, and the tech ecosystem. Gain knowledge from experts and stay updated on industry trends.
                        </p>
                    </div>
                    <button className="inline-flex bg-black py-3 px-8 md:px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto justify-center">
                        <a 
                            className="text-sm md:text-base text-[#04B4FC] font-medium" 
                            href="#Podcasts" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Listen Now
                        </a>
                    </button>
                </div>
            </div>
        </div>
   
   




   
   </>
  )
}

export default WelcomeSection;


