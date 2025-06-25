import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import VideoCarousel from './components/VideoCarousel';
import Industries from './components/Industries';
import CapabilitiesSection from './components/CapabilitiesSection';
import TechMahindraSection from './components/TechMahindraSection';
import JoyMattersSection from './components/JoyMattersSection';
import IndustriesSection from './components/IndustriesSection';
import SustainabilitySection from './components/SustainabilitySection';
import RiseSection from './components/RiseSection';
import ExploreMoreSection from './components/ExploreMoreSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AboutUs from './components/AboutUs';
<<<<<<< HEAD
import Careers from './components/Careers'
=======
import Capabilities from './components/Capabilities';
>>>>>>> 6bea428e5e743f165054152c7d477b059e49e67a

const HomePage = () => (
  <>
    <VideoCarousel />
    <Industries />
    <CapabilitiesSection />
    <TechMahindraSection />
    <JoyMattersSection />
    <IndustriesSection />
    <SustainabilitySection />
    <RiseSection />
    <ExploreMoreSection />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
<<<<<<< HEAD
        <Route path="/careers" element={<Careers />} />
=======
        <Route path="/capabilities" element={<Capabilities />} />
>>>>>>> 6bea428e5e743f165054152c7d477b059e49e67a
      </Routes>
      <Footer showCareersContact={isHomePage} />
      <ScrollToTopButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;