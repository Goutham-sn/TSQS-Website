import React from "react";
import "./../styles/BusinessModal.css"; // Reusing the same CSS
import business1 from "./../Images/bm1.jpg";
import business2 from "./../Images/bm2.jpg";
import business3 from "./../Images/bm3.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const BusinessStrategy = () => {

   useEffect(() => {
      document.title = "Business Model | tsQs";
    }, []);
    

  const navigate = useNavigate();
  const handleStrategic = () => {
    navigate("/business-modal-detailed#quality-transformation")
  }
   const handleExecution= () => {
    navigate("/business-modal-detailed#quality-service")
  }
   const handleImprovement = () => {
    navigate("/business-modal-detailed#quality-consulting")
  }
    
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <div className="business-container">
      {/* Carousel Section */}
      <div className="business-carousel">
        <div class="background-animation"></div>
        <Carousel />
      </div>

      {/* Intro Section */}
      <div className="business-intro">
        <h1>Business Model</h1>
        <p>
          Our business strategy focuses on aligning quality engineering with core business goals. We enable organizations to achieve faster time-to-market, better customer satisfaction, and reduced costs.
        </p>
      </div>

      {/* Services Section */}
      <div className="business-services">
        <div className="business-cards">
          <div className="business-card">
            <img src={business1} alt="" />
            <h3>Quality Transformation</h3>
             <p>We have strong experience in helping organizations transition from legacy systems to modern QE frameworks.</p>
            <button className="know-more-btnb" onClick={handleStrategic} aria-label="Know more about Quality Transformation" role="link">Know More</button>
          </div>

          <div className="business-card">
            <img src={business2} alt="" />
            <h3>Quality Service</h3>
            <p>You can be certain that the services you receive from us are of the highest standards. Our workforce consists</p>
            <button className="know-more-btnb" onClick={handleExecution} aria-label="Know more about Quality Service" role="link">Know More</button>
          </div>

          <div className="business-card">
            <img src={business3} alt="" />
            <h3>Quality Consulting</h3>
            <p>We often wonder why companies pay millions of dollars per year as “Consulting fees” to several firms</p>
            <button className="know-more-btnb" onClick={handleImprovement} aria-label="Know more about Quality Consulting" role="link">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStrategy;
