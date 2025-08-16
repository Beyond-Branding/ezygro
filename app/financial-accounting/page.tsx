'use client';

import { FinancialAndAccounting, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function FinancialAccountingPage() {
  return (
    <div className="App">
      <Header />
      <FinancialAndAccounting />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
