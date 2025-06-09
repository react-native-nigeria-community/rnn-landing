import React from 'react'
import welcomeImage1 from '../assets/welcomeImg1.png';
import welcomeImage2 from '../assets/welcomeImg2.png';
import welcomeImage3 from '../assets/welcomeImg3.png';
import welcomeImage4 from '../assets/welcomeImg4.png';

const WelcomeSection = () => {
  return (
    <section className=" flex flex-col justify-between gap-20">
        <div className="flex flex-col items-start gap-6 text-left">
            <h1 className="text-white text-3xl md:text-5xl font-bold">New Here? Welcome to React Native Nigeria!</h1>
            <p className="text-white text-base md:text-lg">React Native Nigeria is a vibrant community of developers passionate about <br/> building cross-platform mobile apps using React Native. Our mission is to foster <br/> learning, collaboration, and innovation by providing a space for developers to <br/>connect, share knowledge, and grow together.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div  className="flex flex-col gap-4 w-full max-w-[250px]">
                <img src={welcomeImage1} alt="Who We Are" className="h-64"/>
                <div className="flex flex-col justify-between items-center gap-3 h-[100%]">
                    <div className="flex flex-col gap-4">
                        <p className="text-white text-xl text-center">Who we Are</p>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base text-center">React Native Nigeria is a community of passionate developers dedicated to learning, building, and growing with React Native.</p>
                    </div>
                    <div className="inline-flex bg-black py-3 px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700">
                        <a className="text-base text-[#04B4FC]" href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" target="_blank" rel="noopener noreferrer">Join Now</a>
                    </div>
                    
                </div>

            </div>

            <div  className="flex flex-col gap-4 w-full max-w-[250px]">
                <img src={welcomeImage2} alt="Who We Are"  className="h-64"/>
                <div className="flex flex-col justify-between items-center gap-3 h-[100%]">
                    <div className="flex flex-col gap-4">
                        <p className="text-white text-xl text-center">Join Our Community</p>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base text-center">Be part of a growing network of React Native developers in Nigeria. Connect, and collaborate through events, discussions, and open-source projects.</p>
                    </div>
                    <div className="inline-flex bg-black py-3 px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700">
                        <a className="text-base text-[#04B4FC]" href="#Read More" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                    
                </div>

            </div>
            
            <div  className="flex flex-col gap-4 w-full max-w-[250px]">
                <img src={welcomeImage3} alt="Events"  className="h-64"/>
                <div className="flex flex-col justify-between items-center gap-3 h-[100%]">
                    <div className="flex flex-col gap-4">
                        <p className="text-white text-xl text-center">Events</p>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base text-center">Stay engaged with the community through meetups, webinars, and tech talks. Learn from experts,share ideas, and grow your React Native skills.</p>
                    </div>
                    <div className="inline-flex bg-black py-3 px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700">
                        <a className="text-base text-[#04B4FC]" href="https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn" target="_blank" rel="noopener noreferrer">View Events</a>
                    </div>
                    
                </div>

            </div>
            
            <div  className="flex flex-col gap-4 w-full max-w-[250px]">
                <img src={welcomeImage4} alt="Podcasts"  className="h-64"/>
                <div className="flex flex-col justify-between items-center gap-3 h-[100%]">
                    <div className="flex flex-col gap-4">
                        <p className="text-white text-xl text-center">Podcasts</p>
                        <p className="text-[#FFFFFFBF] text-sm md:text-base text-center">Listen to insightful discussions on React Native, mobile development, and the tech ecosystem. Gain knowledge from experts and stay updated on industry trends.</p>
                    </div>
                    <div className="inline-flex bg-black py-3 px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700">
                        <a className="text-base text-[#04B4FC]" href="#Podcasts" target="_blank" rel="noopener noreferrer">Listen Now</a>
                    </div>
                    
                </div>

            </div>
            

        </div>

    </section>

  )
}

export default WelcomeSection;