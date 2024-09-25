import { useState, useEffect } from "react";

const HeroSection = () => {
   const solutions = [
      "Business Solutions",
      "IT Consulting",
      "Software Development",
      "Finance Modelling",
      "Data Solutions",
      "API Integration",
      "Application Maintanance",
      "Database Solutions"
    ];
  
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % solutions.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }, [solutions.length]);
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Ivaden Provide {" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {solutions[index]}
            </span>
       </h1>
       <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
       Ivaden Consultancy has been providing Business, Finance & IT infrastructure services in combination with innovative practices and ability to engage with new business models. Adding values to businesses with a stark growth in profitability is our aim.
       </p>
       <div className="flex justify-center my-10">
        <a href="https://wa.me/254741305364?text=Hello. how can I help you?" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 mx-3 rounded-md">
          Getting Started
        </a>
        <a href="#contact" className="py-3 px-4 mx-3 rounded-md border">
          Contact Us
        </a>
       </div>

    </div>
  )
}

export default HeroSection