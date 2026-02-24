import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./../styles/Home.css";
import Carousel from "./Carousel";
import modalbase1 from "./../Images/mindset-change.gif";
import modalbase2 from "./../Images/data-test.gif";
import modalbase3 from "./../Images/automation.gif";
import expert1 from "./../Images/archtect.png";
import expert2 from "./../Images/process.png";
import expert3 from "./../Images/tools.png";
import business1 from "./../Images/b1.png";
import business2 from "./../Images/b2.png";
import business3 from "./../Images/b3.png";
import tsqsIntro from "./../../src/Video/tsQs_HomePage_Cap.mp4";

const Home = () => {

  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/quality-engineering#top");
  }
  const handleExpReadmore = () => {
    navigate("/expertise");
  }
  const handleQualityTrans = () => {
    navigate("/business-strategy")
  }
  const handleEbook = () => {
    navigate("/e-book")
  }

   useEffect(() => {
    document.title = "tsQs | Transforming Software Quality Services";
  }, []);

  return (
    <div className="home-container">
      {/* First Division: Carousel */}
      <div className="carousel">
       <Carousel />
      </div>
      
      {/* Second Division: About TSQS & Video */}
      <div className="about-tsqs">
        <div className="about-text">
          <h1>About tsQs</h1>
          <p>Our vision at tsQs is to embed our expertise and problem-solving experience across the Software delivery life cycle ensuing transformation of Software testing teams to Quality engineering teams and ultimately bring in the ability of the organization to eliminate duplicity in testing, boost automation and re usability at decreased time and costs.</p>
          <button className="know-more-btn" onClick={handleEbook} role="link">Download e-Book</button>
        </div>
        <div className="about-video">
          <video controls width="100%" aria-label="tsQs introduction video with voice-over explaining company services">
             <source src={tsqsIntro} type="video/mp4" />
             Your browser does not support the video tag.
          </video>
        </div>
      </div>
<div className="model-section">
  <h2>Model-Based Testing</h2>

  <div className="model-row">
    <div className="model-item">
      <img src={modalbase1} alt="" />
      <h3>Mindset Change</h3>
      <p>In addition to helping teams with better test case design, it also allows them to change their mindset towards testing.</p>
    </div>

    <div className="model-item">
      <img src={modalbase2} alt="" />
      <h3>Test Data Templates</h3>
      <p>With several decades of expertise in the testing domain, we have an adept team of professionals who are deft in employing</p>
    </div>

    <div className="model-item">
      <img src={modalbase3} alt="" />
      <h3>Automation Enabled Models</h3>
      <p>We employ Automation-enabled models that help our clients boost efficiency of their teams.Since the automated tests can run</p>
    </div>
  </div>

  <div className="read-more-container">
    <button className="read-more-btn" onClick={handleReadMore} role="link" aria-label="Read More About Model Based Testing">Read More</button>
  </div>
</div>

<div className="model-section">
  <h2>Our Expertise</h2>

  <div className="model-row">
    <div className="model-item">
      <img src={expert1} alt="" />
      <h3>Architectural Solution</h3>
      <p>
        Excellent STLC architecture is construed in an organization through the usage of the finest tools,
        superior processes...
      </p>
    </div>

    <div className="model-item">
      <img src={expert2} alt="" />
      <h3>Process Improvements</h3>
      <p>
        Our architects and quality engineers work together to define a process using industry best
        practices with low cost...
      </p>
    </div>

    <div className="model-item">
      <img src={expert3} alt="" />
      <h3>Tool Integration</h3>
      <p>
        Look no further. Our team at tsQs will be pleased to assist you by imparting the right tools as
        per your requirement.
      </p>
    </div>
  </div>

  <div className="model-button">
    <button className="read-more-btn" onClick={handleExpReadmore} role="link" aria-label="Read More About Our Expertise">Read More</button>
  </div>
</div>

      
      {/* Fifth Division: Business Model */}
      <div className="our-expertise">
        <h2>Business Model</h2>
        <div className="card-container">
        <div className="card">
          <img src={business1} alt="" />
          <h3>Quality Transformation</h3>
          <p>
            We have a tremendous experience dealing with transformation in
            organisations that have legacy issues related to usage of tools and
            processes.
          </p>
          <button className="know-more-btn" onClick={handleQualityTrans} aria-label="Know More About Quality Transformation" role="link">Know More</button>
        </div>

        <div className="card">
          <img src={business2} alt="" />
          <h3>Quality Service</h3>
          <p>
            You can be certain that the services you receive from us are of the
            highest standards. Our workforce consists of professionals who are…
          </p>
          <button className="know-more-btn" onClick={handleQualityTrans}aria-label="Know More About Quality Service" role="link">Know More</button>
        </div>

        <div className="card">
          <img src={business3} alt="" />
          <h3>Quality Consulting</h3>
          <p>
            We often wonder why companies pay millions of dollars per year as
            “Consulting fees” to several firms who often provide advisory
            services.
          </p>
          <button className="know-more-btn" onClick={handleQualityTrans}aria-label="Know More About Quality Consulting" role="link">Know More</button>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default Home;