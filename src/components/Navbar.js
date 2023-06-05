import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assests/logo.png"

function Navbar() {
  return (
    <div className='bg-[url("../public/images/navbar.jpg")] h-96 w-full bg-cover bg-center p-24 '>
        <nav className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8' >
            <NavLink to='/'>
                <img src={logo} alt="Logo" className="absolute inset-y-5 left-12 flex items-center w-20 h-20" />
            </NavLink>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className=" hidden sm:block sm:ml-6">
                    <div className="flex space-x-40">
                        <NavLink className="absolute top-0 mt-3 text-white text-4xl hover:text-yellow-500 underline font-Delicious px-3 py-2 rounded-md font-medium" to='/'>Home</NavLink>
                        <NavLink className="absolute top-0 mt-3 text-white text-4xl hover:text-yellow-500 underline font-Delicious px-3 py-2 rounded-md font-medium"  to='/about'>About</NavLink>
                    </div>
                </div>
            </div>  
                <NavLink className='absolute top-0 right-10 mt-3 text-white text-4xl hover:text-yellow-500 underline font-Delicious px-3 py-2 rounded-md' to='/login'>Login</NavLink>
            <div>
                <h1 className='text-white text-6xl font-Delicious text-center mt-9 align-middle'>"LET FOOD BE THY MEDICINE <br /> AND MEDICINE BE THY FOOD"</h1>
                <h1 className='text-white text-4xl font-Delicious text-center mt-3 align-middle'>~ FeastfulWorld</h1>
            </div>
        </nav>
    </div>
  )
}

export default Navbar