import Contact from './components/Contact';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WorkFlow from './components/WorkFlow';

const App = () => {
  return (
    <>
     <Navbar />
     <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Assigning IDs for navigation */}
        <section id="home" className="pt-20">
          <HeroSection />
        </section>
        <section id="services" className="pt-20">
          <FeatureSection />
        </section>
        <section id="about-us" className="pt-20">
          <WorkFlow />
        </section>
        <section id="contact" className="pt-20">
          <Contact />
        </section>
      <Footer />
     </div>
    </>
  )
}

export default App