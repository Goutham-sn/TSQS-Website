// // export default ConsentPreferences;
// import React, { useState } from "react";
// import "./../styles/ConsentPreferences.css";

// const ConsentPreferences = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => setIsOpen((prev) => !prev);

//   const handleRejectAll = () => {
//     // Optional: Add logic for rejecting all non-necessary cookies
//     console.log("Rejected all preferences");
//     setIsOpen(false);
//   };

//   const handleAcceptAll = () => {
//     // Optional: Add logic for accepting all categories
//     console.log("Accepted all preferences");
//     setIsOpen(false);
//   };

//   const handleSavePreferences = () => {
//     // Optional: Add logic to save current preferences
//     console.log("Preferences saved");
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Floating Icon Button */}
//       <button
//         className="consent-float-btn"
//         aria-label="Open Consent Preferences"
//         onClick={toggleModal}
//       >
//         🛡️ Consent
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="consent-modal-overlay" role="dialog" aria-modal="true">
//           <div className="consent-modal">
//             {/* Fixed Header */}
//             <div className="consent-modal-header">
//               <h2>Customize Consent Preferences</h2>
//               <button
//                 className="consent-close-btn"
//                 onClick={toggleModal}
//                 aria-label="Close dialog"
//               >
//                 ✖
//               </button>
//             </div>

//             {/* Scrollable Content */}
//             <div className="consent-modal-content">
//               <p>
//                 We use cookies to help you navigate efficiently and perform certain
//                 functions. You will find detailed information about all cookies under
//                 each consent category below.
//               </p>

//               <div className="consent-category">
//                 <h3>
//                   Necessary <span className="always-active">(Always Active)</span>
//                 </h3>
//                 <p>
//                   Necessary cookies are required to enable the basic features of this
//                   site, such as providing secure log-in or adjusting your consent
//                   preferences. These cookies do not store any personally identifiable
//                   data.
//                 </p>
//                 <p>No cookies to display.</p>
//               </div>

//               <div className="consent-category">
//                 <h3>Functional</h3>
//                 <p>
//                   Functional cookies help perform certain functionalities like sharing
//                   content on social media, collecting feedback, etc.
//                 </p>
//               </div>

//               <div className="consent-category">
//                 <h3>Analytics</h3>
//                 <p>
//                   Analytical cookies help understand visitor interactions  number of
//                   visitors, bounce rate, etc.
//                 </p>
//               </div>

//               <div className="consent-category">
//                 <h3>Performance</h3>
//                 <p>
//                   Performance cookies help measure website performance to improve user
//                   experience.
//                 </p>
//               </div>

//               <div className="consent-category">
//                 <h3>Advertisement</h3>
//                 <p>
//                   Advertisement cookies deliver personalized ads and measure ad
//                   campaign effectiveness.
//                 </p>
//               </div>

//               {/* Final Button Row */}
//               <div className="consent-actions-actions">
//                 <button className="consent-btn reject" onClick={handleRejectAll}>
//                   Reject All
//                 </button>
//                 <button className="consent-btn save" onClick={handleSavePreferences}>
//                   Save My Preference
//                 </button>
//                 <button className="consent-btn accept" onClick={handleAcceptAll}>
//                   Accept All
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ConsentPreferences;
// export default ConsentPreferences;
import React, { useEffect, useRef, useState } from "react";
import "./../styles/ConsentPreferences.css";

const ConsentPreferences = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const firstFocusable = useRef(null);
  const lastFocusable = useRef(null);
   const [showMore, setShowMore] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const handleRejectAll = () => {
    console.log("Rejected all preferences");
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    console.log("Accepted all preferences");
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    console.log("Preferences saved");
    setIsOpen(false);
  };

  // Manual focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      // Store for later reference
      firstFocusable.current = first;
      lastFocusable.current = last;

      // ESC to close
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      // Tab key trapping
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // Tab
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      // Set focus to first focusable
      setTimeout(() => {
        firstFocusable.current?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Floating Icon Button */}
      <button
        className="consent-float-btn"
        aria-label="Open Consent Preferences"
        onClick={toggleModal}
      >
        🛡️ Consent
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="consent-modal-overlay" role="dialog" aria-modal="true">
          <div className="consent-modal" ref={modalRef}>
            {/* Fixed Header */}
            <div className="consent-modal-header">
              <h2>Customize Consent Preferences</h2>
              <button
                className="consent-close-btn"
                onClick={toggleModal}
                aria-label="Close dialog"
              >
                ✖
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="consent-modal-content">
              <p>
                We use cookies to help you navigate efficiently and perform certain
                functions. You will find detailed information about all cookies under
                each consent category below.
              </p>
              <p> 
                The cookies that are categorized as "Necessary" are stored on 
                your browser as they are essential for enabling the basic functionalities of the site.
              </p>
               {/* <p>
                We also use third-party cookies that help us analyze how you use this website, store your preferences, and provide the content and advertisements that are relevant to you.
                 These cookies will only be stored in your browser with your prior consent.
               </p>
               <p>
                You can choose to enable or disable some or
                 all of these cookies but disabling some of them may affect your browsing experience.
               </p> */}
               {showMore && (
        <>
          <p>
            We also use third-party cookies that help us analyze how you use this
            website, store your preferences, and provide the content and advertisements
            that are relevant to you. These cookies will only be stored in your browser
            with your prior consent.
          </p>
          <p>
            You can choose to enable or disable some or all of these cookies but
            disabling some of them may affect your browsing experience.
          </p>
        </>
      )}

      <button
        onClick={() => setShowMore((prev) => !prev)}
        className="toggle-more-btn"
        style={{ marginTop: "10px", background: "none", color: "#007BFF", border: "none", cursor: "pointer" }}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

              <div className="consent-category">
                <h3>
                  Necessary <span className="always-active">(Always Active)</span>
                </h3>
                <p>
                  Necessary cookies are required to enable the basic features of this
                  site, such as providing secure log-in or adjusting your consent
                  preferences. These cookies do not store any personally identifiable
                  data.
                </p>
              </div>

              <div className="consent-category">
                <h3>Functional</h3>
                <p>
                  Functional cookies help perform certain functionalities like sharing the content of the website on s
                  ocial media platforms, collecting feedback, and other third-party features.
                </p>
              </div>

              <div className="consent-category">
                <h3>Analytics</h3>
                <p>
                  Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information
                   on metrics such as the number of visitors, bounce rate, traffic source, etc.
                </p>
              </div>

              <div className="consent-category">
                <h3>Performance</h3>
                <p>
                  Performance cookies are used to understand and analyze the key performance indexes of
                   the website which helps in delivering a better user experience for the visitors.
                </p>
              </div>

              <div className="consent-category">
                <h3>Advertisement</h3>
                <p>
                   Advertisement cookies are used to provide visitors with customized advertisements based on
                    the pages you visited previously and to analyze the effectiveness of the ad campaigns.
                </p>
              </div>
            </div>

            {/* Fixed Bottom Button Bar */}
            <div className="consent-actions">
              <button className="consent-btn reject" onClick={handleRejectAll}>
                Reject All
              </button>
              <button className="consent-btn save" onClick={handleSavePreferences}>
                Save My Preference
              </button>
              <button className="consent-btn accept" onClick={handleAcceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsentPreferences;
