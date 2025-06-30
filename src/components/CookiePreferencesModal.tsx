import React, { useEffect } from 'react';

interface CookiePreferencesModalProps {
  show: boolean;
  onClose: () => void;
}

const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  if (!show) return null;

  const terms = `Welcome to D B Salunkhe.com. This website is owned and operated by Dhanashree B Salunkhe and Co, Chartered Accountants and having its registered office at 001, 1st Floor, A-Wing, Neelyog Samruddhi, khot Kuwa Road, Dhanjiwadi, Malad (E), Mumbai – 400 097, Maharashtra, India. You must understand and agree to accept and adhere to the following terms of service as stated in this policy hereafter referred to as ‘User Agreement’, along with the terms and conditions as stated in our Privacy Policy, by visiting our website and accessing the information, resources, services, products, and tools we provide.

a. You may be asked to provide certain information about yourself (such as identification, email, phone number, contact details, etc.) as part of the registration procedure, or as part of your ability to use the resources, in a request to access our resources. You agree that any information you provide will always be accurate, correct, and up to date.

b. You are in charge of keeping the confidentiality of any login information associated with any account you use to access our resources. You are also responsible, accordingly, for all activities that occur under your accounts.

c. If you access (or attempt to access) any of our resources by any means other than through the means we provide, it is strictly prohibited. You specifically agree not to access (or attempt to access) any of our resources through any automated, unethical or unconventional means.

d. If you engage in any activity that disrupts or interferes with our resources, including the servers and/or networks to which our resources are located or connected, it is strictly prohibited.

e. If you attempt to copy, duplicate, reproduce, sell, trade, or resell our resources it is strictly prohibited.

f. You are exclusively responsible for any losses, consequences or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.

g. We may provide various open communication tools on our website, such as blog comments, blog posts, public chat, forums, message boards, newsgroups, product ratings and reviews, various social media services, etc. You comprehend that we do not otherwise pre-screen or monitor the content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our website, then it is your responsibility to use these tools in a responsible and ethical manner., you agree that you will not upload, post, share, or otherwise distribute any content by posting information or data or generally using any open communication tools as mentioned that:
1. Is threatening, illicit, harassing, degrading, defamatory intimidating, fraudulent, deceptive, abusive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language;
2. Breaches on any trademark, patent, trade secret, copyright, or another restrictive right of any party;
3. Contains any type of unauthorized or unsolicited advertising;
4. Impersonates any person or entity, including any www.D B Salunkhe.com employees or representatives.
We have the right at our sole discretion to remove any content that, we feel in our judgment does not consent with this User Agreement, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights or trademarks. We are not responsible for any delay or failure in removing such content. In the event that you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.

h. We do not assume any risk or liability for any content if it is posted by you or any other 3rd party users of our website. However, any content posted by you utilizing any open communication tools on our website, provided that it doesn’t violate or infringe on any 3rd party copyrights or trademarks, becomes the property of www.D B Salunkhe.com, and as such, gives us a perpetual, irrevocable, worldwide, royalty-free, exclusive license to reproduce, modify, adapt, translate, publish, publicly display and/or distribute as we see fit. This only mentions and applies to content posted by means of open communication tools as described, and does not refer to information that is provided as part of the registration procedure, necessary in order to utilize our Resources. All information provided as part of our registration procedure is covered by our Privacy Policy.

i. You agree to indemnify and hold harmless D B Salunkhe.com a digital property of Dhanashree B Salunkhe and Co, Chartered Accountants and affiliates, and their directors, officers, managers, employees, donors, agents, and licensors, from and against all losses, expenses, damages and costs, including sensible attorneys’ fees, resulting from any violation of this User Agreement or the failure to fulfill any obligations relating to your account acquired by you or any other individual utilizing your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this User Agreement. In such event, you shall provide us with such participation as is reasonably requested by us.

Your privacy is very critical to us, that is the reason why we’ve created a different Privacy Policy in order to explain in detail how we gather, manage, process, secure, and store your private information. Our privacy policy is incorporated under the scope of this User Agreement. To read our privacy policy in its entirety, click here.`;

  // Use React Router for internal navigation
  const privacyUrl = '/privacy-notice';
  const replaced = terms.replace(
    /click here/g,
    `<a href="${privacyUrl}" class="text-red-500 underline hover:text-red-700">click here</a>`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-black text-white rounded-lg shadow-lg w-full max-w-xl p-4 sm:p-6 relative animate-fadeIn max-h-[80vh] overflow-y-auto custom-scrollbar">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close Cookie Preferences"
        >
          ×
        </button>

        <div className="mb-6 flex flex-col items-start">
          <span className="h-8 mb-2 text-lg font-semibold tracking-wide text-white drop-shadow-lg">EZYGRO</span>
          <span className="mb-1 text-lg font-semibold text-white">Terms of Use</span>
          <div
            className="text-white text-base leading-relaxed text-justify whitespace-pre-line bg-black rounded p-4 shadow-inner"
            dangerouslySetInnerHTML={{ __html: replaced }}
          />
        </div>
      </div>
    </div>
  );
};

export default CookiePreferencesModal;
