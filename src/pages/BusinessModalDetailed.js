import React from "react";
import "./../styles/BusinessModalDetailed.css";
import transformationImg from "./../Images/Quality-Transforma1tion.png";
import logos from "./../Images/qs.jpeg";
import qConsult from "./../Images/bm2.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./Carousel";

const BusinessModalDetailed = () => {

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
    <div className="business-container">
      {/* Division 1: Carousel */}
      <div className="business-carousel">
        <div className="dot-background" id="dotBackground"></div>
          <Carousel />
      </div>

      {/* Division 2: Bullet Points */}
      <section className="business-section">
        {/* <h2>Organisational Challenges</h2> */}
        <ul className="orange-bullets">
          <li>Do you feel that your organisation is unable to transform at the required pace?</li>
          <li>Are you frustrated with the skill gaps in your team due to the dearth of the required tools or processes?</li>
          <li>Are you wondering if legacy processes and methods are inhibiting expertise and adaptability and consequently hindering the growth of your organisation?</li>
          <li>How can we at tsQs help?</li>
        </ul>
      </section>

      {/* Division 3: Quality Transformation */}
      <section className="business-section" id="quality-transformation">
        <h2>Quality Transformation</h2>
        <div className="business-row">
          <div className="business-text">
            <p>
              We have a tremendous experience dealing with transformation in organisations that have legacy issues related to usage of tools and processes.
            </p>
            <p>
              Our experience dictates that Transformation can happen successfully provided that the following conditions are met:
            </p>
            <ul>
              <li>An organisation’s prior setback and adverse experience should serve as a learning tool</li>
              <li>There should be a thorough insight into the tools and processes that are being used by peers at the industry level</li>
              <li>This insight will help the organisation to seamlessly transition from legacy software testing to transformed quality engineering</li>
            </ul>
          </div>
          <div className="business-image">
            <img src={transformationImg} alt="" />
          </div>
        </div>
         <p className="qualitysectionp">
          We have an excellent team of professionals who are highly experienced and certified in the following domains. They have several years of experience 
          in the field of transformation and will utilise the lessons learnt over the years to assist your organisation to ensure that you do not have to face 
          the same obstacles all over again.
        </p>
        <ul className="orange-bullets">
          <li>Manual Testing and Automation</li>
          <li>Data Integrity and Accessibility</li>
          <li>ETL</li>
          <li>Applications for the Web and Desktop</li>
          <li>API and Device Certification</li>
          <li>PDF and Micro services</li>
        </ul>
        <p  className="qualitysectionp">
          In addition to the above, 
          our team of experts will join forces with your existing team
           to share their insights and expertise in the transformation of the Software testing space in your organisation.
        </p>
        <p className="qualitysectionp">
          The ultimate advantage you achieve by partnering with us is that our team will enable implementation of new tools, 
          technologies and processes in your organisation without any disruption to your ongoing delivery systems.
        </p>
       
      </section>

      {/*Quality Service */}
      <section className="business-section" id="quality-service">
        <h2>Quality Service</h2>
        <div >
        <p>You can be certain that the services you receive from us are of the highest standards. Our workforce 
          consists of professionals who are well-trained, experienced and highly qualified in their respective domains.
        </p>
        <p>
          Hence you will be collaborating with a set of professionals who come with several decades of testing experience and are adept in handling any
         type of testing projects and challenges that come with them. Their sincerity and dedication towards the task assigned is time-tested and exceptional.
        </p>
        <p> 
          They are proficient in working with script less testing tools with the latest trends in technology such as such as Artificial Intelligence
           and Machine Learning. A few of the tools engaged by them are:
        </p>
        <div className="qualitylogos">
            <img src={logos} alt="" />
          </div>
        </div>
      </section>


      <section  className="business-section">
        <div className="business-row">
           <div className="business-image">
            <img src={transformationImg} alt="" />
          </div>
          <div className="business-text">
            <p>
              Apart from that, our professional team, who are imparted training and rigorously certified by the finest in the industry in their relevant domains will work with your teams and 
              share their knowledge and expertise.
               This knowledge sharing exercise will help your team members be independent and ultimately become proficient in strategy, building and execution of your testing process.
            </p>
            <p>
             As mentioned earlier, we are also pleased to let you know that our team is highly diversified in terms of domain knowledge and skillsets. The following are a few areas
              (but not restricted to) in which our teams have tremendous expertise and experience.
            </p>
             <ul className="orange-bullets">
              <li>Manual Testing and Automation</li>
              <li>Data Integrity and Accessibility</li>
              <li>ETL</li>
              <li>Applications for the Web and Desktop</li>
              <li>API and Device Certification</li>
              <li>PDF and Micro services</li>
             </ul>
          </div>
         
        </div>
      </section>
      <section  className="business-section" id="quality-consulting">
        <div className="business-row">
          <div className="business-text">
            <h2>Quality Consulting</h2>
            <p>
              We often wonder why companies pay millions of dollars per year as “Consulting fees” to several firms who often provide advisory services.
            </p>
            <p>
               This is because every IT firm, irrespective of its size, is bound to run into problems at one point in their lifetime and have to deal with issues which they may or may
                not have accounted for. This is despite putting in hundreds of man-hours and millions of dollars in risk mitigation and risk management policies.
            </p>
            <p>
              Hence, every organisation utilizes the services of a consulting firm to offer
               guidance and executable solutions which could not have been done by their in-house workforce.
            </p>
          </div>
           <div className="business-image">
            <img src={qConsult} alt="" />
          </div>
        </div>
        <p>We, at tsQs, provide a suite of IT consultancy services to our clients to ensure that there is no impediment in their productivity at any stage. 
          Our team of change experts collaborate with your present workforce and assess the issues on hand.</p>
          <p>
            We, at tsQs, provide a suite of IT consultancy services to our clients to ensure that there is no impediment in their productivity at any stage. 
            Our team of change experts collaborate with your present workforce and assess the issues on hand.
          </p>
          <p>
            Our presence in diverse domains across the IT industry indicate our technical prowess and our ability to offer you specific and focused solutions.
          </p>
      </section>

    </div>
  );
};

export default BusinessModalDetailed;
