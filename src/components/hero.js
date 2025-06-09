import React from 'react'
import heroAvatar1 from '../assets/tt.png';
import heroAvatar2 from '../assets/aas.png';
import heroAvatar3 from '../assets/ffg.png';
import rnnLogo from '../assets/rnnLogo.svg';

const Hero = () => {
  return (
    <section className="pt-24 flex flex-col justify-betweeen items-start gap-12">
        <div className="flex flex-col justify-between gap-3">
            <div className="flex flex-row gap-2">
                <img src={heroAvatar1} alt="Hero Avatar"/>
                <img src={heroAvatar2} alt="Hero Avatar"/>
                <img src={heroAvatar3} alt="Hero Avatar"/>
            </div>
            <p className="text-white text-[20px]">Connect, learn, and grow with React Native <br/> developers through events, talks, and collaboration.</p>
        </div>

       <div className="flex flex-col gap-6">
         <h1 className="text-white text-3xl md:text-5xl">Join a Passionate Community <br/> of React Native Developers in <br/> Nigeria!</h1>
         <div className="inline-flex bg-white py-3 px-5 items-center gap-2 rounded-lg cursor-pointer hover:bg-[#DADADA] w-fit">
            <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" target="_blank" rel="noopener noreferrer" className="text-black text-[20px]">Join us</a>
            <img src={rnnLogo} alt="Join Us" className="w-6 h-6"/>
         </div>
       </div>
    </section>
  )
}

export default Hero;