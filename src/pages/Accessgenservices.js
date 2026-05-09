import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/Accessgenservices.css";
import Carousel from "./Carousel";

import imgWebAcc      from "./../Images/Service-Virtualization.jpg";
import imgPdfAcc      from "./../Images/api.jpg";
import imgWordAcc     from "./../Images/Certified-Professionals.jpg";
import imgMobileAcc   from "./../Images/Mobile-App-Automation.jpeg";
import imgRemediation from "./../Images/process improvment.jpeg";
import imgVpat        from "./../Images/Certification1.png";
import imgVpat2       from "./../Images/Proof-Of-Concepts.jpeg";

const AccessGenServices = () => {
  const location = useLocation();

  useEffect(() => { document.title = "Accessibility Services | tsQs"; }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="ags-container">

      {/* Carousel */}
      <div className="ags-carousel"><Carousel /></div>

      {/* Page Intro */}
      <section className="ags-intro">
        <div className="ags-text-block">
          <p>
            At tsQs, accessibility testing is not an afterthought  it is built into every stage of the
            software development lifecycle. Our end-to-end services span web, document, and mobile
            platforms, ensuring your digital products are inclusive, compliant, and usable by everyone.
          </p>
          <p>
            We combine automated scanning with expert manual testing to achieve coverage that automated
            tools alone cannot provide. Every finding is documented with WCAG criterion mapping, severity
            ratings, and specific remediation guidance so your teams can act decisively.
          </p>
        </div>
      </section>

      {/* Web Accessibility */}
      <section id="web-accessibility" className="ags-section">
        <h2>Web Accessibility</h2>
        <div className="ags-row">
          <div className="ags-text">
            <p>
              Scan any public or authenticated web page against WCAG 2.2 AA, Section 508, EN 301 549,
              ADA, GIGW 3.0, and more. Use the built-in authentication configuration to test pages behind
              login screens, or run batch scans by uploading a URL list from Excel.
            </p>
            <p><strong>Key capabilities of our Web Accessibility service:</strong></p>
            <ul>
              <li>Single URL and batch URL scanning against 15+ global standards</li>
              <li>Discover Links crawler for automatic full-site coverage</li>
              <li>Authentication configuration for secured and behind-login pages</li>
              <li>Excel import for bulk URL testing workflows</li>
              <li>Element-level findings with WCAG criterion references and remediation steps</li>
              <li>Severity-sorted reports in PDF, Excel, Word, and JSON formats</li>
            </ul>
            <p>
              Our team goes beyond automated scanning  every critical finding is verified manually
              using assistive technologies to eliminate false positives and ensure accuracy.
            </p>
          </div>
          <div className="ags-image">
            <img src={imgWebAcc} alt="Web Accessibility Testing" />
          </div>
        </div>
      </section>

      {/* PDF Accessibility */}
      <section id="pdf-accessibility" className="ags-section ags-alt">
        <h2>PDF Accessibility</h2>
        <div className="ags-row ags-reverse">
          <div className="ags-image">
            <img src={imgPdfAcc} alt="PDF Accessibility Testing" />
          </div>
          <div className="ags-text">
            <p>
              Upload PDF documents and receive a detailed report covering every aspect of PDF/UA-1 and
              WCAG 2.2 conformance. Our service identifies structural and visual accessibility barriers
              that prevent assistive technology users from accessing document content.
            </p>
            <p><strong>What our PDF Accessibility audit covers:</strong></p>
            <ul>
              <li>Tag tree structure validation and logical reading order</li>
              <li>Image and figure alternative text verification</li>
              <li>Table markup, header designation, and scope attributes</li>
              <li>Form field labels, tooltips, and tab order</li>
              <li>Document language, title, and bookmark structure</li>
              <li>Color contrast ratios for text and graphical elements</li>
              <li>Up to 10 PDFs per session with consolidated reporting</li>
            </ul>
            <p>
              Findings are mapped to specific PDF/UA-1 clauses and WCAG success criteria, giving your
              team precise guidance for remediation at the source level.
            </p>
          </div>
        </div>
      </section>

      {/* Word Accessibility */}
      <section id="word-accessibility" className="ags-section">
        <h2>Word Accessibility</h2>
        <div className="ags-row">
          <div className="ags-text">
            <p>
              Scan Microsoft Word documents at the .docx source level. Fixing accessibility in the source
              document means every PDF generated from it inherits those fixes automatically  eliminating
              the need for repeated PDF remediation.
            </p>
            <p><strong>Our Word Accessibility service checks for:</strong></p>
            <ul>
              <li>Heading style structure and logical document hierarchy</li>
              <li>Alternative text for images, charts, and SmartArt objects</li>
              <li>Table header designation and header row repetition settings</li>
              <li>List markup using native list styles, not manual indentation</li>
              <li>Hyperlink descriptive text and linked URL accessibility</li>
              <li>Document language, title, and metadata completeness</li>
              <li>Color contrast for text against its background</li>
            </ul>
            <p>
              Remediating Word documents before PDF export is the most efficient path to scalable
              document accessibility, especially for organizations that publish large volumes of content.
            </p>
          </div>
          <div className="ags-image">
            <img src={imgWordAcc} alt="Word Document Accessibility" />
          </div>
        </div>
      </section>

      {/* Mobile Accessibility */}
      <section id="mobile-accessibility" className="ags-section ags-alt">
        <h2>Mobile Accessibility</h2>
        <div className="ags-row ags-reverse">
          <div className="ags-image">
            <img src={imgMobileAcc} alt="Mobile Accessibility Testing" />
          </div>
          <div className="ags-text">
            <p>
              Connect a physical Android or iOS device via USB and run native accessibility tests on any
              installed application. Emulators do not accurately reproduce assistive technology behavior,
              so we test only on real devices using the platform's native accessibility APIs.
            </p>
            <p><strong>Mobile Accessibility testing covers:</strong></p>
            <ul>
              <li>VoiceOver (iOS) and TalkBack (Android) screen reader evaluation</li>
              <li>Touch target size measurement against WCAG 2.5.5 requirements</li>
              <li>Focus order and keyboard-equivalent navigation paths</li>
              <li>Dynamic text scaling and layout adaptability</li>
              <li>Gesture alternatives for complex interactions</li>
              <li>Color contrast on all supported screen brightness levels</li>
              <li>Notification and alert accessibility for time-sensitive content</li>
            </ul>
            <p>
              Our mobile testers are experienced with both iOS VoiceOver and Android TalkBack workflows
              and document findings at the screen and component level for developer handoff.
            </p>
          </div>
        </div>
      </section>

      {/* Remediation */}
      <section id="remediation" className="ags-section">
        <h2>Remediation</h2>
        <div className="ags-row">
          <div className="ags-text">
            <p>
              After accessibility issues are identified, AccessGen provides expert-led remediation services
              across web, document, and mobile. Fixes are applied at the code or document level through
              pull requests, patches, or direct file corrections  never through overlay workarounds that
              create additional barriers.
            </p>
            <p><strong>How our remediation process works:</strong></p>
            <ul>
              <li>Every finding is triaged by severity: Critical, Major, Minor, and Advisory</li>
              <li>Web fixes are delivered as annotated pull requests or patch files</li>
              <li>Document fixes are applied directly to Word or PDF source files</li>
              <li>Mobile fixes include code-level guidance with platform-specific patterns</li>
              <li>Each fix is verified against the original accessibility finding before closure</li>
              <li>Regression testing is performed to confirm no new issues are introduced</li>
            </ul>
            <p>
              Our remediation team works alongside your developers and content authors, transferring
              knowledge so your teams can maintain accessibility independently over time.
            </p>
          </div>
          <div className="ags-image">
            <img src={imgRemediation} alt="Accessibility Remediation" />
          </div>
        </div>
      </section>

      {/* VPAT & ACR */}
      <section id="vpat-acr" className="ags-section ags-alt">
        <h2>VPAT &amp; ACR Services</h2>
        <div className="ags-row ags-reverse">
          <div className="ags-image">
            <img src={imgVpat} alt="VPAT and ACR Compliance Documentation" />
          </div>
          <div className="ags-text">
            <p>
              AccessGen prepares Voluntary Product Accessibility Templates (VPAT 2.5) and Accessibility
              Conformance Reports (ACR) for organizations that need to document conformance for
              procurement, enterprise sales, or legal compliance. Every ACR is backed by an independent
              audit, not self-assessment.
            </p>
            <p><strong>Our VPAT and ACR services include:</strong></p>
            <ul>
              <li>VPAT 2.5 in all four editions: WCAG, Section 508, EN 301 549, and International</li>
              <li>Full audit of the product against the applicable standard before report generation</li>
              <li>Executive summary suitable for legal, procurement, and sales review</li>
              <li>Accessibility statement for public-facing publication requirements</li>
              <li>Audit trail and version history for annual re-assessment cycles</li>
              <li>Delivery in PDF, Word, and structured JSON for system integration</li>
            </ul>
            <p>
              Our conformance reports are recognized by federal procurement offices, enterprise legal
              teams, and accessibility auditors. We help you communicate your accessibility posture
              with accuracy and confidence.
            </p>
          </div>
        </div>
        <div className="ags-row" style={{ marginTop: "2rem" }}>
          <div className="ags-image">
            <img src={imgVpat2} alt="Accessibility Compliance Process" />
          </div>
          <div className="ags-text">
            <p><strong>Why choose an independent ACR over self-assessment?</strong></p>
            <p>
              Self-assessed VPATs carry legal and reputational risk. If a product fails to meet the
              conformance levels stated in a self-assessed ACR, the organization can face legal challenges
              under ADA, Section 508, or the European Accessibility Act.
            </p>
            <p>
              An independently audited ACR from tsQs demonstrates due diligence, reduces legal exposure,
              and builds buyer confidence during procurement evaluation. Our auditors document every
              success criterion with tested evidence, not assumptions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AccessGenServices;