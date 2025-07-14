import React from "react";
import welcomeImage1 from "../assets/welcomeImg1.png";
import welcomeImage2 from "../assets/welcomeImg2.png";
import welcomeImage3 from "../assets/welcomeImg3.png";
import welcomeImage4 from "../assets/welcomeImg4.png";

const WelcomeSection = () => {
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
        "Be part of a growing network of React Native developers in Nigeria. Connect, and collaborate through events, discussions, and open-source projects.",
      buttonText: "Join Now",
      link: "Read More",
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

  return (
    <>
      <section className="pt-7 px-4 sm:px-[70px] text-white flex flex-col gap-20">
        <div>
          <p className="text-5xl">New Here? Welcome to React Native Nigeria!</p>
          <p className="mt-5 text-xl font-normal">
            React Native Nigeria is a vibrant community of developers passionate
            about <br />
            building cross-platform mobile apps using React Native. Our mission
            is to foster <br />
            learning, collaboration, and innovation by providing a space for
            developers to
            <br />
            connect, share knowledge, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionData.map((item, index) => (
            <div key={index} className="gap-[17px] flex flex-col text-center">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between items-center gap-4 py-6 px-8 ">
                <div className="flex flex-col gap-3 text-center">
                  <h3 className="text-2xl font-normal">{item.title}</h3>
                  <p className="text-base font-light text-center">
                    {item.description}
                  </p>
                </div>
                <button className="inline-flex bg-black py-3 px-8 md:px-12 items-center rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 w-full justify-center">
                  <a
                    className="text-sm md:text-base text-[#04B4FC] font-medium"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.buttonText}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
