'use client';

import { Careers, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function CareersPage() {
  return (
    <div className="App">
      <Header />
      <Careers />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
