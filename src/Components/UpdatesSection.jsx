import Image1 from "../assets/Framer/Ellipse1(2).png";
import Image2 from "../assets/Framer/Ellipse1(5).png";
import Image3 from "../assets/Framer/Ellipse1(8).png";
import Image4 from "../assets/Framer/Ellipse1(1).png";
import Image5 from "../assets/Framer/Ellipse1(4).png";
import Image6 from "../assets/Framer/Ellipse1(7).png";
import Image7 from "../assets/Framer/Ellipse1.png";
import Image8 from "../assets/Framer/Ellipse1(3).png";
import Image9 from "../assets/Framer/Ellipse1(6).png";

const UpdatesSection = () => {
  return (
    <div className="mt-40" id="updates">
      <p className="font-medium text-base border border-gray-300 rounded-xl px-4 py-2 w-32 m-auto">
        Testimonials
      </p>
      <h2 className="bg-gradient-to-b from-[#000000] to-[#001354] text-transparent bg-clip-text font-bold font-DM flex flex-col w-[163px] md:w-full text-3xl md:text-6xl py-10 tracking-tighter text-center m-auto">
        What our users say
      </h2>
      <div className="md:columns-3 justify-items-center md:gap-60 lg:px-32 overflow-hidden lg:overflow-visible">
        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[234px] border-opacity-10 opacity-50 hidden sm:block">
          <p className="font-inter font-medium tracking-wider bg-gradient-to-b from-gray-200 to-gray-800 text-transparent bg-clip-text">
            <span className="">
              As a seasoned designer always on the lookout for innovative
            </span>{" "}
            tools, Framer.com instantly grabbed my attention.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image1}
              width="400"
              height="400"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Alex Rivera</h3>
              <p className="font-inter font-normal">@jamietechguru00</p>
            </div>
          </div>
        </div>

        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[211px] my-7 hidden sm:block">
          <p className="font-inter font-medium tracking-wider">
            Our team’s productivity has skyrocketed since we started using this
            tool.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image2}
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Josh Smith</h3>
              <p className="font-inter font-normal">@jjsmith</p>
            </div>
          </div>
        </div>

        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[211px] hidden sm:block">
          <p className="font-inter font-medium tracking-wider">
            This app has completely transformed how I manage my projects and
            deadlines.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image3}
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Morgan Lee</h3>
              <p className="font-inter font-normal">@morganleewhiz</p>
            </div>
          </div>
        </div>

        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[211px] border-opacity-10 opacity-50">
          <p className="font-inter font-medium tracking-wider bg-gradient-to-b from-gray-200 to-gray-800 text-transparent bg-clip-text">
            I was amazed at how quickly we were able to integrate this app into
            our workflow.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image4}
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Casey Jordan</h3>
              <p className="font-inter font-normal"> @caseyj</p>
            </div>
          </div>
        </div>

        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[257px] my-7">
          <p className="font-inter font-medium tracking-wider">
            Planning and executing events has never been easier. This app helps
            me keep track of all the moving parts, ensuring nothing slips
            through the cracks.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image5}
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Taylor Kim</h3>
              <p className="font-inter font-normal">@taylorkimm</p>
            </div>
          </div>
        </div>

        <div className="p-8 border-2 border-b-0 border-gray-100 rounded-3xl md:shadow-xl w-[325px] h-[211px] opacity-50 bg-gradient-to-t from-gray-400 to-gray-700 text-transparent bg-clip-text md:from-black md:to-black md:opacity-80">
          <p className="font-inter font-medium tracking-wider bg-gradient-to-t from-gray-400 to-gray-700 text-transparent bg-clip-text md:from-black md:to-black">
            The customizability and integration capabilities of this app are
            top-notch.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image6}
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Riley Smith</h3>
              <p className="font-inter font-normal">@rileysmith1</p>
            </div>
          </div>
        </div>

        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[257px] border-opacity-10 opacity-50 hidden sm:block">
          <p className="font-inter font-medium tracking-wider bg-gradient-to-b from-gray-200 to-gray-800 text-transparent bg-clip-text">
            Adopting this app for our team has streamlined our project
            management and improved communication across the board.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image7}
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Jordan Patels</h3>
              <p className="font-inter font-normal">@jpatelsdesign</p>
            </div>
          </div>
        </div>

        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[234px] my-1 hidden sm:block">
          <p className="font-inter font-medium tracking-wider">
            With this app, we can easily assign tasks, track progress, and
            manage documents all in one place.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image8}
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Sam Dawson</h3>
              <p className="font-inter font-normal">@dawsontechtips</p>
            </div>
          </div>
        </div>

        <div className="p-8 border border-gray-100 rounded-3xl shadow-xl w-[325px] h-[211px] hidden sm:block">
          <p className="font-inter font-medium tracking-wider">
            Its user-friendly interface and robust features support our diverse
            needs.
          </p>
          <div className="flex gap-4 mt-5">
            <img
              className="w-12 h-12 rounded-full"
              src={Image9}
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div>
              <h3 className="font-inter font-medium">Casey Harper</h3>
              <p className="font-inter font-normal">@casey09</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatesSection;
