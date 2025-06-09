import React from 'react'
import rnnLogo from '../assets/rnnLogo.svg';
import githubImage from '../assets/whyUsImg.png';
import githubLogo from '../assets/rnnGithubIcon.svg';
import slackImage from '../assets/slackImage.png';
import slackLogo from '../assets/rnnSlackIcon.svg';
import whatsappImage from '../assets/whyUsImg.png';
import whatsappLogo from '../assets/rnnWhatsappIcon.svg';
import youtubeLogo from '../assets/rnnYoutubeIcon.svg';
import youtubePlaceholder from '../assets/rnnYoutubeImg.png';

 const JoinUs = () => {
  return (
    <section className="flex flex-col gap-20 mt-24">
        <div className="flex flex-col gap-4">
            <h1 className="text-white text-3xl md:text-5xl">Stay Connected with React Native Nigeria!</h1>
            <p className="text-base md:text-xl text-[#FFFFFFBF] max-w-3xl">Join us across multiple platforms to learn, collaborate, and stay updated with the React Native community.</p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
            <img src={githubImage} alt="Github" className="w-full lg:w-1/2"/>
            <div className="flex flex-col items-start gap-4">
                <div>
                    <img src={githubLogo} alt="Github Logo"/>
                    <h1 className="text-white text-2xl md:text-4xl leading-snug">Why Join Our GitHub <br/> Organization?</h1>
                </div>

               <p className="text-white text-[14px]">Join a thriving community of React Native developers actively contributing to open-source projects and collaborating within our organization. By becoming part of our GitHub community, you’ll have the opportunity to work on real-world React Native projects, collaborate with experienced developers, and refine your coding skills. Whether you're a beginner or an expert, you can gain hands-on experience, build your portfolio, and make a lasting impact in the React Native ecosystem.</p>

               <div className="inline-flex bg-white py-2 px-5 justify-between items-center gap-2 rounded-lg hover:bg-[#DADADA] w-fit cursor-pointer">
                <a href="https://github.com/react-native-nigeria-community" target="_blank" rel="noopener noreferrer" className="text-black text-[20px]">Join us</a>
                <img src={rnnLogo} alt="Join Us" className="w-8 h-8"/>
              </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex flex-col items-start gap-4">
                <div>
                    <img src={slackLogo} alt="Slack Logo" className="w-full lg:w-1/2"/>
                    <h1 className="text-white text-2xl md:text-4xl leading-snug">Why Join Our Slack <br/> Community?</h1>
                </div>

               <p className="text-white text-[14px]">Be part of Nigeria’s leading React Native developer network! Our Slack community is an interactive space where developers of all skill levels come together to share knowledge. Whether you're a beginner seeking guidance or an experienced developer looking to contribute, there's a place for you here! Our Slack space is designed for developers of all skill levels to connect, share insights, and support one another in their React Native journey.</p>

               <div className="inline-flex bg-white py-2 px-5 justify-between items-center gap-2 rounded-lg hover:bg-[#DADADA] w-fit cursor-pointer">
                <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" target="_blank" rel="noopener noreferrer" className="text-black text-[20px]">Join us</a>
                <img src={rnnLogo} alt="Join Us" className="w-8 h-8"/>
              </div>
            </div>

            <img src={slackImage} alt="Slack"/>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
            <img src={whatsappImage} alt="Whatsapp"/>
            <div className="flex flex-col items-start gap-4">
                <div>
                    <img src={whatsappLogo} alt="Whatsapp Logo" className="w-full lg:w-1/2"/>
                    <h1 className="text-white text-2xl md:text-4xl leading-snug">Why Join Our WhatsApp <br/> Community?</h1>
                </div>

               <p className="text-white text-[14px]">Connect with React Native developers, stay updated on events, and get real-time support. Engage in discussions, share knowledge, and collaborate on exciting projects. Whether you're a beginner or an experienced developer, our WhatsApp group is the perfect place to learn, grow, and network with like-minded individuals. It is a space for real-time discussions, knowledge sharing, and staying updated on the latest trends in React Native.</p>

               <div className="inline-flex bg-white py-2 px-5 justify-between items-center gap-2 rounded-lg hover:bg-[#DADADA] w-fit cursor-pointer">
                <a href="joinUs" target="_blank" rel="noopener noreferrer" className="text-black text-[20px]">Join us</a>
                <img src={rnnLogo} alt="Join Us" className="w-8 h-8"/>
              </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <div className="flex flex-col gap-2">
                    <img src={youtubeLogo} alt="Youtube Logo" className="w-full lg:w-1/2"/>
                    <h1 className="text-white text-2xl md:text-4xl leading-snug">Subscribe to Our Youtube <br/> Channel</h1>
                </div>

               <p className="text-white text-sm md:text-base leading-relaxed text-[#FFFFFFBF]">Join our growing React Native community on YouTube and gain access to valuable content that will help you level up your development skills. From expert-led discussions to hands-on tutorials, we bring you the best learning resources to keep you ahead in the React Native ecosystem.  Whether you're just starting with React Native or you're an experienced developer looking to sharpen your skills, our channel offers a wealth of knowledge to keep you ahead.</p>

               <div className="inline-flex bg-white py-2 px-5 justify-between items-center gap-2 rounded-lg hover:bg-[#DADADA] w-fit cursor-pointer">
                <a href="joinUs" target="_blank" rel="noopener noreferrer" className="text-black text-base md:text-lg">Keep in the Loop</a>
                <img src={rnnLogo} alt="Keep me in the loop" className="w-6 h-6"/>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/2 justify-start lg:justify-end">
                <img src={youtubePlaceholder} alt="Youtube" className="w-48 h-48 object-cover rounded-lg"/>
                <img src={youtubePlaceholder} alt="Youtube" className="w-48 h-48 object-cover rounded-lg"/>
            </div>
        </div>

    </section>
  )
}

export default JoinUs;
