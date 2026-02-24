import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/ExpertiseDetailed.css";
import architectureImg from "./../Images/arsolu.jpg";
import architecureImg1 from "./../Images/architecht-01.jpg"
import architecureImg2 from "./../Images/aerchi-03.jpg"
import processImg from "./../Images/process improvment.jpeg";
import toolsImg from "./../Images/Tool-Integration.jpg";
import pocImg from "./../Images/Proof-Of-Concepts.jpeg";
import Carousel from "./Carousel";

const ExpertiseDetailed = () => {

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
    <div className="expertise-container">
      <div className="expertise-header">
        <Carousel />
      </div>
      {/* Section 1: Architectural Solution */}
<section className="expertise-section" id="architectural-solution">
  <h2>Architectural Solution</h2>

  {/* Subsection 1 */}
  <div className="expertise-row">
    <div className="expertise-text">
      <p>
        In the current scenario, every firm in the industry is focused on agility to stay ahead of competition.
      </p>
      <p>
        Towards this, the process Software testing plays a significant role in gaining an edge and staying relevant in the business.
      </p>
      <p>
        With breakthroughs in technology, Software Quality can be improved considerably.
      </p>
       <p>
        Excellent STLC architecture is construed in an organization through the usage of the finest tools, superior processes, seamless integration and first-rate practices.
      </p>
      <p>
        It is at this critical juncture that tsQs will be delighted to partner with you to develop a layout/ STLC architecture that will eventually result in delivery of superior products at reasonable costs.
      </p>
    </div>
    <div className="expertise-image">
      <img src={architectureImg} alt="" />
    </div>
  </div>

  {/* Subsection 2 */}
  <div className="expertise-row">
    <div className="expertise-image">
      <img src={architecureImg1} alt="" />
    </div>
    <div className="expertise-text">
      <ul>
        <li>STLC Architecture will act as a bedrock to support the edifice of the organisation</li>
        <li>Lead to standardisation of the finest practices and processes</li>
        <li>Eliminate duplicity in the Testing process</li>
        <li>Dependencies in the process will be curtailed/eliminated</li>
        <li>A boost in automation not only at the application level but also in Process and tool integration</li>
        <li>Expand the scope for Reusability</li>
        <li>Get rid of Testing Gaps and Defect Leakage</li>
        <li>Adapt Defect triage</li>
      </ul>
    </div>
  </div>

  {/* Subsection 3 */}
  <div className="expertise-row">
    <div className="expertise-text">
      <p>
        Primarily, our Ideation and Innovation Experts along with our Quality Process SME’s and Quality Automation Experts will collaborate extensively to hear out your concerns, understand your current issues, the vision of your organisation and your ideas.
      </p>
      <p>
        After a comprehensive deliberation and brainstorming, they will produce End to End STLC Architectures and provide a readout of the architecture thus produced.
      </p>
    </div>
    <div className="expertise-image">
      <img src={architecureImg2} alt="" />
    </div>
  </div>
</section>


      {/* Section 2: Process Improvement */}
      <section className="expertise-section" id="process-improvement">
        <h2>Process Improvement</h2>
        <div className="expertise-row">
          <div className="expertise-text">
            <p>
              Our architects and quality engineers work together to define a process using industry best practices with low cost and rapid delivery.
            </p>
            <p>
              Defined process would eliminate duplicate testing, start testing in the initial requirement phase, increase automation and reusability, improve end-to-end traceability for your organization.
            </p>
            <p>
              Our responsibility towards our clients does not culminate with the delivery of agreed objectives and execution of the project.
            </p>
            <p>
              We are keen to ensure that our clients derive the maximum value from our partnership and understand that an organisation can remain agile and resilient only through continuous improvements in productivity and efficiency.
            </p>
            <p>
              Towards this, we work with your teams to bring about improvements in select processes, which would not only help them perform better, but also ensure an uptick in productivity and reduction in turnaround time.
            </p>
          </div>
          <div className="expertise-image">
            <img src={processImg} alt="" />
          </div>
        </div>
      </section>

      {/* Section 3: Tool Integration */}
      <section className="expertise-section" id="tool-integration">
        <h2>Tool Integration</h2>
        <div className="expertise-row">
          <div className="expertise-image">
            <img src={toolsImg} alt="" />
          </div>
          <div className="expertise-text">
            <p>
              Look no further. Our team at tsQs will be pleased to assist you by imparting the right tools as per your requirement.
            </p>
            <p>
              We have a unique and talented team of individuals with decades of industry and testing experience to provide you world class services.
            </p>
            <p>
              Our initial team comprises of Architects and experts who will join forces to recognize the issue at hand.
            </p>
            <p>
              After the initial assessment, we get in our Proof-of-Concept team and our experts in Ideation and Innovation who will build on the proof of concept and work on the prior observations.
            </p>
            <p>
              This is accomplished by the usage of various tools as per established industry standards that are in sync with your organisational goals.
            </p>
            <p>
              Once this is done, it will enable you to take an informed and intelligent choice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Proof of Concepts */}
      <section className="expertise-section" id="proof-of-concepts">
        <h2>Proof Of Concepts</h2>
        <div className="expertise-row">
          <div className="expertise-text">
            <p>
              We develop several PoCs using different industry standard tools that are right for your organization and help you make educated decisions.
            </p>
            <p>
              Having endured several years of testing with multiple clients across the globe, we understand that a good Proof-of-Concept is imperative to every organisation, especially in software development, as it is a high stakes game and there is no scope for mediocrity.
            </p>
            <p>
              Since the ultimate objective of this process is to test the technical feasibility of an idea, it is pertinent that you, as a client, get all the assistance that you need at this stage.
            </p>
            <p>
              Our teams come with considerable years of experience in this domain and are deft in designing of proof-of -concepts that can help save your organisation millions, in terms of time, effort and manpower requirements.
            </p>
          </div>
          <div className="expertise-image">
            <img src={pocImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertiseDetailed;
