import React from 'react'
import githubImage from '../assets/whyUsImg.png';
import githubLogo from '../assets/rnnGithubIcon.svg';
import slackImage from '../assets/slackImage.png';
import slackLogo from '../assets/rnnSlackIcon.svg';
import whatsappImage from '../assets/whyUsImg.png';
import whatsappLogo from '../assets/rnnWhatsappIcon.svg';
import youtubeLogo from '../assets/rnnYoutubeIcon.svg';
import youtubePlaceholder from '../assets/rnnYoutubeImg.png';
import groupBackground from '../assets/Group-2.svg';

const JoinUs = () => {
  return (
    <section className="flex flex-col gap-16 md:gap-20 lg:gap-24 mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-4xl mx-auto">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
                Stay Connected with React Native Nigeria!
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FFFFFFBF] leading-relaxed max-w-3xl">
                Join us across multiple platforms to learn, collaborate, and stay updated with the React Native community.
            </p>
        </div>

        <div className="relative">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36">
              <div className="w-full lg:w-1/2">
                  <img src={githubImage} alt="GitHub Community" className="w-full h-auto rounded-lg"/>
              </div>
              <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                  <div className="flex flex-col gap-4">
                      <img src={githubLogo} alt="GitHub Logo" className="w-12 h-12 md:w-16 md:h-16"/>
                      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                          Why Join Our GitHub<br/>Organization?
                      </h2>
                  </div>
                  <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-none lg:max-w-full xl:pr-8">
                      Join a thriving community of React Native developers actively contributing to open-source projects and collaborating within our organization. By becoming part of our GitHub community, you'll have the opportunity to work on real-world React Native projects, collaborate with experienced developers, and refine your coding skills. Whether you're a beginner or an expert, you can gain hands-on experience, build your portfolio, and make a lasting impact in the React Native ecosystem.
                  </p>
                  <button className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 cursor-pointer">
                      <a href="https://github.com/react-native-nigeria-community" target="_blank" rel="noopener noreferrer" className="text-black text-base md:text-lg lg:text-xl font-medium">
                          Join us
                      </a>
                  </button>
              </div>
          </div>

          <img
                src={groupBackground}
                alt=""
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1000px] "
                aria-hidden="true"
                />


          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36">
              <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                  <div className="flex flex-col gap-4">
                      <img src={slackLogo} alt="Slack Logo" className="w-12 h-12 md:w-16 md:h-16"/>
                      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                          Why Join Our Slack<br/>Community?
                      </h2>
                  </div>
                  <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-none lg:max-w-full xl:pr-8">
                      Be part of Nigeria's leading React Native developer network! Our Slack community is an interactive space where developers of all skill levels come together to share knowledge. Whether you're a beginner seeking guidance or an experienced developer looking to contribute, there's a place for you here! Our Slack space is designed for developers of all skill levels to connect, share insights, and support one another in their React Native journey.
                  </p>
                  <button className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 cursor-pointer">
                      <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" target="_blank" rel="noopener noreferrer" className="text-black text-base md:text-lg lg:text-xl font-medium">
                          Join us
                      </a>
                  </button>
              </div>
              <div className="w-full lg:w-1/2">
                  <img src={slackImage} alt="Slack Community" className="w-full h-auto rounded-lg"/>
              </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36">
            <div className="w-full lg:w-1/2">
                <img src={whatsappImage} alt="WhatsApp Community" className="w-full h-auto rounded-lg"/>
            </div>
            <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                <div className="flex flex-col gap-4">
                    <img src={whatsappLogo} alt="WhatsApp Logo" className="w-12 h-12 md:w-16 md:h-16"/>
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                        Why Join Our WhatsApp<br/>Community?
                    </h2>
                </div>

                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-none lg:max-w-full xl:pr-8">
                    Connect with React Native developers, stay updated on events, and get real-time support. Engage in discussions, share knowledge, and collaborate on exciting projects. Whether you're a beginner or an experienced developer, our WhatsApp group is the perfect place to learn, grow, and network with like-minded individuals. It is a space for real-time discussions, knowledge sharing, and staying updated on the latest trends in React Native.
                </p>

                <button className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 cursor-pointer">
                    <a href="joinUs" target="_blank" rel="noopener noreferrer" className="text-black text-base md:text-lg lg:text-xl font-medium">
                        Join us
                    </a>
                </button>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36">
            <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                <div className="flex flex-col gap-4">
                    <img src={youtubeLogo} alt="YouTube Logo" className="w-12 h-12 md:w-16 md:h-16"/>
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
                        Subscribe to Our YouTube<br/>Channel
                    </h2>
                </div>

                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed text-[#FFFFFFBF] max-w-none lg:max-w-full xl:pr-8">
                    Join our growing React Native community on YouTube and gain access to valuable content that will help you level up your development skills. From expert-led discussions to hands-on tutorials, we bring you the best learning resources to keep you ahead in the React Native ecosystem. Whether you're just starting with React Native or you're an experienced developer looking to sharpen your skills, our channel offers a wealth of knowledge to keep you ahead.
                </p>

                <button className="inline-flex bg-white py-3 px-6 md:px-8 justify-center items-center gap-3 rounded-lg hover:bg-[#DADADA] transition-colors duration-200 cursor-pointer">
                    <a href="joinUs" target="_blank" rel="noopener noreferrer" className="text-black text-base md:text-lg lg:text-xl font-medium">
                        Keep in the Loop
                    </a>
                </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2 justify-center lg:justify-end">
                <div className="w-full sm:w-48 h-48 rounded-lg overflow-hidden">
                    <img src={youtubePlaceholder} alt="YouTube Video Thumbnail" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full sm:w-48 h-48 rounded-lg overflow-hidden">
                    <img src={youtubePlaceholder} alt="YouTube Video Thumbnail" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JoinUs;