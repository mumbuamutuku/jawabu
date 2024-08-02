import React, { useEffect, useState } from 'react';
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa"
import { fin, logo } from '../../assets';
import {HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        element.classList.remove("dark");
        localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <>
    <header className=" fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[4px] border-primary/50">
      <nav className="container flex items-center justify-between h-[70px] py-2 px-2">
        {/* logo section */}
        <div className="text-2xl md:text-3xl text-white">
            <a href="/">
            {/* <img src={logo} alt="Logo" className="h-20 w-20" /> */}
            JB<span className="inline-block font-bold text-primary">CS</span>
            </a>
        </div>
        {/* Desktop Section */}
        <div className="hidden md:block">
            <ul className=" flex items-center gap-10">
                <li className="group relative cursor-pointer">
                    <a href='/' className="flex items-center gap-[2px] h-[72px]"> Home{" "}
                <span> <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" /></span>
                 </a>
                 {/* Drop down Menu */}
                 <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-gray-100 shadow-md p-2 text-black rounded-md group-hover:block">
                    <ul className="space-y-3">
                        <li className="p-2 hover:bg-violet-200">Finance</li>
                        <li className="p-2 hover:bg-violet-200">Technology</li>
                        <li className="p-2 hover:bg-violet-200">Grants</li>
                        <li className="p-2 hover:bg-violet-200">Proposal Writing</li>
                        <li className="p-2 hover:bg-violet-200">Virtual Assistant Services</li>
                    </ul>
                 </div>
                 </li>
                <li>About Us</li>
                <li className="group cursor-pointer">
                    <a href='/' className="flex items-center gap-[2px] h-[72px]">
                    Solutions{" "}
                <span> <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" /></span>
                 </a>
                 {/* Drop down full width Menu */}
                 <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-gray-100 p-2 text-black shadow-md group-hover:block">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="overflow-hidden">
                            <img 
                              src={fin} 
                              alt="finance" 
                              className="max-h-[300px] w-full rounded-b-3xl object-fill" 
                            />
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-xl font-semibold">Finance / Business</h1>
                            <p className="text-sm text-slate-600">
                                Our finance Consulting ambition is to be the market leader in the
                                finance transformation space though technology and support our 
                                clients’ transformations that rely on data and empirical evidence 
                                of what really leads to successful transformations.
                            </p>
                            <div className="grid grid-cols-3 mt-4">
                                <div>
                                    <h1 className="pb-1 text-xl font-semibold">Technology</h1>
                                    <ul>
                                        <li className="cursor-pointer text-black/80 hover:text-primary">Web Development</li>
                                        <li className="cursor-pointer text-black/80 hover:text-primary">System Adminstrator</li>
                                        <li className="cursor-pointer text-black/80 hover:text-primary">Software Development</li>
                                    </ul>
                                </div>
                                <div>
                                    <h1 className="pb-1 text-xl font-semibold">Grants</h1>
                                    <ul>
                                        <li className="cursor-pointer text-black/80 hover:text-primary">Grant Writing</li>
                                        <li className="cursor-pointer text-black/80 hover:text-primary">Proposal Writing</li>
                                        <li className="cursor-pointer text-black/80 hover:text-primary">Project Management </li>
                                    </ul>
                                </div>
                                <div>
                                    <img src={fin} alt="not found" />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                 </div>
                 </li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>
                    <div className="flex items-center gap-4">
                        <div>
                            <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                        </div>
                        <div>
                            <p>Need help? Call us: </p>
                            <p> <a href="tel: +254733929096"></a> +254 733 929096 </p>
                        </div>
                    </div>
                </li>
                {/**Switch mode */}
                {
                    theme === "dark" ? (
                      <BiSolidSun className="text-2xl" 
                      onClick={() => setTheme ("light")} />
                    ) : (
                      <BiSolidMoon className="text-2xl" 
                      onClick={() => setTheme ("dark")} />
                    )
                }
            </ul>
        </div>
        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
            {/**Switch mode */}
            {
                theme === "dark" ? (
                    <BiSolidSun className="text-2xl" 
                    onClick={() => setTheme ("light")} />
                ) : (
                    <BiSolidMoon className="text-2xl" 
                    onClick={() => setTheme ("dark")} />
                )
            }
            {
                showMenu ? (
                    <HiMenuAlt1 
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all size={30}"
                    />
                ) : (
                    <HiMenuAlt3
                      onClick={toggleMenu}
                      className="cursor-pointer transition-all size={30}"
                    />
                )
            }
           
        </div>
       </nav>  
    </header>
    {/* Mobile Menu section */}
    <ResponsiveMenu showMenu = {showMenu} />
    </>
  );
};

export default Navbar