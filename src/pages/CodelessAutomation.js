import React from "react";
import logosImg from "./../Images/qs.jpeg";
import guiImg from "./../Images/GUI-Automation.jpg";
import apiImg from "./../Images/api.jpg";
import mobileImg from "./../Images/Mobile-App-Automation.jpeg";
import virtualizationImg from "./../Images/Service-Virtualization.jpg";
import certifiedp from "./../Images/Certified-Professionals.jpg";
import industryTools from "./../Images/Industry-Leading-Tools.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/CodelessAutomation.css";
import Carousel from "./Carousel";

const CodelessAutomation = () => {
    const location = useLocation();
    useEffect(() => {
  const hash = location.hash;
  if (hash) {
    // Timeout ensures DOM is fully loaded
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Adjust delay as needed
  }
}, [location]);


  return (
    <div className="automation-container">
      {/* Header Carousel */}
      <div className="automation-carousel">
       <Carousel />
      </div>

      {/* Intro Section */}
      <section className="automation-intro">
        <div className="automation-text-block">
          <ul className="orange-bullets">
            <li>Are you feeling frustrated in the absence of an appropriate framework?</li>
            <li>Is your experience with tool selection turning out to be harrowing?</li>
            <li>Do you find it difficult to lay hands on skilled resources?</li>
            <li>Do you need help with your automation strategies?</li>
          </ul>
          <p>
            Don’t bother about it as our team at tsQs will ease your burden with our wide range of automation capabilities.
          </p>
          <p>
            Our select team of Architects and experts will co-ordinate to scrutinize your problems and discern your challenges.
            Based on this analysis, an automation program and strategy will be conceptualised which will then enable your team and
            your organisation to make rapid advances in automation.
          </p>
          <p>
            Our Quality Automation and Ideation and Innovation professionals are adept in their respective fields and work on
            cutting-edge technologies. They are deft in handling scriptless testing tools which embed trending features such as
            Artificial Intelligence and Machine Learning. Some of the tools engaged by them are:
          </p>
          <div className="image-center-wrapper">
          <img src={logosImg} alt="" className="automation-logos" />
          </div>
        </div>
      </section>

      {/* GUI Automation Section */}
      <section id="gui-automation" className="automation-section">
        <h2>GUI Automation</h2>
        <div className="automation-row">
          <div className="automation-text">
            <p>
              Since GUI is to be performed on the interface where the user interacts with the system, our GUI experts will
              hand-hold your team in the entire process.
            </p>
            <p><strong>Challenges in GUI Testing and where we step in?</strong></p>
            <ul>
              <li>The process is more difficult than interface testing</li>
              <li>Time-consuming and intensive usage of resources</li>
              <li>More challenging since the user interface is ever changing</li>
              <li>Performed from a User’s perspective and hence confirms the deployment capability of an application</li>
            </ul>
            <p>
              We have a team of certified and experienced professionals in the GUI automation space to assist you with every aspect.
              Although a tedious process, our technical prowess in this field will guarantee you peace of mind and assure software
              deployment on time.
            </p>
          </div>
          <div className="automation-image">
            <img src={guiImg} alt="" />
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="automation-section">
        <h2>API</h2>
        <div className="automation-row reverse">
          <div className="automation-image">
            <img src={apiImg} alt="" />
          </div>
          <div className="automation-text">
            <p>
              The pace at which technology is advancing is enormous and organisations today need to accelerate to ensure that they
              are not left behind.
            </p>
            <p>
              The field of Software testing too is evolving every day and hence it is imperative that organisations need to be
              agile, steady and adaptable.
            </p>
            <p>
              The case for API’s to be considered is that they are the primary interface in application logic. This aspect enables
              us to test requirements immediately after the development of API’s and helps us avoid waiting for the GUI to be
              developed.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile App Automation Section */}
      <section id="mobile-app-automation" className="automation-section">
        <h2>Mobile App Automation</h2>
        <div className="automation-row">
          <div className="automation-text">
            <p>
              In an era where there are more than 4.32 billion mobile internet users, or roughly 90 percent of the global internet
              population use a mobile device to go online, how can you, as an organisation, be left behind?
            </p>
            <p>
              Automation of mobile applications is an integral part of success for any organisation in this space as it is both
              cost-effective and ensures a global outreach.
            </p>
            <p>
              Having been in this space since the evolution of Mobile Internet and Smartphones, we have always been at the forefront
              of innovation and adoption of vanguard technologies.
            </p>
          </div>
          <div className="automation-image">
            <img src={mobileImg} alt="" />
          </div>
        </div>
      </section>

      {/* Service Virtualization Section */}
      <section id="service-virtualization" className="automation-section">
        <h2>Service Virtualization</h2>
        <div className="automation-row reverse">
          <div className="automation-image">
            <img src={virtualizationImg} alt="" />
          </div>
          <div className="automation-text">
            <p>
              When it comes to Software Testing, it is of paramount importance for companies to achieve the finest quality at great
              speed. This can be achieved if the organisation has access to a dependable and practical test environment.
            </p>
            <p>
              The entire process of enterprise application development is not standalone and is contingent on diverse applications,
              integrated in perplexing ways.
            </p>
            <p>
              Hence, it is essential that enterprises are provided with reliable testing across their integrated digital landscape
              in order to ensure that they are able to deliver their digital initiatives meticulously and on schedule.
            </p>
          </div>
        </div>
      </section>
      {/* Division 6: Certified Professionals */}
       <section id="certified-professionals" className="automation-section">
  <h2>Certified Professionals</h2>
  <div className="automation-row">
    <div className="automation-text">
      <p>
        Organizations often question the need to be partnered with certified professionals when they have their own set of employees who they feel are qualified and experienced in their domain.
      </p>
      <p>
        However, an important aspect to be considered when utilizing the services of a Certified Professional is that it reduces the risks associated with software testing and ultimately keeps the costs low. In addition to this, companies can also mitigate and often eliminate the risks associated with reputation and loss of brand identity.
      </p>
      <p>
        Further, at tsQs, our professionals come with industry-level global certifications and with years of testing experience which help in reducing product delivery timelines.
        Our experience and research have found that the use of Certified Professionals assists organizations in multiple ways.
      </p>
    </div>
    <div className="automation-image">
      <img src={certifiedp} alt="" />
    </div>
  </div>
        </section>

        {/* Division 7: Industry Leading Tools */}
       <section id="industry-leading-tools" className="automation-section">
  <h2>Industry Leading Tools</h2>
  <div className="automation-row">
    <div className="automation-text">
      <p>
        The tools in any testing environment should be able to help automate testing, increase speed of product delivery for the organisation and also perform an expansive range of tests.
      </p>
      <p>
        Since every organisation is aimed at become Agile, it is vital that the testing scenario also adapts to technology changes and exploits the latest tools in the testing field. Since every testing team is different and the tools required are not similar, there can never be a one-size-fits-all approach in a testing environment.
      </p>
      <p>
        We then need to ascertain client requirements with regard to general software for QA, Mobile app and the phase of testing that the organisation is currently in.
      </p>
      <p><strong>The criteria for selection of a testing tool should be:</strong></p>
      <ul>
        <li>User Interface</li>
        <li>Usability</li>
        <li>Features & Functionality</li>
        <li>Compatibility with multiple devices and browsers</li>
        <li>Congruence with different programming languages</li>
        <li>Reporting, Integration and Value for money</li>
      </ul>
      <p>
        Since there are several testing tools available, our goal at tsQs is to provide expert advice to the organisation based on their requirement and feasibility so that they can take meaningful and well-informed decisions.
      </p>
    </div>
    <div className="automation-image">
      <img src={industryTools} alt="" />
    </div>
  </div>
       </section>
    </div>
  );
};

export default CodelessAutomation;
