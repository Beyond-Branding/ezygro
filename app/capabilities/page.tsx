'use client';

import { Capabilities, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function CapabilitiesPage() {
  return (
    <div className="App">
      <Header />
      <Capabilities />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
