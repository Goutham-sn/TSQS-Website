import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Navbar.css";
import Logo from "./../Images/logo-transparent.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuWrapperRef = useRef(null); // NEW: wrapper ref
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];

    const trapFocus = (e) => {
      if (!isOpen || !menuWrapperRef.current) return;

      const focusableEls = menuWrapperRef.current.querySelectorAll(focusableSelectors.join(','));
      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", trapFocus);
      setTimeout(() => {
        const firstEl = menuWrapperRef.current.querySelector(focusableSelectors.join(','));
        firstEl?.focus();
      }, 0);
    }

    return () => {
      document.removeEventListener("keydown", trapFocus);
    };
  }, [isOpen]);

  return (
    <header role="banner">
      <nav className="navbar" aria-label="Main site">
        <div className="logo">
          <Link
           to="/"
           className="logo-link"
           aria-label="tsQs logo. Transforming Software Quality Services. An ISO 9001:2015 and ISO/IEC 27001:2022 Certified Company."
          >
          <img src={Logo} alt="tsQs Logo" className="logo-img" />
          </Link>
          <p className="company-name">Transforming Software Quality Services</p>
            <p className="iso-tagline">An ISO 9001:2015 | ISO/IEC 27001:2022 Certified Company</p>
        </div>

        <div ref={menuWrapperRef} className="menu-wrapper2">
          <button
            ref={toggleBtnRef}
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="menu-icon">{isOpen ? "✖" : "☰"}</span>
          </button>

          <ul
            id="primary-navigation"
            className={isOpen ? "nav-links open" : "nav-links"}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/quality-engineering", label: "Quality Engineering" },
              { to: "/expertise", label: "Expertise" },
              { to: "/academy", label: "Academy" },
              { to: "/business-strategy", label: "Business Model" },
              { to: "/accessibility", label: "Accessibility", isNew: true },
              // { to: "#", label: "AI Services" },
              { to: "/e-book", label: "e-Book" },
              { to: "/careers", label: "Careers" },
              { to: "/contact-us", label: "Contact Us" },
            ].map(({ to, label, isNew }) => (
              <li key={to}>
                {isNew ? (
                  <span className="nav-link-with-badge">
                    <NavLink
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => (isActive ? "nav-active" : "")}
                      aria-label={`${label}, new feature`}
                    >
                      {label}
                    </NavLink>
                    <span className="nav-new-badge" aria-hidden="true">
                      NEW
                    </span>
                  </span>
                ) : (
                  <NavLink
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <div className="menu-backdrop" onClick={() => setIsOpen(false)}></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
