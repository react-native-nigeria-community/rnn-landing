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
   < > 

    <section className='text-white flex flex-col gap-4   mt-20'>
    <p className='text-5xl flex justify-center'>
        Stay Connected with React Native Niegria!
    </p>
    <p className='flex justify-center tracking-wider text-xl text-[#FFFFFFBF]'>Join us across multiple platforms to learn, collaborate, and stay updated with the React Native community.</p>
</section>


   
    <div className="space-y-16 mt-20 left-20  ml-20">
  
      <div className="flex flex-col lg:flex-row items-center gap-4 text-white">
        <img src={githubImage} className="w-[35%] rounded-lg object-cover mr-10" alt="" />
        <div className="w-1/2 text-left">
          <img src={githubLogo} className="w-12" alt="" />
          <h2 className="text-3xl font-bold mt-4">Why Join Our GitHub <br/>Organization?</h2>
          <p className="text-sm mt-2 leading-relaxed">
            Join a thriving community of React Native developers actively contributing to open-source projects and collaborating within our organization. By becoming part of our GitHub community, you’ll have the opportunity to work on real-world React Native projects, collaborate with experienced developers, and refine your coding skills. Whether you're a beginner or an expert, you can gain hands-on experience, build your portfolio, and make a lasting impact in the React Native ecosystem.
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-white rounded-md text-black  text-base bg-white hover:bg-black hover:text-white transition cursor-pointer mt-4">
            Join Us
            <img src={rnnLogo} className="w-5" alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4 text-white">
        <div className="w-1/2 text-left">
          <img src={slackLogo} className="w-12 " alt="" />
          <h2 className="text-2xl font-bold mt-4">Why Join Our Slack <br/>Community?</h2>
          <p className="text-sm mt-2 leading-relaxed">
            Be part of Nigeria’s leading React Native developer network! Our Slack community is an interactive space where developers of all skill levels come together to share knowledge. Whether you're a beginner seeking guidance or an experienced developer looking to contribute, there's a place for you here! Our Slack space is designed for developers of all skill levels to connect, share insights, and support one another in their React Native journey.  
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-white rounded-md text-black  text-base bg-white hover:bg-black hover:text-white transition cursor-pointer mt-4">
            Join Us
            <img src={rnnLogo} className="w-5" alt="" />
          </button>
        </div>
        <img src={slackImage} className="w-[35%] rounded-lg object-cover mr-10" alt="" />
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-4 text-white">
        <img src={whatsappImage} className="w-[35%] rounded-lg object-cover mr-10" alt="" />
        <div className="w-1/2 text-left">
          <img src={whatsappLogo} className="w-12" alt="" />
          <h2 className="text-2xl font-bold mt-4">Why Join Our WhatsApp<br/> Community?</h2>
          <p className="text-sm mt-2 leading-relaxed">
            Connect with React Native developers, stay updated on events, and get real-time support. Engage in discussions, share knowledge, and collaborate on exciting projects. Whether you're a beginner or an experienced developer, our WhatsApp group is the perfect place to learn, grow, and network with like-minded individuals. It is a space for real-time discussions, knowledge sharing, and staying updated on the latest trends in React Native.   
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-white rounded-md text-black  text-base bg-white hover:bg-black hover:text-white transition cursor-pointer mt-4">
            Join Us
            <img src={rnnLogo} className="w-5" alt="" />
          </button>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-4 text-white">
        <div className="w-1/2 text-left">
          <img src={youtubeLogo} className="w-12" alt="" />
          <h2 className="text-3xl font-bold mt-4">Subscribe to Our Youtube <br/>Channel</h2>
          <p className="text-sm mt-2 leading-relaxed">
            Join our growing React Native community on YouTube and gain access to valuable content that will help you level up your development skills. From expert-led discussions to hands-on tutorials, we bring you the best learning resources to keep you ahead in the React Native ecosystem.  Whether you're just starting with React Native or you're an experienced developer looking to sharpen your skills, our channel offers a wealth of knowledge to keep you ahead. 
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-white rounded-md text-black  text-base bg-white hover:bg-black hover:text-white transition cursor-pointer mt-4">
            Join Us
            <img src={rnnLogo} className="w-5" alt="" />
          </button>
        </div>
        <div className="w-1/2 flex gap-4">
          <img src={youtubePlaceholder} className="w-[45%] rounded-lg" alt="" />
          <img src={youtubePlaceholder} className="w-[45%] rounded-lg" alt="" />
        </div>
      </div>

    </div>
 

   </>
  )
}

export default JoinUs;