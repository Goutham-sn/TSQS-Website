import React from "react";
import "./../styles/ModelBasedTesting.css";
import img1 from "./../Images/mindset-change.gif";
import img2 from "./../Images/divide & Maintain.png";
import img3 from "./../Images/automation.gif";
import img4 from "./../Images/reusable test desing.jpeg";
import img5 from "./../Images/automationtestcase.jpeg";
import img6 from "./../Images/testcaseoptimization.jpeg";
import img7 from "./../Images/data-test.gif";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./Carousel";


const contentData = [
  {
    title: "Mindset Change",
    text: `In addition to helping teams with better test case design, it also allows them to change their mindset towards testing and broadens their horizons and eventually enables organizations to achieve flawless results. Eventually, it leads to the transformation of the tester’s mindset to quality Architects and Engineers.`,
    img: img1,
  },
  {
    title: "Divide & Maintain",
    text: `MBT enables division of the application into small modules, which in turn, facilitates teams and organizations with effortless maintenance and consistent updates for changes in new requirements. This allows revision of these updates to a single block and helps in amendment of the impacted or linked test cases.`,
    img: img2,
  },
  {
    title: "Automation Enabled Models",
    text: `We employ Automation-enabled models that help our clients boost efficiency of their teams. Since the automated tests can run sequentially, it facilitates continuous testing, integration, and delivery in the software development process.

In addition to ramping up the accuracy levels and increasing coverage, our automation-enabled models benefit organisations through augmentation of resource efficiencies and improved bug detection. This ultimately helps improve their revenue and judicious usage of testing resources.`,
    img: img3,
  },
  {
    title: "Reusable Test Design",
    text: `At the heart of re-usability, is the indisputable fact that it reduces redundancies across an organisation’s multiple projects and improves their management and implementation. We, at tsQs, are experts in the implementation of re-usability test cases.

We firmly believe that our clients need to have access to the latest tools and methodologies to achieve their objectives. Towards this, we implement re-usability test cases that aid organisations to lower their maintenance costs, manage compliance requirements and improve their cost-efficiencies.`,
    img: img4,
  },
  {
    title: "Automation Test Case Generation",
    text: `In an era where quality, precision and execution speed are vital to an organisation’s survival and eventual success, we firmly believe in the power of automation of test data generation.

Being savants in the field of testing, we understand the complex task of generation of data sets that are both rational and relevant. By employing this method, we ensure celerity and accuracy in the testing process and make sure that organisations deliver their products well within the set timelines.`,
    img: img5,
  },
  {
    title: "Test Case Optimization",
    text: `Our expertise in the usage of Test Case Optimisation enables us support our client objectives by making the entire testing process more efficient and cost-effective. We also assist our clients derive maximum benefits by streamlining their testing processes and ensure consistency of results in the distant future.

Further, optimization of test cases ensures that speed and efficiency is not achieved at the cost of quality of the test results and hence software quality is affirmed.`,
    img: img6,
  },
  {
    title: "Test Data Templates",
    text: `With several decades of expertise in the testing domain, we have an adept team of professionals who are deft in employing templates for test cases. This not only helps organisations in detection of any issues before the date of software roll-out, but also aids in streamlining the entire process.

As a result of usage of these templates, we provide our clients the ability to investigate errors and predict release timelines which are vital to achieve delivery standards.`,
    img: img7,
  },
];

const ModelBasedTesting = () => {

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
    <div className="mbt-container">
        <div className="carousel">
         <Carousel />
        </div>
      {/* <h1>Modal Based Testing</h1> */}
      {contentData.map((section, index) => (
        <div
          key={index}
          id={section.title.toLowerCase().replace(/\s+/g, '-')} // this adds id like 'mindset-change'
          className={`mbt-section ${index % 2 === 0 ? "left-image" : "right-image"}`}
        >
          <div className="mbt-text">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <div className="mbt-image">
            <img src={section.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModelBasedTesting;
