import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import logo from "../assests/logo.png"

function Footer() {
  return (
    <footer className='bg-[url("../public/images/navbar.jpg")] h-40 w-full bg-cover bg-bottom p-24 '>
        <div className="flex items-center justify-center space-x-4">
        <img src={logo} alt="Logo" className="h-20 mr-4" />
          <FaInstagram size={30} className='text-white hover:text-yellow-500' />
          <FaFacebook size={30} className='text-white hover:text-yellow-500' />
          <FaTwitter size={30} className='text-white hover:text-yellow-500' />
          
          <a href="https://github.com/jamnjeri/phase-4-final-project" className="text-gray-400 hover:text-gray-500">
            <FaGithub size={30} className='text-white hover:text-yellow-500' />
          </a>
      </div>
    </footer>
  )
}

export default Footer