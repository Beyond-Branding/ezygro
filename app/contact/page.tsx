'use client';

import { Contact, Header, Footer, WhatsAppFloater, CookieConsentBanner } from '../../src/components';

export default function ContactPage() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Footer showCareersContact={false} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </div>
  );
}
