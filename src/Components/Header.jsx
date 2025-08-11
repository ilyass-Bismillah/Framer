import { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <div className='flex items-center justify-between bg-[#EAEEFE] h-20 px-2'>
      <div className='flex items-center'>
        <img src="/src/assets/Framer/Default.png"/>
        <div className='hidden md:flex items-center'>
        <p className='text-lg'>made by</p>
        <img src="/src/assets/Framer/Vector.png" className='px-2'/>
        <p className='font-bold'>Framer</p>
        </div>
      </div>
      <nav className='items-center md:space-x-5 lg:space-x-7 text-lg mr-3 hidden md:flex'>
        <a className='text-gray-600' href="#about">About</a>
        <a className='text-gray-600' href="#features">Features</a>
        <a className='text-gray-600' href="#customers">Customers</a>
        <a className='text-gray-600' href="#updates">Updates</a>
        <a className='text-gray-600' href="#">Help</a>
        <a className='text-white bg-black px-5 py-2 rounded-xl' href="#signUp">Get for free</a>
      </nav>
      <div className='md:hidden' onClick={toggleMenu}>
        {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
      </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-[#EAEEFE]'>
          <nav className='flex flex-col font-semibold space-y-5 p-2'>
            <a className='text-gray-600' href="#about">About</a>
            <a className='text-gray-600' href="#features">Features</a>
            <a className='text-gray-600' href="#customers">Customers</a>
            <a className='text-gray-600' href="#updates">Updates</a>
            <a className='text-gray-600' href="#">Help</a>
            <a className='text-white bg-black px-5 py-2 rounded-xl' href="#signUp">Get for free</a>
         </nav>
        </div>
      )}
    </header>
  )
}

export default Header
