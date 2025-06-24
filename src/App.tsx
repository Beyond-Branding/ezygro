import React from 'react';
import Header from './components/Header';
import VideoCarousel from './components/VideoCarousel';
import CapabilitiesSection from './components/CapabilitiesSection';
import TechMahindraSection from './components/TechMahindraSection';
import JoyMattersSection from './components/JoyMattersSection';
import IndustriesSection from './components/IndustriesSection';
import SustainabilitySection from './components/SustainabilitySection';
import RiseSection from './components/RiseSection';
import ExploreMoreSection from './components/ExploreMoreSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoCarousel />
      <CapabilitiesSection />
      <TechMahindraSection />
      <JoyMattersSection />
      <IndustriesSection />
      <SustainabilitySection />
      <RiseSection />
      <ExploreMoreSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;