import React from "react"; 
import "./../styles/Footer.css";
import Logo1 from "./../Images/tsqs-hm-ft-logo.gif";
import { Link} from "react-router-dom";


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-section">
      <div className="logo1">
      <img src={Logo1} alt="tsQs Logo" className="logo-img" />
      </div>
        <h3>Business Model</h3>
          <ul>
  <li><Link to="/business-modal-detailed#quality-transformation">Quality Transformation</Link></li>
  <li><Link to="/business-modal-detailed#quality-service">Quality Service</Link></li>
  <li><Link to="/business-modal-detailed#quality-consulting">Quality Consulting</Link></li>
</ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/tsqs-inc/" target="_blank" rel="noopener noreferrer" aria-label="tsQs LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/tsqsinc/" target="_blank" rel="noopener noreferrer" aria-label="tsQs Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/TsqsInc" target="_blank"  rel="noopener noreferrer" aria-label=" tsQs Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-section footer-quicklinks">
        <div className="footer-quicklinks-cols" role="navigation" aria-label="Site sections">
          <div className="footer-quicklinks-col">
            <h3>Discover</h3>
            <ul className="footer-quicklinks-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quality-engineering">Quality Engineering</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/expertise">Expertise</Link></li>
              <li><Link to="/academy">Academy</Link></li>
            </ul>
          </div>
          <div className="footer-quicklinks-col">
            <h3>Company</h3>
            <ul className="footer-quicklinks-list">
              <li><Link to="/business-strategy">Business Model</Link></li>
              <li><Link to="/e-book">e-Book</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-section footer-contact">
        <h3>Contact Us</h3>
        <p><strong>tsQs Inc</strong></p>
        <p>6565 N MacArthur Blvd #225, Irving, TX 75039, USA</p>
        <p>+1.214.624.5222</p>
        <p style={{ paddingTop: '10px' }}><strong>Sprint Business Centre</strong></p>
        <p>6th Floor, Jayabheri Silicon Towers, Kothaguda, Hyderabad-500084</p>
        <p>+91.928.103.8201</p>
        <p style={{ paddingTop: '10px' }}><strong>Sales:</strong> <a href="mailto:info@tsqsinc.com">info@tsqsinc.com</a></p>
      </div>
    </footer>
          {/* Horizontal Divider */}
<div className="footer-divider" aria-hidden="true"></div>

{/* Copyright Section */}
<div className="footer-bottom">
  <p>&copy; {new Date().getFullYear()}<a href="https://tsqsinc.com" target="" rel="noopener noreferrer"> tsQs Inc.</a> All Rights Reserved. Pictures by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik </a></p>
</div>
</>
  );
};

export default Footer;
