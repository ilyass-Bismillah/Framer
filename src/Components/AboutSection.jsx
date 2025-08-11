import { FaFeatherAlt, FaRegBell, FaArrowRight } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { PiLockBold } from "react-icons/pi";

const grid = [
    {
        icon: <FaFeatherAlt size={24}/>,
        title: "Integration ecosystem",
        text: "Track your progress and motivate your efforts everyday.",
    },
    {
        icon: <GoGoal size={24}/>,
        title: "Goal setting and tracking",
        text: "Set and track goals with manageable task breakdowns.",
    },
    {
        icon: <PiLockBold size={24}/>,
        title: "Secure data encryption",
        text: "Ensure your data’s safety with top-tier encryption.",
    },
    {
        icon: <FaRegBell size={24}/>,
        title: "Customizable notifications",
        text: "Get alerts on tasks and deadlines that matter most.",
    },
];

const AboutSection = () => {
  return (
    <div className='bg-about-image bg-cover bg-no-repeat mt-20' id="about">
        <p className='font-medium text-sm border border-gray-300 rounded-xl px-3 py-1 w-44 m-auto'>Boost your productivity</p>
        <h2 className="bg-gradient-to-b from-[#000000] to-[#001354] text-transparent bg-clip-text font-bold font-DM flex flex-col text-3xl md:text-6xl py-10 tracking-tighter md:-tracking-widest text-center">A more effective way to<span className='text-center'>track progress</span></h2>
        <p className='font-inter font-medium text-[#010D3E] text-lg md:text-xl tracking-wide text-center w-[330px] md:w-[535px] m-auto'>
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components for Framer.
        </p>
        <div className='relative'>
            <img src="/src/assets/Framer/Product Image.png" className='m-auto lg:w-[1400px]'/>
            <img src="/src/assets/Framer/torus 1.png" className='absolute left-0 bottom-36 hidden sm:block'/>
            <img src="/src/assets/Framer/pyramid 1.png" className='absolute right-0 lg:top-44 md:-top-28 hidden sm:block'/>
        </div>
        <div className="grid md:grid-cols-2 gap-y-20 mt-10 lg:grid-cols-4 px-14 gap-5 pb-32 place-items-center">
            {grid.map((item) => (
                <div key={item} className="space-y-2 w-[260px]">
                    <span className="">{item.icon}</span>
                    <h3 className="font-DM font-bold text-lg tracking-wide">{item.title}</h3>
                    <p className="font-inter font-medium tracking-wide text-base">{item.text}</p>
                    <button className="flex items-center font-medium text-base tracking-wide">Learn more<span className="px-2"><FaArrowRight /></span></button>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default AboutSection
