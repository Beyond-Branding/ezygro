'use client';

import { IncomeTax, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function IncomeTaxPage() {
  return (
    <div className="App">
      <Header />
      <IncomeTax />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
