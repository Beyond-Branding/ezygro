'use client';

import {
  VideoCarousel,
  CapabilitiesSection,
  Industries,
  TechMahindraSection,
  RiseSection,
  Header,
  Footer,
  WhatsAppFloater,
  CookieConsentBanner
} from '../src/components';
import 'leaflet/dist/leaflet.css';

const HomePage = () => (
  <>
    <VideoCarousel />
    <CapabilitiesSection />
    <Industries />
    <TechMahindraSection />
    <RiseSection />
  </>
);

export default function Home() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer showCareersContact={true} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
