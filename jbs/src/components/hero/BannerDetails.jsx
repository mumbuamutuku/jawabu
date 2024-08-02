import React from "react";
import Banner from "../../assets/blog2.jpg";
import { tech } from "../../assets";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fadeInLeft"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1  data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true" className="text-3xl text-accent font-light mb-2 text-primary">About us</h1>
              <h1 className="text-2xl md:text-4xl ">
              Get Ready for Success with JBCS. Your Path to Growth
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
              As your business grows, your challenges often grow with it. Our team works closely with yours to understand what’s keeping you from achieving your growth potential and identify solutions that accelerate you forward.
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                  Finance -            
                  Improving the performance of our clients’ finance organizations
                  </li>
                  <li className="font-medium">
                   Technology
                  </li>
                  <li className="font-medium">Business Consultancy.</li>
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                  Learn More
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
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
  );
};

export default BannerDetails;