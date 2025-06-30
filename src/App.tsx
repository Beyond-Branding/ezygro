import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import PrivacyNotice from './components/PrivacyNotice';
import VideoCarousel from './components/VideoCarousel';
import Industries from './components/Industries';
import CapabilitiesSection from './components/CapabilitiesSection';
import TechMahindraSection from './components/TechMahindraSection';
import JoyMattersSection from './components/JoyMattersSection';
// import IndustriesSection from './components/IndustriesSection';
import SustainabilitySection from './components/SustainabilitySection';
import RiseSection from './components/RiseSection';
import ExploreMoreSection from './components/ExploreMoreSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AboutUs from './components/AboutUs';
import Capabilities from './components/Capabilities';
import Careers from './components/Careers';
import Contact from './components/Contact';
// import Pricing from './components/Pricing';
import FinancialAndAccounting from './capabilitypages/FinancialAndAccounting';
import IncomeTax from './capabilitypages/IncomeTax';
import VirtualCFO from './capabilitypages/VirtualCFO';
import InnovativeDashboards from './capabilitypages/InnovativeDashboards';
import LoansAndInsurance from './capabilitypages/LoansAndInsurance';
import SecretarialCompliances from './capabilitypages/SecretarialCompliances';

const HomePage = () => (
  <>
    <VideoCarousel />
    <Industries />
    <CapabilitiesSection />
    <TechMahindraSection />
    <JoyMattersSection />
    {/* <IndustriesSection /> */}
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
        <Route path="/capabilities" element={<Capabilities />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/industries/banking-financial-services" element={<FinancialAndAccounting />} />
        <Route path="/industries/communications" element={<IncomeTax />} />
        <Route path="/industries/energy-utilities" element={<VirtualCFO />} />
        <Route path="/industries/healthcare-life-sciences" element={<InnovativeDashboards />} />
        <Route path="/industries/manufacturing" element={<LoansAndInsurance />} />
        <Route path="/industries/travel-transportation" element={<SecretarialCompliances />} />
        {/* Privacy Notice Route */}
        <Route path="/privacy-notice" element={<PrivacyNotice />} />
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