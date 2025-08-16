'use client';

import { InnovativeDashboards, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function InnovativeDashboardsPage() {
  return (
    <div className="App">
      <Header />
      <InnovativeDashboards />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
