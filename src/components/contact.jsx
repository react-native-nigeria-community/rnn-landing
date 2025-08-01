import React from 'react';
import contactBackgroundImage from '../assets/contactImage.jpg';

const Contact = () => {
    return (
        <section className="relative py-8 sm:py-12">
            <img
                src={contactBackgroundImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative flex justify-center items-center px-4 sm:px-6 lg:px-8 w-full">
                <form
                    className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 bg-white bg-opacity-90 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 sm:mb-6 text-center">
                        Connect
                        <span className="sm:hidden"> </span> with us
                    </h2>

                    <label
                        htmlFor="name"
                        className="block text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-2"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        autoComplete="name"
                        className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded text-sm sm:text-base"
                        required
                    />

                    <label
                        htmlFor="email"
                        className="block text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        autoComplete="email"
                        className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded text-sm sm:text-base"
                        required
                    />

                    <label
                        htmlFor="message"
                        className="block text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                        autoComplete="off"
                        className="w-full p-2 sm:p-3 mb-3 sm:mb-4 border border-gray-300 rounded text-sm sm:text-base resize-vertical"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-[#04B4FC] py-2 sm:py-3 text-sm sm:text-base font-semibold rounded hover:bg-gray-700 cursor-pointer transition-colors duration-300"
                    >
                        Send Message
                    </button>

                    <div className="flex justify-center items-center my-3 sm:my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-3 sm:mx-4 text-gray-500 font-medium text-sm sm:text-base">
                            Or
                        </span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-white text-black border font-semibold border-gray-300 py-2 sm:py-3 text-sm sm:text-base rounded hover:bg-gray-400 cursor-pointer transition-colors duration-300"
                    >
                        Donate
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
