import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/AccessGen.css";
import Carousel from "./Carousel";

const AccessGen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AccessGen | tsQs";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactUs = () => {
    navigate("/contact-us");
  };


  return (
    <div className="accessgen-container">
      <div className="carousel">
        <Carousel />
      </div>

      {/* Accessibility Testing Intro */}
      <div className="accessgen-intro">
        <div className="accessgen-intro-inner">
          <div className="accessgen-intro-content">
            <p className="accessgen-section-label">Our Expertise</p>
            <h2>Accessibility Testing</h2>
            <p>
              At tsQs, we specialize in delivering end-to-end accessibility testing services that ensure your digital products are fully inclusive and compliant with global accessibility standards.
            </p>
            <p>
              Our approach combines manual and automated testing techniques to identify and remediate accessibility barriers, ensuring that your software is usable by individuals with visual, auditory, motor, speech, and cognitive disabilities.
            </p>
            <p>
              Partnering with tsQs not only ensures legal compliance but also expands your reach to a wider, more diverse audience. We help you build inclusive experiences that align with the principles of universal design and usability for all.
            </p>
          </div>
          <div className="accessgen-intro-highlights">
            <div className="accessgen-intro-list-block">
              <h3>Standards We Cover</h3>
              <ul>
                <li>Section 508 Compliance</li>
                <li>Americans with Disabilities Act (ADA)</li>
                <li>European Accessibility Act (EAA)</li>
                <li>Web Content Accessibility Guidelines (WCAG 2.1 &amp; 2.2)</li>
              </ul>
            </div>
            <div className="accessgen-intro-list-block">
              <h3>Comprehensive Testing For</h3>
              <ul>
                <li>Web Applications</li>
                <li>Mobile Websites</li>
                <li>Native Mobile Apps (iOS &amp; Android)</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="accessgen-intro-bridge">
          To support this process, AccessGen provides a complete ecosystem of accessibility testing and remediation tools.
        </p>
      </div>

      {/* Hero Intro */}
      <div className="accessgen-hero">
        <div className="accessgen-hero-content">
          <span className="accessgen-hero-label">Built by tsQs Inc. — Quality Engineering Specialists</span>
          <h1>
            Accessibility Testing,{" "}
            <span className="accessgen-highlight">Done Right.</span>
          </h1>
          <p>
            AccessGen is an end-to-end accessibility testing platform that helps organizations identify, fix, and document barriers across websites, documents, and mobile apps. From WCAG 2.2 to Section 508, EN 301 549, ADA, and beyond.
          </p>
          <button
            className="accessgen-hero-btn"
            onClick={handleContactUs}
            aria-label="Book a Demo Call"
            role="link"
          >
            Book a Demo Call
          </button>
        </div>
        <div className="accessgen-hero-image" aria-hidden="true">
          <div className="accessgen-scan-card">
            <div className="accessgen-scan-header">
              <div className="accessgen-scan-dots">
                <span className="accessgen-dot dot-red"></span>
                <span className="accessgen-dot dot-yellow"></span>
                <span className="accessgen-dot dot-green"></span>
              </div>
              <span className="accessgen-scan-title">AccessGen — Scan Results</span>
              <span className="accessgen-scan-badge">AccessGen</span>
            </div>
            <div className="accessgen-scan-body">
              <div className="accessgen-scan-summary">
                <div className="accessgen-score-gauge">
                  <svg viewBox="0 0 120 120" className="accessgen-gauge-svg">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#eee" strokeWidth="8" />
                    <circle cx="60" cy="60" r="52" fill="none" stroke="#E67320" strokeWidth="8"
                      strokeDasharray="283" strokeDashoffset="37" strokeLinecap="round"
                      transform="rotate(-90 60 60)" />
                  </svg>
                  <div className="accessgen-gauge-text">
                    <span className="accessgen-gauge-value">87</span>
                    <span className="accessgen-gauge-label">Score</span>
                  </div>
                </div>
                <div className="accessgen-scan-stats">
                  <div className="accessgen-stat-row">
                    <span className="accessgen-stat-label">Errors</span>
                    <span className="accessgen-stat-value stat-error">3</span>
                  </div>
                  <div className="accessgen-stat-row">
                    <span className="accessgen-stat-label">Warnings</span>
                    <span className="accessgen-stat-value stat-warning">7</span>
                  </div>
                  <div className="accessgen-stat-row">
                    <span className="accessgen-stat-label">Passed</span>
                    <span className="accessgen-stat-value stat-passed">142</span>
                  </div>
                </div>
              </div>
              <div className="accessgen-scan-findings">
                <div className="accessgen-finding">
                  <span className="accessgen-badge badge-error">ERROR</span>
                  <span className="accessgen-criterion">1.1.1</span>
                  <span className="accessgen-finding-text">Missing alt text on 2 images</span>
                </div>
                <div className="accessgen-finding">
                  <span className="accessgen-badge badge-error">ERROR</span>
                  <span className="accessgen-criterion">1.4.3</span>
                  <span className="accessgen-finding-text">Contrast ratio 2.8:1 fails AA</span>
                </div>
                <div className="accessgen-finding">
                  <span className="accessgen-badge badge-pass">PASS</span>
                  <span className="accessgen-criterion">2.4.7</span>
                  <span className="accessgen-finding-text">Focus indicator present</span>
                </div>
                <div className="accessgen-finding">
                  <span className="accessgen-badge badge-error">ERROR</span>
                  <span className="accessgen-criterion">4.1.2</span>
                  <span className="accessgen-finding-text">Form label missing</span>
                </div>
                <div className="accessgen-finding">
                  <span className="accessgen-badge badge-pass">PASS</span>
                  <span className="accessgen-criterion">2.4.1</span>
                  <span className="accessgen-finding-text">Skip navigation link found</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Complete Accessibility Toolkit */}
      <div className="accessgen-toolkit">
        <p className="accessgen-section-label">About AccessGen</p>
        <h2>The Complete Accessibility Toolkit</h2>
        <p className="accessgen-section-desc">
          AccessGen brings together automated scanning, manual testing workflows, remediation tools, and compliance documentation into a single, easy-to-use platform.
        </p>
        <div className="accessgen-toolkit-cards">
          <div className="accessgen-toolkit-card">
            <svg className="accessgen-toolkit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
              <line x1="11" y1="8" x2="11" y2="14" />
            </svg>
            <h3>Scan &amp; Detect</h3>
            <p>
              Automated WCAG 2.2 scanning across web pages, PDFs, Word documents, and mobile apps against 15+ global accessibility standards.
            </p>
          </div>
          <div className="accessgen-toolkit-card">
            <svg className="accessgen-toolkit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <h3>Understand &amp; Fix</h3>
            <p>
              Element-level findings with WCAG criterion mapping, severity ratings, HTML locations, and specific remediation guidance for developers.
            </p>
          </div>
          <div className="accessgen-toolkit-card">
            <svg className="accessgen-toolkit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <h3>Document &amp; Report</h3>
            <p>
              Generate VPAT 2.5 Conformance Reports, accessibility statements, and audit documentation for procurement and legal review.
            </p>
          </div>
        </div>
      </div>

      {/* Every Format, Every Standard */}
      <div className="accessgen-formats">
        <p className="accessgen-section-label">Services</p>
        <h2>Every Format. Every Standard.</h2>
        <p className="accessgen-section-desc">
          Accssgen provides the following Accessibility Testing and Compliance Services.
        </p>
        <div className="accessgen-formats-grid">
          <div className="accessgen-format-item">
            <h3>Web Accessibility</h3>
            <p className="accessgen-format-subtitle">Any URL, Any Standard</p>
            <p>
              Scan any public or authenticated web page against WCAG 2.2 AA, Section 508, EN 301 549, ADA, GIGW 3.0, and more. Use the built-in authentication configuration to test pages behind login screens. Run batch scans by uploading a URL list from Excel or using the Discover Links crawler.
            </p>
            <ul className="accessgen-format-list">
              <li>Single URL and batch URL scanning</li>
              <li>Discover Links crawler for full site coverage</li>
              <li>Authentication configuration for secured pages</li>
              <li>Excel import for bulk URL testing</li>
            </ul>
          </div>
          <div className="accessgen-format-item">
            <h3>PDF Accessibility</h3>
            <p className="accessgen-format-subtitle">PDF/UA-1 and WCAG 2.2</p>
            <p>
              Upload PDF documents and receive a detailed report covering tag tree structure, reading order, image alt text, table markup, form field labels, document language, bookmarks, and color contrast.
            </p>
            <ul className="accessgen-format-list">
              <li>Tag tree structure validation</li>
              <li>Reading order verification</li>
              <li>Form field label checking</li>
              <li>Up to 10 PDFs per session</li>
            </ul>
          </div>
          <div className="accessgen-format-item">
            <h3>Word Accessibility</h3>
            <p className="accessgen-format-subtitle">DOCX Source File Testing</p>
            <p>
              Scan Microsoft Word documents at the source level. Fixing accessibility in the .docx file means every PDF generated from it will inherit those fixes. Covers heading structure, alt text, table headers, list markup, and more.
            </p>
            <ul className="accessgen-format-list">
              <li>Heading style structure analysis</li>
              <li>Image alt text verification</li>
              <li>Table header designation check</li>
            </ul>
          </div>
          <div className="accessgen-format-item">
            <h3>Mobile Accessibility</h3>
            <p className="accessgen-format-subtitle">iOS and Android — Real Devices</p>
            <p>
              Connect a physical Android or iOS device via USB and run native accessibility tests on any installed application. Tests VoiceOver, TalkBack, touch targets, focus order, dynamic text scaling, and gesture alternatives.
            </p>
            <ul className="accessgen-format-list">
              <li>Physical device testing, not emulators</li>
              <li>VoiceOver and TalkBack evaluation</li>
              <li>Touch target size measurement</li>
            </ul>
          </div>
        </div>
      </div>

      {/* A Tool for Every Workflow */}
      <div className="accessgen-workflow">
        <p className="accessgen-section-label">Products</p>
        <h2>A Tool for Every Workflow</h2>
        <p className="accessgen-section-desc">
          AccessGen includes four purpose-built tools that fit into different stages of the Development and Testing workflow.
        </p>
        <div className="accessgen-workflow-cards">
          <div className="accessgen-workflow-card">
            <h3>AGEN Widget</h3>
            <p>
              An embeddable accessibility toolbar that gives every visitor one-click control over their browsing experience. Six disability profiles: Vision, Motor, Cognitive, Senior, Focus, and Dyslexia. Color blindness correction, motion control, and reading assistance built in.
            </p>
          </div>
          <div className="accessgen-workflow-card">
            <h3>Browser Extension</h3>
            <p>
              Test any web page including secured, authenticated, and behind-login pages directly from your browser. Shows errors, warnings, and passed guidelines. Built-in contrast checker, tab order overlay, and detailed reports. Works on localhost and internal tools.
            </p>
          </div>
          <div className="accessgen-workflow-card">
            <h3>VS Code Extension</h3>
            <p>
              Fix accessibility issues as you write code. Inline WCAG 2.2 diagnostics appear like ESLint errors. One-click Quick Fix actions apply accessible code patterns. Supports HTML, JSX, TSX, Vue, Svelte, and all major front-end frameworks.
            </p>
          </div>
          <div className="accessgen-workflow-card">
            <h3>WCAG Bookmarklets</h3>
            <p>
              Professional bookmarklets for instant, in-browser accessibility testing. Drag any bookmarklet to your browser bar and run targeted checks on any page. Six categories: Outline, Forms, Color, Images, Information Testing, and Information Analysis.
            </p>
          </div>
        </div>
      </div>

      {/* 15+ Global Standards Covered */}
      <div className="accessgen-standards">
        <p className="accessgen-section-label">Compliance Coverage</p>
        <h2>15+ Global Standards Covered</h2>
        <p className="accessgen-section-desc">
          Accessibility regulations vary by country, sector, and organization type. AccessGen covers the full spectrum so you can test once and document conformance for any regulatory context.
        </p>
        <div className="accessgen-standards-grid">
          {[
            { name: "WCAG 2.2", detail: "Level AA & AAA", region: "Global" },
            { name: "WCAG 2.1", detail: "Level AA", region: "Global" },
            { name: "Section 508", detail: "Revised 2018", region: "United States" },
            { name: "EN 301 549", detail: "v3.2.1", region: "European Union" },
            { name: "ADA", detail: "Title II and III", region: "United States" },
            { name: "GIGW 3.0", detail: "MeitY Guidelines", region: "India" },
            { name: "PSBAR", detail: "2018 Regulations", region: "United Kingdom" },
            { name: "DDA", detail: "Digital Services", region: "Australia" },
            { name: "ACA", detail: "Accessible Canada Act", region: "Canada" },
            { name: "RPWD", detail: "2016 Standard", region: "India" },
            { name: "PDF/UA", detail: "ISO 14289-1", region: "Global" },
            { name: "VPAT 2.5", detail: "All Editions", region: "Global" },
          ].map((standard, idx) => (
            <div className="accessgen-standard-badge" key={idx}>
              <span className="accessgen-standard-name">{standard.name}</span>
              <span className="accessgen-standard-detail">{standard.detail}</span>
              <span className="accessgen-standard-region">{standard.region}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Beyond the Scanner */}
      <div className="accessgen-beyond">
        <p className="accessgen-section-label">Why AccessGen</p>
        <h2>Beyond the Scanner</h2>
        <p className="accessgen-section-desc">
          Most accessibility tools stop at a scan. AccessGen is built around the full workflow of an accessibility program: find the issue, understand it, fix it, verify the fix, and document the outcome.
        </p>
        <div className="accessgen-beyond-cards">
          <div className="accessgen-beyond-card">
            <h3>Authenticated Page Testing</h3>
            <p>
              The browser extension runs directly in your browser session, allowing it to test pages behind login screens, on intranets, and at localhost where URL-based scanners cannot reach.
            </p>
          </div>
          <div className="accessgen-beyond-card">
            <h3>Automated and Manual Coverage</h3>
            <p>
              Automated scanners detect around 30 to 40 percent of WCAG issues. AccessGen combines automation with manual testing guidance and real assistive technology verification to close that gap.
            </p>
          </div>
          <div className="accessgen-beyond-card">
            <h3>Procurement-Ready Reports</h3>
            <p>
              Generate VPAT 2.5 Accessibility Conformance Reports, accessibility statements, and audit documentation in PDF, Excel, Word, and JSON formats suitable for federal and enterprise procurement.
            </p>
          </div>
          <div className="accessgen-beyond-card">
            <h3>Built for Every Team Role</h3>
            <p>
              From the VS Code extension for developers to the accessibility widget for end users, AccessGen has a purpose-built tool for every stakeholder in your organization.
            </p>
          </div>
          <div className="accessgen-beyond-card">
            <h3>Real Device Mobile Testing</h3>
            <p>
              Emulators do not accurately reproduce assistive technology behavior. AccessGen tests on physical iOS and Android devices using the platform's native accessibility API.
            </p>
          </div>
          <div className="accessgen-beyond-card">
            <h3>Document Accessibility at the Source</h3>
            <p>
              Remediating Word documents before PDF export means every downstream document inherits those fixes. AccessGen evaluates both document types at the source level.
            </p>
          </div>
        </div>
      </div>

      {/* Built for Every Role */}
      <div className="accessgen-roles">
        <p className="accessgen-section-label">Who Uses AccessGen</p>
        <h2>Built for Every Role</h2>
        <p className="accessgen-section-desc">
          Accessibility is a team effort. AccessGen gives every person involved in building, reviewing, and publishing digital content the specific tools they need for their role.
        </p>
        <div className="accessgen-roles-cards">
          <div className="accessgen-role-card">
            <h3>Developers</h3>
            <p>
              Catch and fix accessibility violations during development using inline VS Code diagnostics and the browser extension on localhost. Fix issues before they reach production.
            </p>
            <ul className="accessgen-role-list">
              <li>Inline WCAG diagnostics in VS Code</li>
              <li>Quick Fix code transformations</li>
              <li>Scan localhost and dev environments</li>
            </ul>
          </div>
          <div className="accessgen-role-card">
            <h3>QA Engineers</h3>
            <p>
              Run structured accessibility audits as part of your testing cycle. Document findings with criterion-level detail and track issue resolution across sprints.
            </p>
            <ul className="accessgen-role-list">
              <li>Batch URL scanning for full coverage</li>
              <li>Severity-sorted issue reports</li>
              <li>Integration with project tracking</li>
            </ul>
          </div>
          <div className="accessgen-role-card">
            <h3>Accessibility Specialists</h3>
            <p>
              Use the full toolkit for comprehensive audits. Combine automated scans with bookmarklets, the browser extension inspector, and manual testing workflows.
            </p>
            <ul className="accessgen-role-list">
              <li>WCAG bookmarklets for targeted checks</li>
              <li>ARIA inspector and tab order overlay</li>
              <li>Detailed audit report generation</li>
            </ul>
          </div>
          <div className="accessgen-role-card">
            <h3>Procurement Teams</h3>
            <p>
              Generate VPAT 2.5 Accessibility Conformance Reports to support federal procurement, enterprise sales cycles, and EAA, ADA, or Section 508 compliance documentation.
            </p>
            <ul className="accessgen-role-list">
              <li>VPAT 2.5 ACR in all editions</li>
              <li>Executive summary for legal review</li>
              <li>Audit trail and version history</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="accessgen-cta-banner">
        <p className="accessgen-cta-label">Part of tsQs Quality Engineering</p>
        <h2>Accessibility Testing as Part of Quality Engineering</h2>
        <p>
          AccessGen is developed and maintained by tsQs Inc., a quality engineering services company specializing in software testing, automation, and accessibility. Our team brings deep expertise in both accessibility standards and enterprise testing workflows.
        </p>
        <p>
          Accessibility is not a separate audit performed once a year. It is a quality attribute that needs to be measured and maintained throughout the software development lifecycle — just like performance, security, and functionality.
        </p>
      </div>

    </div>
  );
};

export default AccessGen;
