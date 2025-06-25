import React from 'react';
import welcomeImage1 from '../assets/welcomeImg1.png';
import welcomeImage2 from '../assets/welcomeImg2.png';
import welcomeImage3 from '../assets/welcomeImg3.png';
import welcomeImage4 from '../assets/welcomeImg4.png';
import en from '../config/language/en';

const images = [welcomeImage1, welcomeImage2, welcomeImage3, welcomeImage4];

const WelcomeSection = () => {
  const { title, description, cards } = en.WELCOME;

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 md:py-12 lg:py-16 flex flex-col justify-between gap-12 md:gap-16 lg:gap-20">
      <div className="flex flex-col items-start gap-4 md:gap-6 text-left max-w-4xl">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight whitespace-nowrap">
          {title}
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 w-full max-w-[280px] sm:max-w-[250px] lg:max-w-[240px] xl:max-w-[250px]"
          >
            <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={images[index]}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between items-center gap-4 flex-1">
              <div className="flex flex-col gap-3 text-center">
                <h3 className="text-white text-lg md:text-xl font-medium">{card.title}</h3>
                <p className="text-[#FFFFFFBF] text-sm md:text-base leading-relaxed">{card.text}</p>
              </div>
              <button className="inline-flex bg-black py-3 px-8 md:px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto justify-center">
                <a
                  className="text-sm md:text-base text-[#04B4FC] font-medium"
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.button}
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomeSection;
