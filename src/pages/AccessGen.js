import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/AccessGen.css";
import Carousel from "./Carousel";


const standards = [
  { name: "WCAG 2.2",    detail: "Level AA & AAA",        region: "Global"         },
  { name: "WCAG 2.1",    detail: "Level AA",               region: "Global"         },
  { name: "Section 508", detail: "Revised 2018",           region: "United States"  },
  { name: "EN 301 549",  detail: "v3.2.1",                 region: "European Union" },
  { name: "ADA",         detail: "Title II and III",       region: "United States"  },
  { name: "GIGW 3.0",    detail: "MeitY Guidelines",       region: "India"          },
  { name: "PSBAR",       detail: "2018 Regulations",       region: "United Kingdom" },
  { name: "DDA",         detail: "Digital Services",       region: "Australia"      },
  { name: "ACA",         detail: "Accessible Canada Act",  region: "Canada"         },
  { name: "RPWD",        detail: "2016 Standard",          region: "India"          },
  { name: "PDF/UA",      detail: "ISO 14289-1",            region: "Global"         },
  { name: "VPAT 2.5",    detail: "All Editions",           region: "Global"         },
];

const AccessGen = () => {
  const navigate = useNavigate();

  useEffect(() => { document.title = "AccessGen | tsQs"; }, []);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="ag-container">

      {/* Carousel */}
      <div className="ag-carousel"><Carousel /></div>

      {/* Intro */}
      <div className="ag-intro">
        <h1>Accessibility Testing</h1>
        <p>
          At tsQs, we specialize in delivering end-to-end accessibility testing as an integral part of
          modern quality engineering. Accessibility is not treated as a one-time audit, but as a continuous
          quality attribute  measured and maintained throughout the software development lifecycle, just
          like performance, security, and functionality.
        </p>
        <p>
          Our approach combines both manual and automated testing techniques to identify and remediate
          accessibility barriers across digital products. We ensure your applications are usable by
          individuals with visual, auditory, motor, speech, and cognitive disabilities, while aligning
          with global accessibility standards and best practices.
        </p>
        <p>
          AccessGen, developed and maintained by tsQs Inc., reflects this philosophy by embedding
          accessibility into enterprise testing workflows. Our team brings deep expertise in accessibility
          standards and software quality engineering, enabling organizations to build inclusive, compliant,
          and high-performing digital experiences.
        </p>

        <div className="ag-intro-highlights">
          <div className="ag-intro-list-block">
            <h3>Standards We Cover</h3>
            <ul>
              <li>Section 508 Compliance</li>
              <li>Americans with Disabilities Act (ADA)</li>
              <li>European Accessibility Act (EAA)</li>
              <li>Web Content Accessibility Guidelines (WCAG 2.1 &amp; 2.2)</li>
            </ul>
          </div>
          <div className="ag-intro-list-block">
            <h3>Comprehensive Testing For</h3>
            <ul>
              <li>Web Applications</li>
              <li>Mobile Websites</li>
              <li>Native Mobile Apps (iOS &amp; Android)</li>
            </ul>
          </div>
        </div>

        <p className="ag-intro-bridge">
          To support this process, AccessGen provides a complete ecosystem of accessibility testing and
          remediation tools.
        </p>
      </div>

      {/* Our Services */}
      <div className="ag-services">
        <h2>Our Services</h2>
        <div className="ag-cards">
          {[
            { img: "/Accessibility/Web_Accessibility.jpg",    alt: "Web Accessibility",    title: "Web Accessibility",    hash: "#web-accessibility",    desc: "Scan any public or authenticated web page against WCAG 2.2 AA, Section 508, EN 301 549, ADA, GIGW 3.0, and more. Run batch scans using the Discover Links crawler for full site coverage." },
            { img: "/Accessibility/PDF_Accessibility.jpg",    alt: "PDF Accessibility",    title: "PDF Accessibility",    hash: "#pdf-accessibility",    desc: "Receive a detailed report covering tag tree structure, reading order, image alt text, table markup, form field labels, and color contrast against PDF/UA-1 and WCAG 2.2." },
            { img: "/Accessibility/Word_Accessibility.jpg",   alt: "Word Accessibility",   title: "Word Accessibility",   hash: "#word-accessibility",   desc: "Scan Microsoft Word documents at the source level. Fixing accessibility in the .docx file means every PDF generated from it inherits those fixes automatically." },
            { img: "/Accessibility/Mobile_Accessibility.jpg", alt: "Mobile Accessibility", title: "Mobile Accessibility", hash: "#mobile-accessibility", desc: "Connect a physical Android or iOS device via USB and run native accessibility tests. Tests VoiceOver, TalkBack, touch targets, focus order, and dynamic text scaling." },
            { img: "/Accessibility/Remediation.jpg",          alt: "Remediation",          title: "Remediation",          hash: "#remediation",          desc: "Expert-led remediation across web, document, and mobile  applying fixes at the code or document level through pull requests or patches, never through overlays." },
            { img: "/Accessibility/VpatAcr.jpg",              alt: "VPAT & ACR Services",  title: "VPAT & ACR Services",  hash: "#vpat-acr",             desc: "Prepare Voluntary Product Accessibility Templates (VPAT 2.5) and Accessibility Conformance Reports backed by independent audits, not self-assessment." },
          ].map((svc) => (
            <div className="ag-card" key={svc.hash}>
              <img src={svc.img} alt={svc.alt} />
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <button
                className="ag-readmore-btn"
                onClick={() => navigate("/accessibility-services" + svc.hash)}
                aria-label={"Read more about " + svc.title}
                role="link"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Our Products */}
      <div className="ag-products">
        <h2>Our Products</h2>
        <div className="ag-cards">
          {[
            { img: "/Accessibility/A11yWidget.jpg",       alt: "AGEN Widget",       title: "AGEN Widget",       hash: "#agen-widget", desc: "An embeddable accessibility toolbar giving every visitor one-click control over their browsing experience. Six disability profiles with color blindness correction and reading assistance." },
            { img: "/Accessibility/Browser_Extension.jpg", alt: "Browser Extension", title: "Browser Extension", hash: "#browser-ext", desc: "Test any web page  including secured, authenticated, and behind-login pages  directly from your browser. Built-in contrast checker, tab order overlay, and detailed reports." },
            { img: "/Accessibility/Vscode_Extension.jpg",  alt: "VS Code Extension", title: "VS Code Extension", hash: "#vscode-ext",  desc: "Fix accessibility issues as you write code. Inline WCAG 2.2 diagnostics appear like ESLint errors with one-click Quick Fix actions for HTML, JSX, TSX, Vue, and Svelte." },
            { img: "/Accessibility/A11yBookmarks.jpg",     alt: "WCAG Bookmarklets", title: "WCAG Bookmarklets", hash: "#bookmarklets", desc: "Professional bookmarklets for instant, in-browser accessibility testing across six categories: Outline, Forms, Color, Images, Information Testing, and Information Analysis." },
          ].map((prod) => (
            <div className="ag-card" key={prod.hash}>
              <img src={prod.img} alt={prod.alt} />
              <h3>{prod.title}</h3>
              <p>{prod.desc}</p>
              <button
                className="ag-readmore-btn"
                onClick={() => navigate("/accessibility-products" + prod.hash)}
                aria-label={"Read more about " + prod.title}
                role="link"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Coverage */}
      <div className="ag-compliance">
        <h2>15+ Global Standards Covered</h2>
        <p className="ag-section-desc">
          Accessibility regulations vary by country, sector, and organization type. AccessGen covers the
          full spectrum so you can test once and document conformance for any regulatory context.
        </p>
        <div className="ag-standards-grid">
          {standards.map((std, idx) => (
            <div className="ag-standard-card" key={idx}>
              <span className="ag-std-name">{std.name}</span>
              <span className="ag-std-detail">{std.detail}</span>
              <span className="ag-std-region">{std.region}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="ag-cta-banner">
        <p>
          By partnering with tsQs, you not only achieve regulatory compliance but also expand your reach to a broader and more diverse audience. We help you create inclusive digital experiences grounded in universal design and usability for all.
        </p>
        <p className="ag-cta-contact-line">
          To know more about AccessGen, Please{" "}
          <a
            href="https://accessgen-stage.tsqsinc.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </p>
      </div>

    </div>
  );
};

export default AccessGen;