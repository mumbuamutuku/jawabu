import React from 'react'
import { tech } from '../../assets';

const BannerDetails = ({ reverse }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container flex flex-col items-center justify-center py-10 ,d:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          {/* text container */}
          <div className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}>
            <h1 className="text-2xl md:text-4xl ">
              We Provide Solutions To Our Clients            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Our cutting edge Business, IT and Training solutions are all meant to add value to our clients and ensure they only move towards one direction - Growth.
            </p> 
            <div>
              <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                <li className="font-medium">
                  Human Resource - We specialize in developing highly effective, fully customized solutions...
                </li>
                <li className="font-medium">
                  Technology -m Partnering for digital transformation our robust, programmatic structure of...  
                </li>
                <li className="font-medium">
                  Finance - Our Finance Consulting ambition is to be the market leader in the finance...
                </li>
              </ul>
            </div>
            <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Get Started
                </button>
              </div>
         </div>
         {/* img container */}
         <div className={reverse ? "order-1" : ""} >
           <img src={tech} alt="not found" className="mx-automax-w-[400px]" />
         </div> 
        </div>
      </div>
    </section>
  );
};

export default BannerDetails