import { FaArrowRight } from "react-icons/fa";
import Cylinder from "../assets/Framer/cylinder1.png";
import Visual from "../assets/Framer/Visual.png";
import HalfTorus from "../assets/Framer/half-torus1.png";

const HeroSection = () => {
  return (
    <div className="lg:h-[95vh] md:h-[85vh] h-[63rem] bg-hero-image bg-no-repeat bg-cover w-full relative overflow-hidden lg:overflow-visible">
      <div className="md:px-10 md:pt-28 px-5 pt-12">
        <p className="font-medium border border-gray-300 rounded-xl w-40 py-1 px-3">
          Version 2.0 is here
        </p>
        <h1 className="bg-gradient-to-b from-[#000000] to-[#001354] text-transparent bg-clip-text md:font-bold font-semibold font-DM flex flex-col text-5xl md:text-8xl py-10 tracking-tighter">
          Pathway to <span className="">productivity</span>
        </h1>
        <p className="text-[#010D3E] font-inter text-xl md:text-2xl leading-8 -tracking-wider max-w-xs md:max-w-md">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex items-center space-x-5 mt-5 md:mt-10">
          <button className="text-white bg-black rounded-xl px-5 py-2">
            Get for free
          </button>
          <a className="flex items-center font-medium" href="">
            Learn more
            <span className="px-2">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className="">
        <img
          src={Cylinder}
          className="absolute top-10 lg:left-[37%] md:left-[55%] hidden md:block"
        />
        <img
          src={Visual}
          className="absolute bottom-16 md:top-14 md:-right-80 lg:top-10 lg:right-0 "
        />
        <img
          src={HalfTorus}
          className="absolute right-0 -bottom-28 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
