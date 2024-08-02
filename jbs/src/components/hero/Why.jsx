import React from 'react'
import { skill, tec, tech, why1, why2, why3, why4 } from '../../assets'

const Why = () => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left md:order-1"
              
            >
              <h3 className="text-lg font-bold text-primary">Why Choose Us</h3>
              <h1 className="text-2xl md:text-4xl ">
              Developing solutions that are easy to use and navigate
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
              Leverage modern business applications and smart data solutions that help your company digitally transform and grow without compromise to achieve:
              </p>
              <div className="grid grid-cols-2 flex-col gap-2  md:gap-4">
                <div className="justify-center flex">
                    <img src={why1} alt="Not found" className="w-[40px] h-[40px] hover:grayscale rounded-none hover:rounded-full transition-all duration-200"/>
                    <p className="px-2 font-serif">
                      An Integrated Modern IT Infrastructure
                    </p>
                </div>
                <div className="justify-items-start flex">
                    <img src={why2} alt="Not found" className="w-[40px] h-[40px] hover:grayscale rounded-none hover:rounded-full transition-all duration-200"/>
                    <p className="px-2 font-serif">
                        Exceptional Customer Experiences </p></div>
                <div className="justify-center flex">
                    <img src={why3} alt="Not found" className="w-[40px] h-[40px] hover:grayscale rounded-none hover:rounded-full transition-all duration-200"/>
                    <p className="px-2 font-serif">Actionable Business Insight & Visibility</p></div>
                <div className="justify-items-start flex">
                    <img src={why2} alt="Not found" className="w-[40px] h-[40px] hover:grayscale rounded-none hover:rounded-full transition-all duration-200"/>
                    <p className="px-2 font-serif">Operational Excellence</p></div>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Get Quote
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className="order-1"
            >
              <img
                src={tech}
                alt="No image"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}

export default Why