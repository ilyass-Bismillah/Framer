import { FaXTwitter, FaPinterest, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='bg-black flex flex-col md:flex-row md:items-center justify-between pt-10 md:pt-0'>
      <div className="px-3">
        <img src="/src/assets/Framer/Default.png" className="w-20"/>
        <div className="px-4 mt-3">
        <p className="font-inter font-medium text-lg text-[#BCBCBC] md:w-[270px]">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
        <div className="flex items-center space-x-5 mt-10 md:mt-28">
            <a href=""><FaXTwitter size={24} color="#808080"/></a>
            <a href=""><AiFillInstagram size={30} color="#808080"/></a>
            <a href=""><FaPinterest size={24} color="#808080"/></a>
            <a href=""><FaLinkedin size={24} color="#808080"/></a>
            <a href=""><FaTiktok size={24} color="#808080"/></a>
            <a href=""><FaYoutube size={30} color="#808080"/></a>
        </div>
        </div>
      </div>
      <div className="text-[#7B7B7B] flex flex-col md:flex-row md:space-x-16 font-inter font-medium py-12 px-8 md:px-0">
        <div className="flex flex-col space-y-5 mb-7 md:mb-0">
            <h4 className="text-white font-bold">Product</h4>
            <a href="">Features</a>
            <a href="">Integrations</a>
            <a href="">Updates</a>
            <a href="">FAQ</a>
            <a href="">Pricing</a>
        </div>
        <div className="flex flex-col space-y-5 mb-7 md:mb-0">
            <h4 className="text-white font-bold">Company</h4>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Careers</a>
            <a href="">Manifesto</a>
            <a href="">Press</a>
            <a href="">Contact</a>
        </div>
        <div className="flex flex-col space-y-5 mb-7 md:mb-0">
            <h4 className="text-white font-bold">Resources</h4>
            <a href="">Examples</a>
            <a href="">Community</a>
            <a href="">Guides</a>
            <a href="">Docs</a>
        </div>
        <div className="flex flex-col space-y-5">
            <h4 className="text-white font-bold">Legal</h4>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Security</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
