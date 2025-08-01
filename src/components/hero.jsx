import React from 'react';
import heroAvatar1 from '../assets/tt.png';
import heroAvatar2 from '../assets/rnnTeam3.png';

const SLACK_INVITE_URL = 'https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA';

const Hero = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-[51px] pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 flex flex-col justify-between items-start gap-8 sm:gap-10 lg:gap-12">

      {/* Avatars at the top */}
      <div className="flex flex-row gap-2 sm:gap-3 mt-4">
        <img src={heroAvatar1} alt="Team member 1" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
        <img src={heroAvatar2} alt="Team member 2" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
      </div>

      {/* Main Heading */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] leading-tight lg:leading-[70px] font-bold">
          Join a Passionate Community <br className="hidden sm:block" />
          <span className="sm:block">of React Native Developers in</span>
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20">
          <span className="text-[#67D8F7] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] leading-tight lg:leading-[70px] font-semibold">
            Nigeria!
          </span>

          <div className="inline-flex bg-white py-2 sm:py-3 px-4 sm:px-5 items-center gap-2 rounded-lg cursor-pointer hover:bg-[#DADADA] w-fit transition-colors">
            <a
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-base sm:text-lg lg:text-xl font-medium"
            >
              Join us
            </a>
          </div>
        </div>
      </div>

      {/* Supporting Text */}
      <p className="text-white font-light sm:text-lg lg:text-xl leading-relaxed sm:leading-7 lg:leading-[30px]">
        Connect, learn, and grow with <span className="text-[#67D8F7] font-medium">React Native developers</span> through events, talks, and collaboration.
      </p>
    </section>
  );
};

export default Hero;
