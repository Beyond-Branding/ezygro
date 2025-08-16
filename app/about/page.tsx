'use client';

import { AboutUs, VisionPurposeValues, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function About() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <VisionPurposeValues />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
