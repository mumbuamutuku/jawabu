import React from 'react'
import { banner } from '../../assets'

const Hero = () => {
  return (
    <div className="h-[650px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20">
      <section className="container flex h-[650px] flex-col items-center justify-between md:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          {/* hero text container */}
          <div className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left">
            <h1 className="text-4xl">
              Aiming for Collective Growth
            </h1>
            <p className="">
            We prioritize collaboration and believe in the strength of the collective, creating a culture that fosters teamwork and belonging in the pursuit of professional and personal growth.
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Get Quote
              </button>
              <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                Contact us
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-xs p-4">
            <img src={banner} alt="Banner" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero