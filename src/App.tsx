import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import CookieConsentBanner from "./components/CookieConsentBanner";
import Header from "./components/Header";
import PrivacyNotice from "./components/PrivacyNotice";
import VideoCarousel from "./components/VideoCarousel";
import Industries from "./components/Industries";
import CapabilitiesSection from "./components/CapabilitiesSection";
import TechMahindraSection from "./components/TechMahindraSection";
// import JoyMattersSection from './components/JoyMattersSection';
// import IndustriesSection from './components/IndustriesSection';
// import SustainabilitySection from './components/SustainabilitySection';
import RiseSection from "./components/RiseSection";
// import ExploreMoreSection from './components/ExploreMoreSection';
import Footer from "./components/Footer";
import TermsOfUsePage from "./components/TermsOfUsePage";
// import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppFloater from "./components/WhatsAppFloater";
import AboutUs from "./components/AboutUs";
import Capabilities from "./components/Capabilities";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
// import Pricing from './components/Pricing';
import FinancialAndAccounting from "./capabilitypages/FinancialAndAccounting";
import IncomeTax from "./capabilitypages/IncomeTax";
import VirtualCFO from "./capabilitypages/VirtualCFO";
import InnovativeDashboards from "./capabilitypages/InnovativeDashboards";
import LoansAndInsurance from "./capabilitypages/LoansAndInsurance";
import SecretarialCompliances from "./capabilitypages/SecretarialCompliances";
import "leaflet/dist/leaflet.css";
// import ComingSoonPage from "./components/ComingSoonPage";
// import { useState } from "react";

const HomePage = () => (
  <>
    <VideoCarousel />
    <CapabilitiesSection />
    <Industries />
    <TechMahindraSection />
    {/* <JoyMattersSection /> */}
    {/* <IndustriesSection /> */}
    {/* <SustainabilitySection /> */}
    <RiseSection />
    {/* <ExploreMoreSection /> */}
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  // const [isLaunched, setIsLaunched] = useState(false);

  // if (!isLaunched)
  //   return <ComingSoonPage onLaunch={() => setIsLaunched(true)} />;
  // else
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

          <Route
            path="/financial-accounting"
            element={<FinancialAndAccounting />}
          />
          <Route path="/income-tax" element={<IncomeTax />} />
          <Route path="/virtual-cfo" element={<VirtualCFO />} />
          <Route
            path="/innovative-dashboards"
            element={<InnovativeDashboards />}
          />
          <Route path="/loans-insurance" element={<LoansAndInsurance />} />
          <Route
            path="/secretarial-compliances"
            element={<SecretarialCompliances />}
          />
          {/* Privacy Notice Route */}
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        </Routes>
        <Footer showCareersContact={isHomePage} />
        {/* <ScrollToTopButton /> */}
        <WhatsAppFloater phoneNumber="919372963906" />
        <CookieConsentBanner />
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
