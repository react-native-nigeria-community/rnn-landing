import React from 'react'
import contactBackgroundImage from '../assets/contactImage.jpg';

const Contact = () => {
  return (
    <section className="relative">
        <img src={contactBackgroundImage} alt="Background" className="absolute object-c0ver"/>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative flex justify-center items-center h-full py-12 px-4">
            <form className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-md w-full">
                <h2 className="text-[40px] font-bold mb-6">Want to Connect <br/> with us?</h2>
                <label className="text-[20px] font-semibold">Name</label>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 mb-4 border border-gray-300 rounded" required
                />
                <label className="text-[20px] font-semibold">Email</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded" required
                />
                <label className="text-[20px] font-semibold">Message</label>
                <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3 mb-4 border border-gray-300 rounded" required
                />
                <button
                    type="submit"
                    className="w-full bg-black text-[#04B4FC] py-3 font-semibold rounded hover:bg-gray-700 cursor-pointer"
                >
                    Send Message
                </button>

                <div className="flex justify-center items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 font-medium">Or</span>
                    <div  className="flex-grow border-t border-gray-300"></div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-white text-black border font-semibold border-gray-300 py-3 rounded hover:bg-gray-400 cursor-pointer"
                >
                    Donate
                </button>
            </form>
      </div>
    </section>
  )
}

export default Contact