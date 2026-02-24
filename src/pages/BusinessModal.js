import React from "react";
import "./../styles/BusinessModal.css";
import business1 from "./../Images/bm1.jpg";
import business2 from "./../Images/bm2.jpg";
import business3 from "./../Images/bm3.jpg";
import Carousel from "./Carousel"; 
import { useEffect } from "react";

const BusinessModal = () => {

   useEffect(() => {
    document.title = "Business Model | tsQs";
  }, []);
  
  return (
    <div className="business-container">
      {/* Carousel Section */}
      <div className="business-carousel">
       <Carousel />
      </div>

      {/* Intro Section */}
      <div className="business-intro">
        <h1>Business Model</h1>
        <p>
          Our business model focuses on transforming legacy software testing approaches into agile and efficient Quality Engineering solutions. We deliver value-driven services through consulting, modernization, and scalable strategies.
        </p>
      </div>

      {/* Services Section */}
      <div className="business-services">
        <div className="business-cards">
          <div className="business-card">
            <img src={business1} alt="Quality Transformation" />
            <h3>Quality Transformation</h3>
            <p>We have strong experience in helping organizations transition from legacy systems to modern QE frameworks.</p>
            <button className="know-more-btn">Know More</button>
          </div>

          <div className="business-card">
            <img src={business2} alt="Quality Services" />
            <h3>Quality Services</h3>
            <p>You can be certain that the services you receive from us are of the highest standards. Our workforce consists</p>
            <button className="know-more-btn">Know More</button>
          </div>

          <div className="business-card">
            <img src={business3} alt="Quality Consulting" />
            <h3>Quality Consulting</h3>
            <p>Our consulting services help reduce unnecessary costs while improving efficiency and customer experience.</p>
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModal;
