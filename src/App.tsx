import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;