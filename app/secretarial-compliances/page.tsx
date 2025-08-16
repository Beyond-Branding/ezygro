'use client';

import { SecretarialCompliances, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function SecretarialCompliancesPage() {
  return (
    <div className="App">
      <Header />
      <SecretarialCompliances />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
