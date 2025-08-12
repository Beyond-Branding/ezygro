import React, { useState, useEffect } from 'react';

// A more descriptive key for storing the user's consent status in localStorage.
const COOKIE_CONSENT_STATUS_KEY = 'cookieConsentStatus';

const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_STATUS_KEY);
    if (!consentStatus) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_STATUS_KEY, 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_STATUS_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-[1000]" 
        aria-hidden="true"
      ></div>
      
      <div className="fixed bottom-0 left-0 w-full bg-black text-white z-[1001] flex flex-col md:flex-row items-center justify-between p-6 md:p-8 shadow-2xl min-h-[130px] gap-6">
        <p className="text-sm lg:text-base whitespace-normal text-center md:text-left flex-grow">
          This website uses cookies to enhance your digital experience. For additional details please visit{' '}
          <a href="/privacy-notice" className="underline text-purple-900 hover:text-purple-900" target="_blank" rel="noopener noreferrer">Cookies</a>{' '}and{' '}
          <a href="/terms-of-use" className="underline text-purple-900 hover:text-purple-900" target="_blank" rel="noopener noreferrer">Terms of Use</a>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto bg-purple-900 hover:bg-purple-900 text-white px-4 py-2 rounded font-semibold text-xs md:text-sm transition border border-purple-900"
          >
            ACCEPT ALL COOKIES
          </button>
          <button
            onClick={handleReject}
            className="w-full sm:w-auto bg-transparent hover:bg-gray-800 text-white px-4 py-2 rounded font-semibold text-xs md:text-sm transition border border-white"
          >
            REJECT ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsentBanner;
