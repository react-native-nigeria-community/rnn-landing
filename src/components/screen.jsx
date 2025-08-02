import React from "react";
import BackgroundImage from "../components/background";
import Navbar from "../components/navbar"; 
import Contact from "../components/contact";
import Footer from "../components/footer";

const Screen = (props) => {
    return (
        <div className="min-h-screen">
            <BackgroundImage height="30vh">
                <Navbar />

                {/* Centered Heading */}
                <div className="flex justify-center items-center h-[30vh] px-4">
                    <div className="flex flex-col gap-4 sm:gap-6 w-full text-center">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] leading-tight lg:leading-[70px] font-bold">
                            {props.title || "Our "}
                            <span className="text-[#67D8F7] font-semibold">
                                Events!
                            </span>
                        </h1>
                    </div>
                </div>
            </BackgroundImage>

            {/* Page Content */}
            <div>
                {props.children}
            </div>

            {/* Contact & Footer */}
            <div>
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Screen;
