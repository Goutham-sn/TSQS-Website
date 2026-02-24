import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./../styles/Academy.css";
import academy1 from  "./../Images/academy1.jpeg";
import academy2 from "./../Images/academy2.jpeg";
import Carousel from "./Carousel";

const Academy = () => {
   useEffect(() => {
    document.title = "Academy | tsQs";
  }, []);

const navigate = useNavigate();
const handleLearning = () => {
    navigate("/learning#Learning")
  }
const handleCertification = () => {
  navigate("/learning#Certification")
}
 

  return (
    <div className="academy-container">
      <div className="carousel">
        <Carousel />
      </div>

      {/* Introduction Section */}
      <div className="academy-intro">
        <h1>Academy</h1>
        <p>
        In pursuant of our goal towards a learning organisation, we have established an Academy whose aim is to imbibe a spirit of life-long learning in its employees and partners. We achieve this by providing both offline and online learning tools and thus ensure that our teams are proficient, adaptable, and kept abreast of the latest technologies in their relevant domain.<br></br>
        In addition to being a learning ground for our employees and partners, we also train aspirants who wish to venture into the IT sector and carve successful careers.
        </p>
      </div>

      {/* Programs or Courses Section */}
      <div className="academy-programs">
        <div className="academy-cards">
          <div className="academy-card">
            <img src={academy1} alt="" />
            <h3>Learning</h3>
            <p>Since one of our organisational goals is life-long learning, we have a team of certified experts who share their insights and experience with our team.</p>
            <button className="know-more-btn" onClick={handleLearning} aria-label="Know more about Learning" role="link">Know More</button>
          </div>

          <div className="academy-card">
            <img src={academy2} alt="Automation Essentials" />
            <h3>Certification</h3>
            <p>Apart from our core business, we also collaborate with several Software Testing Certification Boards around the globe to cater to aspirants looking to enter the testing domain.</p>
            <button className="know-more-btn" onClick={handleCertification} aria-label="Know more about Certification" role="link">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
