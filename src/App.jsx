import React, { Suspense, lazy, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Element } from 'react-scroll';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load sections
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Team = lazy(() => import('./sections/Team'));
const WhyChooseUs = lazy(() => import('./sections/WhyChooseUs'));
const Industries = lazy(() => import('./sections/Industries'));
const Blog = lazy(() => import('./sections/Blog'));
const CTA = lazy(() => import('./sections/CTA'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  // Update document title and meta tags dynamically
  useEffect(() => {
    // Set page title
    document.title = 'Zem Global Consultant';
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = 'Expert guidance for MSBs, FinTechs, and payment institutions. 360° regulatory solutions including AML compliance, licensing, and advisory services.';
    }
    
    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = 'Zem Global Consultant';
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = 'Expert guidance for MSBs, FinTechs, and payment institutions. 360° regulatory solutions.';
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingScreen />}>
        <Navbar />
        <ScrollProgress />
        <FloatingCTA />
        <ScrollToTop />
        
        <main>
          <Element name="home">
            <Hero />
          </Element>

          <Element name="about">
            <About />
          </Element>

          <Element name="services">
            <Services />
          </Element>

          <Element name="team">
            <Team />
          </Element>

          <Element name="why-choose-us">
            <WhyChooseUs />
          </Element>

          <Element name="industries">
            <Industries />
          </Element>

          <Element name="blog">
            <Blog />
          </Element>

          <Element name="cta">
            <CTA />
          </Element>

          <Element name="contact">
            <Contact />
          </Element>
        </main>

        <Footer />
      </Suspense>
    </AnimatePresence>
  );
}

export default App;