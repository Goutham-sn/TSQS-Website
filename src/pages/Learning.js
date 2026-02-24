import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../styles/Learning.css";
import learningImg from "./../Images/Learning2.png";
import certImg from "./../Images/Certification1.png";
import Carousel from "./Carousel";

const Learning = () => {

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
    <div className="learning-container">
      {/* Header Carousel */}
      <div className="learning-carousel">
        <Carousel />
      </div>

      {/* Section 1: Learning */}
      <section className="learning-section" id="Learning">
        <h2>Learning</h2>
        <div className="learning-row reverse">
          <div className="learning-image">
            <img src={learningImg} alt="" />
          </div>
          <div className="learning-text">
            <p>
              Since one of our organisational goals is life-long learning, we have a team of certified experts who share their insights and experience with our team. They also train and guide our team members towards obtaining a global certification in their respective domains.
            </p>
            <p>
              With several decades of industry experience behind us and having a team of expert trainers in this field, we also invite ambitious students eager to make a mark in this industry by providing them customized training solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Certification */}
      <section className="learning-section" id="Certification">
        <h2>Certification</h2>
        <div className="learning-row">
          <div className="learning-image">
            <img src={certImg} alt="" />
          </div>
          <div className="learning-text">
            <p>
              Apart from our core business, we also collaborate with several Software Testing Certification Boards around the globe to cater to aspirants looking to enter the testing domain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning;
