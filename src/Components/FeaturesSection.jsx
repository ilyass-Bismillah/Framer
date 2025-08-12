import  cubeHelix  from "../assets/Framer/cube-helix.png"
import  cubeHelix1  from "../assets/Framer/cube-helix1.png"


const FeaturesSection = () => {
  return (
    <div className="mt-20" id="features">
      <p className='font-medium text-sm border border-gray-200 rounded-xl px-3 py-1 w-44 m-auto'>Everything you need</p>
      <h2 className="bg-gradient-to-b from-[#000000] to-[#001354] text-transparent bg-clip-text font-bold font-DM flex flex-col text-3xl md:text-6xl py-10 tracking-tighter text-center">Streamlined for easy<span className='text-center'>management</span></h2>
      <p className='font-inter font-medium text-[#010D3E] text-lg md:text-xl tracking-wide text-center w-[310px] md:w-[535px] m-auto'>
        Enjoy customizable lists, team work tools, and smart tracking all in one place.
         Set tasks, get reminders, and see your progress simply and quickly.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-16">
        <div className="md:w-[486px] w-[370px] h-[538px] text-center shadow-xl py-10 rounded-3xl border-2 border-gray-100">
            <img src={cubeHelix} className="m-auto"/>
            <div className="w-[385px] h-[129px] m-auto mt-2 space-y-3">
            <h3 className="font-DM font-bold text-xl md:text-2xl -tracking-wide">Integration ecosystem</h3>
            <p className="text-[#010D3E] font-inter font-medium text-base md:text-lg w-[300px] md:w-[345px] m-auto">
                Enhance your productivity by connecting with your favorite tools,
                keeping all your essentials in one place.
            </p>
            </div>
        </div>
        <div className="md:w-[486px] w-[370px] h-[538px] text-center shadow-xl py-10 rounded-3xl border-2 border-gray-100">
            <img src={cubeHelix1} className="m-auto"/>
            <div className="w-[385px] h-[129px] m-auto mt-2 space-y-3">
            <h3 className="font-DM font-bold text-xl md:text-2xl -tracking-wide">Goal setting and tracking</h3>
            <p className="text-[#010D3E] font-inter font-medium text-base md:text-lg w-[360px] m-auto">
                Define and track your goals, breaking down objectives
                into achievable tasks to keep your targets in sight.
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
