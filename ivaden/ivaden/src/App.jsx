import Contact from './components/Contact';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import WorkFlow from './components/WorkFlow';
import {what} from './assets/index.jsx';

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
     <div className="fixed bottom-4 right-4 p-3 z-50">
        <a href="https://wa.me/254741305364?text=Hello. how can I help you?" target="_blank" rel="noopener noreferrer">
          <img src={what} width="60" alt="WhatsApp" />
        </a>
    </div>
    </>
  )
}

export default App