'use client';

import { VirtualCFO, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function VirtualCFOPage() {
  return (
    <div className="App">
      <Header />
      <VirtualCFO />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
