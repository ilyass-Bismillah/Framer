import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="lg:h-[95vh] md:h-[70vh] h-[63rem] bg-hero-image bg-no-repeat bg-cover">
        <div className="md:px-10 md:pt-28 px-5 pt-12">
        <p className="font-medium border border-gray-300 rounded-xl w-40 py-1 px-3">Version 2.0 is here</p>
        <h1 className="bg-gradient-to-b from-[#000000] to-[#001354] text-transparent bg-clip-text md:font-bold font-semibold font-DM flex flex-col text-5xl md:text-8xl py-10 tracking-tighter">Pathway to <span className="">productivity</span></h1>
        <p className="text-[#010D3E] font-inter text-xl md:text-2xl leading-8 -tracking-wider w-[300px] md:w-[457px]">
            Celebrate the joy of accomplishment with an app designed to track your progress,
            motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex items-center space-x-5 mt-5 md:mt-10">
            <button className="text-white bg-black rounded-xl px-5 py-2">Get for free</button>
            <a className="flex items-center font-medium" href="">Learn more <span className="px-2"><FaArrowRight /></span></a>
        </div>
        </div>
        <img src="/src/assets/Framer/cylinder 1.png" className="absolute top-28 lg:left-[37%] md:left-[55%] hidden sm:block"/>
        <img src="/src/assets/Framer/Visual.png" className="absolute lg:right-0 -bottom-64 md:top-28 md:-right-80"/>
        <img src="/src/assets/Framer/half-torus 1.png" className="absolute right-0 -bottom-36 hidden lg:block"/>
    </div>
  )
}

export default HeroSection
