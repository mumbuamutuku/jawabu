import React from "react";
import { banner } from "../../assets";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
              Fostering a Culture of Collaboration
            </h1>
            <p className="">
            We prioritize collaboration and believe in the strength of the collective, creating 
            a culture that fosters teamwork and belonging in the pursuit of professional and personal growth.
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Get Started
              </button>
              <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                Get Started
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;