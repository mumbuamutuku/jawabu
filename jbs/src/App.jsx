import { useEffect } from "react"
import BannerDetails from "./components/hero/BannerDetails"
import Blogs from "./components/hero/Blogs"
import Footer from "./components/hero/Footer"
import Hero from "./components/hero/Hero"
import SimpleBanner from "./components/hero/SimpleBanner"
import Navbar from "./components/navbar/Navbar"
import OverviewCounter from "./overview counter/OverviewCounter"
import AOS from "aos";
import ServiceCard from "./components/hero/ServiceCard"
import Why from "./components/hero/Why"
import Spann from "./components/hero/Spann"

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-gray-900 bg-white">
    <Navbar />
    <Hero />
    <OverviewCounter />
    <Spann />
    <ServiceCard />
    <BannerDetails />
    <BannerDetails reverse={true} />
   
    <Why />
    <SimpleBanner />
    <Blogs />
    <Footer />
    </div>
  )
}

export default App
