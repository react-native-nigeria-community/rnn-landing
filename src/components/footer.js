import React from 'react'
import rnnFooterLogo from '../assets/rnnFooterLogo.svg';
import arrowIcon from '../assets/arrowIcon.svg';
import linkedinIcon from '../assets/Linkedin.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/Twitter.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col mt-4">
       <div className="flex flex-col md:flex-row justify-between gap-8">
         <div className="flex flex-col items-start gap-4">
            <img src={rnnFooterLogo} alt="React Native Nigeria"/>
            <p className="text-[20px] text-white">+1 (7635) 547-12-97</p>
            <p className="text-white text-base">support@reactnative.ng</p>
        </div>

        <div className="flex flex-col gap-4 text-white max-w-md">
            <p className="text-[18px] font-semibold">Quick Links</p>
            
            <div className="flex flex-row justify-between gap-8 text-[#D4D4D4] text-base">
                <div className="flex flex-col gap-4">
                    <a className="cursor-pointer" href="terms" target="_blank" rel="noopener noreferrer">Terms and Agreement</a>
                    <a className="cursor-pointer" href="donate" target="_blank" rel="noopener noreferrer">Donate</a>
                </div>
                <div className="flex flex-col gap-4">
                    <a className="cursor-pointer" href="company" target="_blank" rel="noopener noreferrer">Company</a>  
                    <a className="cursor-pointer" href="reactnative" target="_blank" rel="noopener noreferrer">React Native</a>
                </div>
            </div>
        </div>


        <div className="flex flex-col gap-4">
            <p className="text-[18px] text-white">Subscribe</p>
            <div className="flex flex-row justify-between rounded-md overflow-hidden w-full max-w-md ">
                <input type="email" placeholder="Stay Updated" className="bg-white py-3 px-2 w-full sm:w-auto"/>
                <img src={arrowIcon} alt="Arrow" className="bg-[#04B4FC] p-4 cursor-pointer"/>
            </div>
        </div>
       </div>

        <div className="border-t border-gray-500 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="flex flex-row items-center gap-3">
                <a className="cursor-pointer" href="https://www.linkedin.com/company/react-native-nigeria-community/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="Linkedin"/></a>
                <a className="cursor-pointer" href="facebook.com"><img src={facebookIcon} alt="Facebook" target="_blank" rel="noopener noreferrer"/></a>
                <a className="cursor-pointer"  href="https://x.com/ReactNativeNG" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="Twitter"/></a>
            </div>

            <div className="flex flex-row items-center gap-2">
                <p className="text-base text-white">A product of</p>
                <img src={rnnFooterLogo} alt="RNN"/>
            </div>

            <p className="text-base text-white">© 2025 React Native Nigeria. All rights reserved.</p>
        </div>


    </footer>
  )
}

export default Footer;