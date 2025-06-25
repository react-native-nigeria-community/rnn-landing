import React from 'react';
import githubImage from '../assets/whyUsImg.png';
import githubLogo from '../assets/rnnGithubIcon.svg';
import slackImage from '../assets/slackImage.png';
import slackLogo from '../assets/rnnSlackIcon.svg';
import whatsappImage from '../assets/whyUsImg.png';
import whatsappLogo from '../assets/rnnWhatsappIcon.svg';
import youtubeLogo from '../assets/rnnYoutubeIcon.svg';
import youtubePlaceholder from '../assets/rnnYoutubeImg.png';

import en from '../config/language/en';

const logos = [githubLogo, slackLogo, whatsappLogo, youtubeLogo];
const images = [githubImage, slackImage, whatsappImage, youtubePlaceholder];

const JoinUs = () => {
  const { heading, description, platforms } = en.JOIN_US;

  return (
    <section className="flex flex-col gap-16 md:gap-20 lg:gap-24 mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-4xl mx-auto ">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-center">
          {heading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFFFFBF] leading-relaxed text-center whitespace-nowrap">
          {description}
        </p>
      </div>

      {platforms.map((platform, i) => {
        const isReversed = i % 2 === 0;
        const image = platform.name === "YouTube" ? null : images[i];
        const youtubeImages = platform.name === "YouTube" ? (
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2 justify-center lg:justify-end">
            <div className="w-full sm:w-48 h-48 rounded-lg overflow-hidden">
              <img src={youtubePlaceholder} alt="YouTube Video Thumbnail" className="w-full h-full object-cover" />
            </div>
            <div className="w-full sm:w-48 h-48 rounded-lg overflow-hidden">
              <img src={youtubePlaceholder} alt="YouTube Video Thumbnail" className="w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-1/2">
            <img src={image} alt={`${platform.name} Community`} className="w-full h-auto rounded-lg" />
          </div>
        );

        const content = (
          <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              <img src={logos[i]} alt={`${platform.name} Logo`} className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                {platform.title}
              </h2>
            </div>
            <p className={`text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-none lg:max-w-full xl:pr-8 ${platform.name === "YouTube" ? "text-[#FFFFFFBF]" : ""}`}>
              {platform.text}
            </p>
            <button className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 cursor-pointer">
              <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-black text-base md:text-lg lg:text-xl font-medium">
                {platform.button}
              </a>
            </button>
          </div>
        );

        return (
          <div
            key={platform.name}
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between items-center gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36`}
          >
            {youtubeImages || image}
            {content}
          </div>
        );
      })}
    </section>
  );
};

export default JoinUs;
