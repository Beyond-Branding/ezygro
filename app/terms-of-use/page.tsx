'use client';

import { TermsOfUsePage, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function TermsOfUse() {
  return (
    <div className="App">
      <Header />
      <TermsOfUsePage />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
