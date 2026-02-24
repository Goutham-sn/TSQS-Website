import React from "react";
import "./../styles/Expertise.css";
import expertise1 from "./../Images/arsolu.jpg";
import expertise2 from "./../Images/toolintegration.jpg";
import expertise3 from "./../Images/process improvment.jpeg";
import expertise4 from "./../Images/poc.jpeg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const Expertise = () => {

   useEffect(() => {
    document.title = "Expertise | tsQs";
  }, []);

  const navigate = useNavigate();
  
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleArchitectural = () => {
    navigate("/expertise-detailed#architectural-solution");
  } 
  const handleProcessImp = () => {
    navigate("/expertise-detailed#process-improvement");
  } 
  const handleToolIntegration = () => {
    navigate("/expertise-detailed#tool-integration");
  } 
  const handleProofOfC = () => {
    navigate("/expertise-detailed#proof-of-concepts");
  } 

  return (
    <div className="expertise-container">
      <div className="carousel">
        <Carousel />
      </div>

      {/* Section 1: Introduction */}
      <div className="expertise-intro">
        <h1>Expertise</h1>
        <p>
        At tsQs, we are known for our decades of expertise, be it on the technical front or in our people. By partnering with us, you can be rest assured that we will disseminate our expertise with your teams and ensue that the knowledge transfer is synchronous and coherent in approach.<br></br>
        Our expertise in multiple domains will expedite the required definitive edge in your processes that is de rigueur in today’s nimble and dextrous business environments.
        </p>
      </div>

      {/* Section 2: Our Expertise Cards */}
      <div className="expertise-services">
        <div className="expertise-cards">
          <div className="expertise-card">
            <img src={expertise1} alt="" />
            <h3>Architectural Solution</h3>
            <p>
            In the current scenario, every firm in the industry is focused on agility to stay ahead of competition.
            </p>
            <button className="know-more-btn" onClick={ handleArchitectural} aria-label="Know more about Architectural Solution" role="link">Know More</button>
          </div>

          <div className="expertise-card">
            <img src={expertise2} alt="" />
            <h3>Tool Integration</h3>
            <p>
            Look no further. Our team at tsQs will be pleased to assist you by imparting the right tools as per your requirement.
            </p>
            <button className="know-more-btn" onClick={handleToolIntegration} aria-label="Know more about Tool Integration" role="link">Know More</button>
          </div>

          <div className="expertise-card">
            <img src={expertise3} alt="" />
            <h3>
            Process Improvement</h3>
            <p>
            Our architects and quality engineers work together to define a process using industry best practices with low
            </p>
            <button className="know-more-btn" onClick={handleProcessImp} aria-label="Know more about Process Improvement " role="link">Know More</button>
          </div>

          <div className="expertise-card">
            <img src={expertise4} alt="" />
            <h3>Proof Of Concepts</h3>
            <p>
            We develop several pocs using different industry standard tools that are right for your organization and help you make
            </p>
            <button className="know-more-btn" onClick={handleProofOfC} aria-label="Know more about Proof of concepts" role="link">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
