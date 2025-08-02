import React from "react";
import rnnFooterLogo from "../assets/rnnFooterLogo.svg";
import arrowIcon from "../assets/arrowIcon.svg";
import linkedinIcon from "../assets/Linkedin.svg";
import twitterIcon from "../assets/Twitter.svg";
import groupBackground from "../assets/Group.svg";
import slack from "../assets/slack.svg";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here
  };

  return (
    <footer className="relative mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[51px] py-8 sm:py-12 w-full bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-start gap-3 sm:gap-4">
          <img
            src={rnnFooterLogo}
            alt="React Native Nigeria Logo"
            className="h-8 sm:h-10 md:h-12"
          />
          <p className="text-white text-sm sm:text-base">
            contact@reactnativenigeria.com
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 text-white">
          <p className="text-base sm:text-lg font-semibold">Quick Links</p>

          <div className="flex flex-col gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4 text-[#D4D4D4] text-sm sm:text-base">
            <a
              className="cursor-pointer hover:text-white transition-colors duration-300"
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Agreement
            </a>
            <a
              className="cursor-pointer hover:text-white transition-colors duration-300"
              href="https://photos.google.com/share/AF1QipPc49tLOW3EZO1RMO8awcVCBIBz92OMZIiHhSCtQKhlLP5-ro4m3vYbsdezylP0yg?key=cE5LeVNNelh0dEJNNHIxRU1mWDhWMG1wd0FsUkJn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gallery
            </a>


            <a
              className="cursor-pointer hover:text-white transition-colors duration-300"
              href="/privacyPolicy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            {/* <a
              className="cursor-pointer hover:text-white transition-colors duration-300"
              href="/donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a> */}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <p className="text-base sm:text-lg text-white">Subscribe</p>
          <form
            className="flex flex-row rounded-md overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              name="email"
              placeholder="Stay Updated"
              className="bg-white py-2 sm:py-3 px-2 sm:px-3 flex-1 text-sm sm:text-base focus:outline-none"
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-lightCyan p-2 sm:p-3 md:p-4 cursor-pointer hover:bg-blue-500 transition-colors duration-300"
              aria-label="Subscribe"
            >
              <img
                src={arrowIcon}
                alt="Submit"
                className="h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-600 my-6 sm:my-8"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 text-center lg:text-left">
        <div className="flex flex-row items-center gap-3 sm:gap-4">
          <a
            aria-label="React Native Nigeria LinkedIn"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
            href="https://www.linkedin.com/company/react-native-nigeria-community/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </a>

          <a
            aria-label="React Native Nigeria Twitter"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
            href="https://x.com/ReactNativeNG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </a>

          <a
            aria-label="React Native Nigeria Slack"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
            href="https://slack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={slack}
              alt="Slack"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </a>
        </div>

      

        <p className="text-sm sm:text-base text-white">
          © 2025 React Native Nigeria. All rights reserved.
        </p>
      </div>

      <img
        src={groupBackground}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto opacity-70"
        aria-hidden="true"
      />
    </footer>
  );
};

export default Footer;
