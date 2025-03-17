import React from "react";
import MainImage from "../assets/images/avatar1.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="h-screen sm:min-h-auto grid place-items-center relative"
    >
      <div className="w-full relative flex justify-evenly">
        <motion.div
          className="flex flex-col text-[#333] p-7"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-[#333] text-4xl lg:text-5xl mb-2 font-extrabold tracking-wide">
            <span className="block">Hi,</span>
            <span className="block">
              I am <span className="text-orange-400">Riktam</span> Nandi
            </span>
          </h1>
          <div className="w-fit">
            <div className="text-[#414141] overflow-hidden border-r-4 border-[orange] whitespace-nowrap text-[2rem] lg:text-[2.4em] w-0 animate-typing-blinking">
              Frontend Developer
            </div>
          </div>
          <a
            href="#projects"
            className="flex items-center justify-center mr-auto mt-5 gap-2 text-[#333] border border-[#555] relative touch-manipulation p-15px-45px after:bg-[#e4b356] after:w-full after:-z-1 after:absolute after:h-full after:top-[7px] after:left-[7px] hover:after:top-0 hover:after:left-0"
          >
            <span className="text-[16px] tracking-wide font-semibold">
              View My Work
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </motion.div>
        <div>
          <div className="lg:w-[350px] lg:h-[350px] hidden lg:block md:block md:w-[280px] md:h-[280px] bg-[#5e17eb] relative overflow-hidden rounded-custom">
            <img
              src={MainImage}
              alt={MainImage}
              className="lg:w-[300px] lg:h-[320px] md:[250px] md:h-[270px] absolute bottom-0 left-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
