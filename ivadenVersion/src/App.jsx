import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, CheckCircle, Users, Target, Lightbulb, Shield, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import logo from './assets/logo2.png';
import team from './assets/image1.jpeg';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'advantage', 'experience', 'values', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'advantage', label: 'Advantage' },
    { id: 'experience', label: 'Experience' },
    { id: 'values', label: 'Values' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: '💼',
      title: 'Business Advisory & Capital Raising',
      description: 'Supporting MSMEs with growth strategies, financial management, investment readiness, and connecting enterprises to debt, equity, and blended finance opportunities.'
    },
    {
      icon: '📋',
      title: 'Program Design & Management',
      description: 'Providing end-to-end management of donor-funded initiatives, from conceptualization to execution with proven results.'
    },
    {
      icon: '📊',
      title: 'Monitoring, Evaluation & Learning',
      description: 'Designing robust MEL frameworks, conducting impact assessments, and generating actionable insights for continuous improvement.'
    },
    {
      icon: '⚖️',
      title: 'Gender & Social Inclusion Advisory',
      description: 'Applying a gender-lens to investments and programs, ensuring women and youth are meaningfully engaged and benefit equitably.'
    },
    {
      icon: '🏛️',
      title: 'Policy & Strategy Advisory',
      description: 'Engaging with governments, donors, and stakeholders to shape enabling environments for inclusive economic growth.'
    },
    {
      icon: '💻',
      title: 'IT & Digital Business Solutions',
      description: 'Technology-driven solutions including digital financial systems, business intelligence tools, and enterprise automation for improved efficiency.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We act with transparency and accountability in all our engagements'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We design creative and practical solutions for complex challenges'
    },
    {
      icon: Users,
      title: 'Inclusion',
      description: 'We ensure no one is left behind in our development approach'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure success by the transformation we create in communities'
    }
  ];

  const experiences = [
    {
      title: '🌊 Blue Economy Development',
      description: 'Designed and implemented gender-lensed programs in Kenya\'s Blue Economy, empowering women fish traders and aquaculture entrepreneurs.'
    },
    {
      title: '💰 Capital Raising Success',
      description: 'Supported MSMEs in raising growth capital through comprehensive financial structuring, investor linkages, and investment readiness support.'
    },
    {
      title: '🔧 Digital Solutions Implementation',
      description: 'Introduced cutting-edge digital solutions to improve accounting, monitoring, and supply chain management for SMEs.'
    },
    {
      title: '🤝 Stakeholder Engagement',
      description: 'Facilitated multi-sector partnerships and stakeholder engagement initiatives to address systemic barriers facing women and youth enterprises.'
    },
    {
      title: '📚 Capacity Building Excellence',
      description: 'Conducted comprehensive training programs on donor compliance, financial management, and impact reporting for community-based enterprises.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Major Donors Served' },
    { number: '4', label: 'Key Sectors' },
    { number: '100+', label: 'Enterprises Supported' },
    { number: '10+', label: 'Years Experience' }
  ];

  const advantages = [
    'Proven expertise in managing donor-funded programs (GAC, SIDA, FCDO, EU, USAID)',
    'Deep sectoral experience in Blue Economy, Agriculture, Renewable Energy, and Climate Finance',
    'Demonstrated success in capital raising by linking enterprises to local and international financiers',
    'Strong networks with local enterprises, women\'s groups, and investors',
    'Digital transformation capability through innovative IT solutions',
    'Technical excellence combined with hands-on field experience, grounded in Africa\'s realities'
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10  rounded-full flex items-center justify-center text-white font-bold text-lg">
                  <img src={logo} alt="Logo" className="w-8 h-8" />
                </div>
                <span className="font-bold text-xl text-[#005E7F] dark:text-[#F9B916]">
                  Ivaden
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                        ? 'text-[#005E7F] dark:text-[#F9B916] bg-[#005E7F]/10 dark:bg-[#003f57]/40'
                        : 'text-gray-700 dark:text-gray-300 hover:text-[#005E7F] dark:hover:text-[#F9B916]'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeSection === item.id
                        ? 'text-[#005E7F] dark:text-[#F9B916] bg-[#005E7F]/10 dark:bg-[#003f57]/40'
                        : 'text-gray-700 dark:text-gray-300 hover:text-[#005E7F] dark:hover:text-[#F9B916]'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>


        {/* Home Section */}
        <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#005E7F] via-[#005E7F] to-[#003f57] dark:from-[#004d66] dark:via-[#003f57] dark:to-black"></div>
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F9B916]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#005E7F]/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/30">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              IVADEN CONSULTANCY
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 opacity-90">
              Driving Inclusive Growth, Innovation, and Impact
            </p>

            <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-12 opacity-80 leading-relaxed">
              Advancing sustainable development, inclusive finance, and enterprise growth across Africa through innovative solutions, strategic partnerships, and measurable impact.
            </p>

            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center px-8 py-4 
                 bg-[#F9B916] text-[#005E7F] font-semibold 
                 rounded-lg hover:bg-[#e0a800] hover:text-white 
                 transition-colors duration-200 group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-[#001f29]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#005E7F] dark:text-[#F9B916]">About Ivaden Consultancy</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Empowering Africa's Future Through Strategic Excellence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#005E7F] dark:text-[#F9B916]">Who We Are</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ivaden Consultancy is a dynamic advisory firm dedicated to advancing sustainable development, inclusive finance, and enterprise growth across Africa. Founded with a commitment to unlock opportunities for women, youth, and marginalized communities, we bring deep expertise in program management, investment readiness, monitoring & evaluation, and policy advisory.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-[#F9B916]">
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    Our work sits at the intersection of <strong>business, capital, technology, gender, and impact</strong>, positioning us as a trusted partner for development organizations, governments, investors, and social enterprises.
                  </p>
                </div>
              </div>

              <div className="bg-gray-200 dark:bg-gray-700 h-80 w-full rounded-lg overflow-hidden">

                <img src={team} alt="Team Image" className='w-full h-full object-cover' />

              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#005E7F] dark:text-[#F9B916]">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To be a leading consultancy in Africa that catalyzes inclusive, sustainable, and scalable solutions for businesses and communities.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-[#005E7F] dark:text-[#F9B916]">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  To empower enterprises and development partners with <strong>insights, strategies, and technical support</strong> that drive measurable impact, financial sustainability, and gender transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-[#001f29]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#005E7F] dark:text-[#F9B916]">Our Core Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Comprehensive Solutions for Sustainable Growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-[#005E7F] dark:text-[#F9B916]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantage Section */}
        <section id="advantage" className="py-20 bg-gray-50 dark:bg-[#001f29]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#005E7F] dark:text-[#F9B916]">Our Competitive Advantage</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                What Sets Us Apart in the Market
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-[#003f57] p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#005E7F] dark:text-[#F9B916] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-[#003f57] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-[#005E7F] dark:text-[#F9B916]">
                Why Choose Us
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#F9B916] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-200">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white dark:bg-[#001f29]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#005E7F] dark:text-[#F9B916]">Selected Experience</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Proven Track Record of Impact
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-[#F9B916]"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#005E7F] dark:text-[#F9B916]">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {experience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="py-20 bg-gray-50 dark:bg-[#001f29]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#005E7F] dark:text-[#F9B916]">
                Our Values
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                The Principles That Guide Our Work
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center border-t-4 border-[#F9B916]"
                  >
                    <div className="w-16 h-16 bg-[#F9B916]/20 dark:bg-[#F9B916]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#005E7F] dark:text-[#F9B916]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#005E7F] dark:text-[#F9B916]">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="bg-[#005E7F] dark:bg-[#003f57] p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl font-semibold mb-4 text-[#F9B916]">
                Why Choose Ivaden Consultancy?
              </h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto text-white/90">
                At Ivaden Consultancy, we don't just provide services – we build partnerships that drive lasting change.
                Our unique combination of technical expertise, local knowledge, and commitment to inclusion makes us the
                ideal partner for organizations looking to create meaningful impact in Africa's development landscape.
              </p>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-[#003f57]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-[#005E7F] dark:text-[#F9B916]">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Ready to Drive Impact? Get in Touch
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-[#005E7F] dark:text-[#F9B916]">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F9B916]/20 dark:bg-[#F9B916]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#005E7F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#005E7F] dark:text-[#F9B916]">Address</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        P.O. Box 373-90200, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F9B916]/20 dark:bg-[#F9B916]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#005E7F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#005E7F] dark:text-[#F9B916]">Phone</h4>
                      <p className="text-gray-700 dark:text-gray-300">+254 711 147 134</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F9B916]/20 dark:bg-[#F9B916]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#005E7F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#005E7F] dark:text-[#F9B916]">Email</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        ivadenconsultancy@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F9B916]/20 dark:bg-[#F9B916]/10 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-[#005E7F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#005E7F] dark:text-[#F9B916]">LinkedIn</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        <a
                          href="https://www.linkedin.com/company/ivaden-consultancy"
                          className="hover:text-[#F9B916]"
                        >
                          IvadenConsultancy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Call to Action */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-[#005E7F] dark:text-[#F9B916]">
                  Ready to Transform Your Impact?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Whether you're a development organization, government entity, investor, or social enterprise,
                  Ivaden Consultancy is here to help you achieve your goals.
                </p>
                <div className="bg-[#F9B916] p-6 rounded-lg text-[#005E7F] font-semibold">
                  <p className="text-lg">
                    Contact us today to discuss how we can support your next initiative and drive meaningful change together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#005E7F] dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-white font-bold">
                <img src={logo} alt="Logo" className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-[#F9B916]">
                Ivaden Consultancy
              </span>
            </div>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Ivaden Consultancy. Driving Inclusive Growth, Innovation, and Impact.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;