import React from 'react'
import heroAvatar1 from '../assets/tt.png';
import heroAvatar2 from '../assets/aas.png';
import heroAvatar3 from '../assets/ffg.png';
import rnnLogo from '../assets/rnnLogo.svg';

const Hero = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-[51px] pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 flex flex-col justify-between items-start gap-8 sm:gap-10 lg:gap-12">
      
      <div className="flex flex-col justify-between gap-3 sm:gap-4 lg:gap-6">
        
        <div className="flex flex-row gap-1 sm:gap-2">
          <img src={heroAvatar1} alt="Hero Avatar" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-auto lg:h-auto rounded-full object-cover"/>
          <img src={heroAvatar2} alt="Hero Avatar" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-auto lg:h-auto rounded-full object-cover"/>
          <img src={heroAvatar3} alt="Hero Avatar" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-auto lg:h-auto rounded-full object-cover"/>
        </div>
        
        
        <p className="text-white text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-[30px] max-w-2xl">
          Connect, learn, and grow with <span className="text-[#67D8F7]">React Native 
          developers</span> through events, talks, and collaboration.
        </p>
      </div>

     
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        <div className="w-full">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight sm:leading-tight md:leading-tight lg:leading-[75px] mb-2 sm:mb-4">
            Join a Passionate Community <br className="hidden sm:block"/> 
            <span className="sm:block">of React Native Developers in</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20">
            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight lg:leading-[75px]">
              Nigeria!
            </span>
            
            <div className="inline-flex bg-white py-2 sm:py-3 px-4 sm:px-5 items-center gap-2 rounded-lg cursor-pointer hover:bg-[#DADADA] w-fit transition-colors">
              <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-black text-base sm:text-lg lg:text-xl font-medium">
                Join us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;