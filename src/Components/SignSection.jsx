import { FaArrowRight } from "react-icons/fa";
import Emojistar from "../assets/Framer/emojistar1.png";
import Helix from "../assets/Framer/helix21.png";

const SignSection = () => {
  return (
    <div
      className="mt-40 md:mt-60 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] relative h-[460px] overflow-x-hidden lg:overflow-visible"
      id="signUp"
    >
      <h2 className="bg-gradient-to-b from-[#000000] to-[#001354] text-transparent bg-clip-text font-bold font-DM flex flex-col text-4xl w-[200px] md:w-full m-auto md:text-7xl py-10 tracking-tighter text-center">
        Sign up for free today
      </h2>
      <p className="font-inter font-medium text-[#010D3E] text-lg md:text-xl tracking-wide text-center px-5 md:px-24 lg:px-80">
        Celebrate the joy of accomplishment with an app designed to track your
        progress and motivate your efforts.
      </p>
      <div className="flex items-center justify-center space-x-5 mt-10">
        <button className="text-white text-lg font-inter bg-black rounded-xl px-5 py-2">
          Get for free
        </button>
        <button className="flex items-center text-lg font-medium">
          Learn more
          <span className="px-2">
            <FaArrowRight />
          </span>
        </button>
      </div>
      <img
        src={Emojistar}
        className="absolute md:-left-48 md:-top-16 lg:-top-20 lg:left-0 hidden sm:block"
      />
      <img
        src={Helix}
        className="absolute md:-right-40 md:top-10 lg:right-0 lg:top-5 hidden sm:block"
      />
    </div>
  );
};

export default SignSection;
