import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDraw, setMobileDraw] = useState(false)

    const toggleNavbar = () => {
        setMobileDraw(!mobileDraw);
    };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="logo" className="h-10 w-10 mr-2"/>
                    <span className="text-xl tracking-tight">IVADEN <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">CONSULTANCY</span></span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDraw ? <X /> : <Menu /> }
                    </button>
                </div>
            </div>
            {mobileDraw && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex 
                flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}className="py-4 hover:cursor-pointer hover:bg-orange-700">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                </div>   
            )}
        </div>
    </nav>
  )
}

export default Navbar