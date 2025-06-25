import React from 'react'
import rnnFooterLogo from '../assets/rnnFooterLogo.svg';
import arrowIcon from '../assets/arrowIcon.svg';
import linkedinIcon from '../assets/Linkedin.svg';
import twitterIcon from '../assets/Twitter.svg';
import en from '../config/language/en';

const Footer = () => {
  return (
    <footer className="mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[51px] py-8 sm:py-12 w-full">
       <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-16">
         <div className="flex flex-col items-start gap-3 sm:gap-4">
            <img src={rnnFooterLogo} alt="React Native Nigeria" className="h-8 sm:h-10 md:h-12"/>
            <p className="text-white text-sm sm:text-base">{en.FOOTER.supportEmail}</p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 text-white">
            <p className="text-base sm:text-lg font-semibold">{en.FOOTER.quickLinks}</p>
            
            <div className="flex flex-col gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4 text-[#D4D4D4] text-sm sm:text-base">
                <a className="cursor-pointer hover:text-white transition-colors" href="terms" target="_blank" rel="noopener noreferrer">{en.FOOTER.terms}</a>
                 <a className="cursor-pointer hover:text-white transition-colors" href="privacyPolicy" target="_blank" rel="noopener noreferrer">{en.FOOTER.privacy}</a>
                <a className="cursor-pointer hover:text-white transition-colors" href="donate" target="_blank" rel="noopener noreferrer">{en.FOOTER.donate}</a>
            </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-base sm:text-lg text-white">{en.FOOTER.subscribe}</p>
            <div className="flex flex-row rounded-md overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md">
                <input 
                  type="email" 
                  placeholder={en.FOOTER.placeholder}
                  className="bg-white py-2 sm:py-3 px-2 sm:px-3 flex-1 text-sm sm:text-base focus:outline-none"
                />
                <button className="bg-[#04B4FC] p-2 sm:p-3 md:p-4 cursor-pointer hover:bg-blue-500 transition-colors">
                  <img src={arrowIcon} alt="Arrow" className="h-4 w-4 sm:h-5 sm:w-5"/>
                </button>
            </div>
        </div>
       </div>

        <div className="border-t border-gray-600 my-6 sm:my-8"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 text-center lg:text-left">
            <div className="flex flex-row items-center gap-3 sm:gap-4">
                <a className="cursor-pointer hover:opacity-80 transition-opacity" href="https://www.linkedin.com/company/react-native-nigeria-community/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="Linkedin" className="h-6 w-6 sm:h-7 sm:w-7"/>
                </a>
            
                <a className="cursor-pointer hover:opacity-80 transition-opacity" href="https://x.com/ReactNativeNG" target="_blank" rel="noopener noreferrer">
                  <img src={twitterIcon} alt="Twitter" className="h-6 w-6 sm:h-7 sm:w-7"/>
                </a>
            </div>

            <div className="flex flex-row items-center gap-2 order-last lg:order-none">
                <p className="text-sm sm:text-base text-white">{en.FOOTER.productOf}</p>
                <img src={rnnFooterLogo} alt="RNN" className="h-5 sm:h-6"/>
            </div>

            <p className="text-sm sm:text-base text-white">{en.FOOTER.copyright}</p>
        </div>
    </footer>
  )
}

export default Footer;