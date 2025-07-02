import React, { useState, useEffect } from 'react';

const COOKIE_KEY = 'cookieConsentAccepted';

const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setVisible(false);
  };

  const handleSettings = () => {
    alert('Cookie settings modal coming soon!');
  };

  // (Scroll is now allowed while banner is visible)

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 z-[1000] cursor-not-allowed" style={{pointerEvents: 'auto', cursor: 'default'}} aria-hidden="true"></div>
      <div className="fixed bottom-0 left-0 w-full bg-black text-white z-[1001] flex flex-col md:flex-row items-center justify-between p-6 md:p-12 shadow-2xl min-h-[130px] md:min-h-[150px] gap-6 md:gap-8">
        <span className="text-base md:text-sm lg:text-base whitespace-normal text-center md:text-left mb-2 md:mb-0">
          This website uses cookies to enhance your digital experience. For additional details please visit{' '}
          <a href="/privacy-notice" className="underline text-red-600" target="_blank" rel="noopener noreferrer">Cookies</a>{' '}and{' '}
          <a href="/terms-of-use" className="underline text-red-600" target="_blank" rel="noopener noreferrer">Terms of Use</a>.
        </span>
        <button
          onClick={handleAccept}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold text-xs md:text-sm transition ml-2 border border-white"
        >
          ACCEPT ALL COOKIES
        </button>
        <button
          onClick={handleSettings}
          className="underline text-white px-3 py-2 font-semibold text-xs md:text-sm hover:text-red-400 transition ml-2"
        >
          COOKIES SETTINGS
        </button>
      </div>
    </>
  );
};

export default CookieConsentBanner;
