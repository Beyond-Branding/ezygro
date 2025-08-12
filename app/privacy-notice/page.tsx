'use client';

import { PrivacyNotice, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function PrivacyNoticePage() {
  return (
    <div className="App">
      <Header />
      <PrivacyNotice />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
