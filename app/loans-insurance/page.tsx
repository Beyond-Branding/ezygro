'use client';

import { LoansAndInsurance, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function LoansAndInsurancePage() {
  return (
    <div className="App">
      <Header />
      <LoansAndInsurance />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
