//import React from 'react'
import {logo} from "../../assets/index"
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    
      <div className="w-full h-20 bg-white border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">       
          <div>
            <img className="w-28" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Home</li>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">About Us</li>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Solutions</li>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Contact Us</li>
            <li className="text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Blog</li>
          </ul>
          <Link to ="/cart">
            <div className="relative">
                <FaLinkedin className="w-6" />
            </div>
            <div className="relative">
                <FaInstagram className="w-6" />
            </div>
            <div className="relative">
                <FaTwitter className="w-6" />
            </div>
          </Link>
          <Link to="/login">
            <img className="w-8 h-8 rounded-full"
              src={
                 "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto-compress&cs-tinysrgb&w-1260&h-750&dpr-1"
             }
              alt="userLogo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header