import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Quality.css";
import Carousel from "./Carousel";
import modalbase1 from "./../Images/mindset-change.gif";
import modalbase2 from "./../Images/data-test.gif";
import modalbase3 from "./../Images/automation.gif";
import modalbase4 from "./../Images/divide & Maintain.png";
import modalbase5 from "./../Images/reusable test desing.jpeg";
import modalbase6 from "./../Images/automationtestcase.jpeg";
import modalbase7 from "./../Images/testcaseoptimization.jpeg";
import codeless1 from "./../Images/Service-Virtualization.jpg";
import codeless2 from "./../Images/api.jpg";
import codeless3 from "./../Images/Mobile-App-Automation.jpeg";
import codeless4 from "./../Images/GUI-Automation.jpg";
import codeless5 from "./../Images/Certified-Professionals.jpg";
import codeless6 from "./../Images/Industry-Leading-Tools.jpg";

const QualityEng = () => {

   useEffect(() => {
    document.title = "Quality Engineering | tsQs";
  }, []);

  const navigate = useNavigate();
  const handleMindset = () => {
    navigate("/modal-based-testing#mindset-change");
  } 
  const handleTestdata = () => {
    navigate("/modal-based-testing#test-data-templates");
  }
  const handleAutomationModal = () => {
    navigate("/modal-based-testing#automation-enabled-models")
  }
  const handleDivideMaintain = () => {
    navigate("/modal-based-testing#divide-maintain")
  }
  const handleReusabletest = () => {
    navigate("/modal-based-testing#reusable-test-design")
  }
  const handleAutomationTest = () => {
    navigate("/modal-based-testing#automation-test-case-generation")
  }
  const handleTestCaseOpt = () => {
    navigate("/modal-based-testing#test-case-optimization")
  }
  const handleServiceVirtual = () => {
    navigate("/codeless-automation#service-virtualization")
  }
  const handleGuiAuto = () => {
    navigate("/codeless-automation#gui-automation")
  }
   const handleApi = () => {
    navigate("/codeless-automation#api")
  }
  const handleMobileApi = () => {
    navigate("/codeless-automation#mobile-app-automation")
  }
   const handleCertifiedpro = () => {
    navigate("/codeless-automation#certified-professionals")
  }
  const handleIndustryLeading = () => {
    navigate("/codeless-automation#industry-leading-tools")
  }

       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <div id="top" tabIndex="-1" aria-hidden="true" className="quality-container">
      <div className="quality-carousel">
        <Carousel />
        {/* <h2>Quality Engineering</h2> */}
      </div>
       
      {/* Section 1: Introduction */}
      <div className="quality-intro">
        <h1>Model Based Testing</h1>
        <p>
        A smart and modern approach to Software testing that employs better design and planning of test cases. 
        Consecutively, it benefits teams as well as organizations through cost optimization, efficiency, reusability and standardization of practices and thus makes the entire testing process less error-prone. 
        To summarize,
        Model Based Testing transforms the whole process of software testing to quality engineering.
        </p>
      </div>

      {/* Section 2: Our Quality Services */}
      <div className="quality-services">
        {/* <h2>Our Quality Services</h2> */}
        <div className="service-cards">
          {/* Service Card 1 */}
          <div className="service-card">
          <img src={modalbase1} alt="" className="Mindset Change" />
            <h3>Mindset Change</h3>
            <p>In addition to helping teams with better test case design, 
            it also allows them to change their mindset towards testing...</p>
            <button className="know-more-btnq" onClick={handleMindset} aria-label="Know more about Mindset Change" role="link">Know More</button>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
          <img src={modalbase2} alt="" className="Mindset Change" />
            <h3>Test Data Templates</h3>
            <p>With several decades of expertise in the testing domain,
             we have an adept team of professionals who are deft in employing</p>
             <button className="know-more-btnq" onClick={handleTestdata} aria-label="Know more about Test Data Templates" role="link">Know More</button>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
          <img src={modalbase3} alt="" className="Mindset Change" />
            <h3>Automation Enabled Models</h3>
            <p>We employ Automation-enabled models that help our clients boost efficiency of their teams.
            Since the automated tests</p>
            <button className="know-more-btnq" onClick={handleAutomationModal}aria-label="Know more about Automation Enabled Models" role="link">Know More</button>
          </div>

          <div className="service-card">
          <img src={modalbase4} alt="" className="Mindset Change" />
            <h3>Divide & Maintain</h3>
            <p>MBT enables division of the application into small modules,
                 which in turn, facilitates teams and organizations with effortless</p>
            <button className="know-more-btnq" onClick={handleDivideMaintain} aria-label="Know more about Divide and Maintain" role="link">Know More</button>
          </div>

          <div className="service-card">
          <img src={modalbase5} alt="" className="Mindset Change" />
            <h3>Reusable Test Design</h3>
            <p>At the heart of re-usability, 
            is the indisputable fact that it reduces redundancies across an organisation’s multiple projects</p>
            <button className="know-more-btnq" onClick={handleReusabletest} aria-label="Know more about Reusable Test Design" role="link">Know More</button>
          </div>


          <div className="service-card">
          <img src={modalbase6} alt="" className="Mindset Change" />
            <h3>Automation Test Case Generation</h3>
            <p>In an era where quality,
                 precision and execution speed are vital to an organisation’s survival and eventual</p>
            <button className="know-more-btnq" onClick={handleAutomationTest}aria-label="Know more about Automation Test Case Generation" role="link">Know More</button>
          </div>

          <div className="service-card">
          <img src={modalbase7} alt="" className="Mindset Change" />
            <h3>Test Case Optimization</h3>
            <p>Our expertise in the usage of Test Case Optimisation 
                enables us support our client objectives by making the entire</p>
            <button className="know-more-btnq" onClick={handleTestCaseOpt} aria-label="Know more about Test Case Optimization" role="link">Know More</button>
          </div>


        </div>
      </div>

      {/* Section 3: Our Approach */}
      <div className="quality-approach">
        <h2>Codeless Automation</h2>
        <p>
        Our select team of Architects and experts will co-ordinate to scrutinize your problems
         and discern your challenges. Based on this analysis, an automation program and strategy 
         will be conceptualised
         which will then enable your team and your organisation to make rapid advances in automation.
        </p>
      </div>
      <div className="quality-services">
        {/* <h2>Our Quality Services</h2> */}
        <div className="service-cards">
          {/* Service Card 1 */}
          <div className="service-card">
          <img src={codeless1} alt="" className="Mindset Change" />
            <h3>Service Virtualization</h3>
            <p>When it comes to Software Testing, 
                it is of paramount importance for companies to achieve the finest quality</p>
            <button className="know-more-btn" onClick={handleServiceVirtual} aria-label="Know more about Service Virtualization" role="link">Know More</button>
          </div>

                    {/* Service Card 2 */}
                    <div className="service-card">
          <img src={codeless2} alt="" className="Mindset Change" />
            <h3>API</h3>
            <p>At the heart of re-usability,
             is the indisputable fact that it reduces redundancies across an organisation’s</p>
            <button className="know-more-btn" onClick={handleApi}aria-label="Know more about API" role="link">Know More</button>
          </div>

                    {/* Service Card 3 */}
                    <div className="service-card">
          <img src={codeless3} alt="" className="Mindset Change" />
            <h3>Mobile App Automation</h3>
            <p>In an era where there more than 4.32 billion mobile 
                internet users or roughly 90 percent of the global internet</p>
            <button className="know-more-btn" onClick={handleMobileApi} aria-label="Know more about Mobile App Automation" role="link">Know More</button>
          </div>


                    {/* Service Card 4 */}
                    <div className="service-card">
          <img src={codeless4} alt="" className="Mindset Change" />
            <h3>GUI Automation</h3>
            <p>Since GUI is to be performed on the interface where the user 
              interacts with the system, our GUI experts</p>
            <button className="know-more-btn" onClick={handleGuiAuto} aria-label="Know more about GUI Automation" role="link">Know More</button>
          </div>

                    {/* Service Card 5 */}
                    <div className="service-card">
          <img src={codeless5} alt="" className="Mindset Change" />
            <h3>Certified Professionals</h3>
            <p>Organizations often question the need to be partnered with 
              certified professionals when they have their own</p>
            <button className="know-more-btn" onClick={handleCertifiedpro} aria-label="Know more about Certified Professionals" role="link">Know More</button>
          </div>


            {/* Service Card 6 */}
            <div className="service-card">
          <img src={codeless6} alt="" className="Mindset Change" />
            <h3>Industry Leading Tools</h3>
            <p>The tools in any testing environment should be able to help automate testing,
               increase speed of product.</p>
            <button className="know-more-btn" onClick={handleIndustryLeading}aria-label="Know more about Industry Leading Tools" role="link">Know More</button>
          </div>
        </div>
    </div>

    </div>
  );
};

export default QualityEng;
