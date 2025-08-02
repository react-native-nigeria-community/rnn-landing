import React from "react";
import githubImage from "../assets/whyUsImg.png";
import githubLogo from "../assets/rnnGithubIcon.svg";
import slackImage from "../assets/slackImage.png";
import slackLogo from "../assets/rnnSlackIcon.svg";
import mediumImage from "../assets/whyUsImg.png"; // reuse or replace
import mediumLogo from "../assets/medium.svg"; // make sure this asset exists
import youtubeLogo from "../assets/rnnYoutubeIcon.svg";
import groupBackground from "../assets/Group_3.svg";

const JoinUs = () => {
  return (
    <section className="relative pt-10 px-4 sm:px-[70px] text-white flex flex-col gap-20 max-w-[1200px] mx-auto">
      <img
        src={groupBackground}
        alt=""
        className="pointer-events-none hidden lg:block lg:absolute top-[500px] left-[400px] w-[700px] h-[600px]"
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-4xl mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
          Stay Connected with React Native Nigeria!
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFFFFBF] leading-relaxed max-w-3xl">
          Join us across multiple platforms to learn, collaborate, and stay
          updated with the React Native community.
        </p>
      </div>

      <div className="space-y-24">

        {/* GitHub Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-[80px]">
          <div className="w-full lg:w-[40%]">
            <img src={githubImage} alt="GitHub" className="w-full rounded-lg" />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:mr-[117px] text-center lg:text-left max-w-xl">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <img src={githubLogo} alt="GitHub Logo" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-white text-3xl sm:text-4xl font-semibold">
                 Join Our GitHub Organization
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Be part of our GitHub community and collaborate on real-world projects.
              You'll improve your coding skills, contribute to open-source, and build
              a strong developer portfolio in the React Native ecosystem.
            </p>
            <a
              href="https://github.com/react-native-nigeria-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 text-black text-base md:text-lg lg:text-xl font-medium w-fit mx-auto lg:mx-0"
            >
              Join us
            </a>
          </div>
        </div>

        {/* Slack Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-[80px]">
          <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-xl text-center lg:text-left">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <img src={slackLogo} alt="Slack Logo" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-white text-3xl sm:text-4xl font-semibold">
                Join Our Slack Community
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Our Slack is a hub for developers to connect, share, and support each other.
              Whether you're a beginner or expert, you’ll find help and community spirit.
            </p>
            <a
              href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-394qjcr8n-PLNYl2pKoM1RveBaX10WZA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 text-black text-base md:text-lg lg:text-xl font-medium w-fit mx-auto lg:mx-0"
            >
              Join us
            </a>
          </div>
          <div className="w-full lg:w-[40%] lg:mr-[117px]">
            <img src={slackImage} alt="Slack Community" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Medium Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-[80px]">
          <div className="w-full lg:w-[40%]">
            <img src={mediumImage} alt="Medium" className="w-full h-auto rounded-lg" />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:mr-[117px] max-w-xl text-center lg:text-left">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <img src={mediumLogo} alt="Medium Logo" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-white text-3xl sm:text-4xl font-semibold">
                  Read Us on Medium
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Explore stories, tutorials, and updates from the React Native Nigeria community.
              Our Medium blog keeps you informed and inspired to grow as a developer.
            </p>
            <a
              href="https://medium.com/react-native-nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 text-black text-base md:text-lg lg:text-xl font-medium w-fit mx-auto lg:mx-0"
            >
              Visit Blog
            </a>
          </div>
        </div>

        {/* YouTube Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-[80px]">
          <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left max-w-xl">
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <img src={youtubeLogo} alt="YouTube Logo" className="w-12 h-12 md:w-16 md:h-16" />
              <h2 className="text-white text-3xl sm:text-4xl font-semibold">
                Subscribe to Our YouTube Channel
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Watch expert talks, tutorials, and project walkthroughs. Our YouTube channel is
              packed with content for React Native developers of all skill levels.
            </p>
            <a
              href="https://www.youtube.com/@Reactnativenigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 text-black text-base md:text-lg lg:text-xl font-medium w-fit mx-auto lg:mx-0"
            >
              Keep in the Loop
            </a>
          </div>

          <div className="flex gap-4 w-full lg:w-[40%] max-w-md lg:justify-end">
            <iframe
              className="w-1/2 aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/12f3Cjw2Rbc?si=a1G3RuVPee4_zKn5"
              title="React Native Nigeria Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <iframe
              className="w-1/2 aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/ayCta8DrpD0?si=mRPM1_KE-qYjdgY9"
              title="React Native Nigeria Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoinUs;
