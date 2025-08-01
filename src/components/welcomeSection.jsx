import React from "react";
import welcomeImage1 from "../assets/welcomeImg1.png";
import welcomeImage2 from "../assets/welcomeImg2.png";
import welcomeImage3 from "../assets/welcomeImg3.png";
import welcomeImage4 from "../assets/welcomeImg4.png";

const sectionData = [
  {
    image: welcomeImage1,
    alt: "Who We Are",
    title: "Who we Are",
    description:
      "React Native Nigeria is a community of passionate developers dedicated to learning, building, and growing with React Native.",
    buttonText: "Read More",
    link: "https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA",
  },
  {
    image: welcomeImage2,
    alt: "Join Our Community",
    title: "Join Our Community",
    description:
      "Be part of a growing network of React Native developers in Nigeria. Connect and collaborate through events, discussions, and open-source projects.",
    buttonText: "Join Now",
    link: "https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA",
  },
  {
    image: welcomeImage3,
    alt: "Events",
    title: "Events",
    description:
      "Stay engaged with the community through meetups, webinars, and tech talks. Learn from experts, share ideas, and grow your React Native skills.",
    buttonText: "View Events",
    link: "https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn",
  },
  {
    image: welcomeImage4,
    alt: "Podcasts",
    title: "Podcasts",
    description:
      "Listen to insightful discussions on React Native, mobile development, and the tech ecosystem. Gain knowledge from experts and stay updated on industry trends.",
    buttonText: "Listen Now",
    link: "#Podcasts",
  },
];

const InfoCard = ({ image, alt, title, description, buttonText, link }) => (
  <div className="flex flex-col h-full bg-[#111] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]">
    <div className="w-full aspect-[4/5] overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="flex flex-col flex-1 px-6 py-5 text-white">
      <h3 className="text-xl sm:text-2xl font-semibold text-center">{title}</h3>
      <p className="text-sm sm:text-base font-light mt-4 leading-relaxed text-center">
        {description}
      </p>
      <div className="mt-auto pt-6 flex justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#04B4FC] font-medium text-sm sm:text-base bg-black border border-[#04B4FC] py-2 px-6 rounded hover:bg-gray-800 transition-colors"
        >
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);

const WelcomeSection = () => {
  return (
    <section className="pt-12 px-4 sm:px-[70px] text-white flex flex-col gap-20">
      <div>
        <h2 className="text-3xl sm:text-5xl font-semibold">
          New Here? Welcome to React Native Nigeria!
        </h2>
        <p className="mt-5 text-base sm:text-xl font-light leading-relaxed">
          React Native Nigeria is a vibrant community of developers passionate
          about building cross-platform mobile apps using React Native. <br />
          Our mission is to foster learning, collaboration, and innovation by
          providing a space for developers to connect, share knowledge, and grow
          together.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectionData.map((item, index) => (
          <InfoCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default WelcomeSection;
