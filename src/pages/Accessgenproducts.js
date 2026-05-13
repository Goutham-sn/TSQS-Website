import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/Accessgenproducts.css";
import Carousel from "./Carousel";

import imgWidget2 from "./../Images/bm1.jpg";
import imgVsCode2 from "./../Images/bm2.jpg";

const AccessGenProducts = () => {
  const location = useLocation();

  useEffect(() => { document.title = "Accessibility Products | tsQs"; }, []);

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
    <div className="agp-container">

      {/* Carousel */}
      <div className="agp-carousel"><Carousel /></div>

      {/* Page Intro */}
      <section className="agp-intro">
        <div className="agp-text-block">
          <p>
            AccessGen includes four purpose-built tools that fit into different stages of the development
            and testing workflow. Whether you are a developer writing code, a QA engineer running audits,
            or an end user who needs a more accessible browsing experience, AccessGen has a tool designed
            specifically for your role.
          </p>
          <p>
            Each product integrates into existing workflows without requiring process changes, helping
            teams adopt accessibility practices incrementally and sustainably.
          </p>
        </div>
      </section>

      {/* AGEN Widget */}
      <section id="agen-widget" className="agp-section">
        <h2>AGEN Widget</h2>
        <div className="agp-row">
          <div className="agp-text">
            <p>
              The AGEN Widget is an embeddable accessibility toolbar that gives every visitor to your
              website one-click control over their browsing experience. It is a client-side solution that
              requires no backend changes  a single script tag is all it takes to deploy.
            </p>
            <p><strong>Disability profiles included:</strong></p>
            <ul>
              <li>Vision Profile  high contrast, large text, and image hiding</li>
              <li>Motor Profile  keyboard-only navigation enhancements and larger click targets</li>
              <li>Cognitive Profile  reading guides, simplified layouts, and distraction reduction</li>
              <li>Senior Profile  font enlargement and spacing adjustments for readability</li>
              <li>Focus Profile  highlights the active focus element for keyboard users</li>
              <li>Dyslexia Profile  dyslexia-friendly fonts and increased letter spacing</li>
            </ul>
            <p>
              Additional controls include color blindness correction modes (protanopia, deuteranopia,
              tritanopia), motion reduction for vestibular disorders, a built-in reading ruler, and
              cursor enlargement. The widget is fully keyboard-accessible and screen-reader-compatible.
            </p>
          </div>
          <div className="agp-image">
            <img src="/Accessibility/A11yWidget.jpg" alt="AGEN Accessibility Widget" />
          </div>
        </div>
        <div className="agp-row" style={{ marginTop: "2rem" }}>
          <div className="agp-image">
            <img src={imgWidget2} alt="AGEN Widget in use" />
          </div>
          <div className="agp-text">
            <p><strong>Important note about widgets and overlays:</strong></p>
            <p>
              The AGEN Widget is a user preference tool, not an accessibility compliance solution. It
              improves the experience for users who benefit from customization, but it does not substitute
              for fixing underlying accessibility issues in your code or content. AccessGen is transparent
              about this distinction  the widget complements a properly remediated product, it does not
              replace one.
            </p>
            <p>
              The widget is compatible with all major frameworks including React, Angular, Vue, and plain
              HTML. It stores user preferences in local storage so settings persist across sessions
              without requiring login.
            </p>
          </div>
        </div>
      </section>

      {/* Browser Extension */}
      <section id="browser-ext" className="agp-section agp-alt">
        <h2>Browser Extension</h2>
        <div className="agp-row agp-reverse">
          <div className="agp-image">
            <img src="/Accessibility/Browser_Extension.jpg" alt="Browser Extension for Accessibility Testing" />
          </div>
          <div className="agp-text">
            <p>
              The AccessGen Browser Extension lets you test any web page directly from your browser 
              including secured pages, authenticated sessions, and applications running on localhost or
              internal networks where URL-based scanners cannot reach.
            </p>
            <p><strong>Features of the Browser Extension:</strong></p>
            <ul>
              <li>Instant WCAG 2.2 scan of the current page with one click</li>
              <li>Errors, warnings, and passed guidelines shown in a structured panel</li>
              <li>Element highlighting  click any finding to highlight the affected element in the page</li>
              <li>Built-in color contrast checker with AA and AAA threshold indicators</li>
              <li>Tab order overlay to visualize keyboard navigation sequence</li>
              <li>ARIA role and attribute inspector for interactive elements</li>
              <li>Detailed per-element reports exportable to PDF or CSV</li>
            </ul>
            <p>
              The extension works on Chrome and Edge. Because it runs inside your active browser session,
              it can test pages that require login credentials without any special configuration. This
              makes it the preferred tool for QA engineers and accessibility specialists running audits on
              staging and production environments.
            </p>
          </div>
        </div>
      </section>

      {/* VS Code Extension */}
      <section id="vscode-ext" className="agp-section">
        <h2>VS Code Extension</h2>
        <div className="agp-row">
          <div className="agp-text">
            <p>
              The AccessGen VS Code Extension brings accessibility checking directly into the development
              environment, so issues are caught and fixed during development rather than discovered in
              testing or production. It integrates with the standard VS Code diagnostics system, so the
              experience is familiar to any developer already using ESLint or TypeScript.
            </p>
            <p><strong>What the VS Code Extension provides:</strong></p>
            <ul>
              <li>Inline WCAG 2.2 diagnostics that appear as red and yellow underlines in the editor</li>
              <li>One-click Quick Fix actions that apply accessible code patterns automatically</li>
              <li>Hover tooltips explaining the WCAG success criterion and its impact on users</li>
              <li>Support for HTML, JSX, TSX, Vue, Svelte, and Angular templates</li>
              <li>Checks for missing alt text, improper ARIA usage, form label associations, and more</li>
              <li>No build step required  diagnostics appear as you type</li>
            </ul>
            <p>
              By shifting accessibility left into the IDE, organizations reduce the volume of issues that
              reach testing, lower remediation costs, and build developer awareness of accessibility
              patterns over time.
            </p>
          </div>
          <div className="agp-image">
            <img src="/Accessibility/Vscode_Extension.jpg" alt="VS Code Accessibility Extension" />
          </div>
        </div>
        <div className="agp-row" style={{ marginTop: "2rem" }}>
          <div className="agp-image">
            <img src={imgVsCode2} alt="VS Code Extension in action" />
          </div>
          <div className="agp-text">
            <p><strong>Supported frameworks and file types:</strong></p>
            <ul>
              <li>React (JSX and TSX)</li>
              <li>Vue Single File Components (.vue)</li>
              <li>Svelte components (.svelte)</li>
              <li>Angular templates (HTML and inline)</li>
              <li>Plain HTML files</li>
              <li>Any framework producing standard HTML output</li>
            </ul>
            <p>
              The extension is available from the VS Code Marketplace and can be installed in minutes.
              It is compatible with VS Code 1.70 and above and requires no additional runtime dependencies.
            </p>
          </div>
        </div>
      </section>

      {/* WCAG Bookmarklets */}
      <section id="bookmarklets" className="agp-section agp-alt">
        <h2>WCAG Bookmarklets</h2>
        <div className="agp-row agp-reverse">
          <div className="agp-image">
            <img src="/Accessibility/A11yBookmarks.jpg" alt="WCAG Bookmarklets for Accessibility Testing" />
          </div>
          <div className="agp-text">
            <p>
              WCAG Bookmarklets are professional, lightweight testing tools that run targeted
              accessibility checks on any page directly from your browser bar. Unlike full scanners,
              bookmarklets perform specific, focused checks instantly  making them ideal for quick
              validation, spot-checking during development, and hands-on accessibility training.
            </p>
            <p><strong>Six bookmarklet categories are included:</strong></p>
            <ul>
              <li>Outline  visualizes heading hierarchy, landmark regions, and document structure</li>
              <li>Forms  highlights form fields, labels, fieldsets, and error associations</li>
              <li>Color  overlays contrast ratios and flags elements that fail AA or AAA thresholds</li>
              <li>Images  shows alt text values, decorative image marking, and figure captions</li>
              <li>Information Testing  checks for time limits, moving content, and flashing elements</li>
              <li>Information Analysis  reveals link text, language attributes, and page title validity</li>
            </ul>
            <p>
              Bookmarklets require no installation, no browser extension permissions, and no account.
              Drag any bookmarklet to your browser bookmarks bar and it is ready to use on any page,
              including localhost, internal tools, and pages behind authentication.
            </p>
            <p>
              They are particularly effective as training tools  accessibility specialists use them to
              walk developers through live examples of accessibility issues on their own applications,
              making the learning concrete and immediately actionable.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AccessGenProducts;