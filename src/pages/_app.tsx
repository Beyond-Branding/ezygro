import CookieConsentBanner from "@/components/common/CookieConsentBanner";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import WhatsAppFloater from "@/components/common/WhatsAppFloater";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </>
  );
}
