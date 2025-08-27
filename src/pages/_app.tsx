import CookieConsentBanner from "@/components/common/CookieConsentBanner";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import WhatsAppFloater from "@/components/common/WhatsAppFloater";
import Aos from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

import "@/styles/globals.css";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  const pathName = usePathname();
  const isHomePage = useMemo(() => pathName === "/", [pathName]);

  /* Initialize AOS */
  useEffect(() => {
    Aos.init({
      duration: 750,
    });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Ezygro" />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Ezygro</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer showCareersContact={isHomePage} />
      <WhatsAppFloater phoneNumber="919372963906" />
      <CookieConsentBanner />
    </>
  );
}
