import React, { useState } from "react";
import "./../styles/Careers.css";
import Carousel from "./Carousel";
import { useEffect } from "react";

const jobs = [
  {
    id: 1,
    title: "QA Tosca Automation Testers",
    date: "June 3rd 2025",
    location: "Bangalore, Hyderabad, Pune India",
    company: "tsQs inc.",
    summary:
      "Looking for experienced QA Tosca Automation Testers to build and maintain test automation for Web, Desktop, and API applications.",
    skills: [
      "Hands-on experience in Tricentis Tosca for Web/Desktop/API testing",
      "Tools like SOAPUI, Postman",
      "Automation Infrastructure setup, Distributed execution",
      "Test management tools: JIRA, qTest",
      "SQL/database testing",
      "Data formats: XML, JSON",
      "Test execution report generation",
      "CI/CD and DevOps knowledge"
    ]
  },
  {
    id: 2,
    title: "ETL-Test Lead",
    date: "May 27th 2025",
    location: "Hyderabad, Telangana",
    company: "tsQs inc.",
    summary:
      "We are looking for an experienced ETL Test Lead with a strong background in Informatica to join our team.",
    skills: [
      "Develop and execute comprehensive test plans",
      "Validate data migration and transformation",
      "Track and manage defects",
      "Automate testing scripts using Informatica/SQL",
      "Maintain documentation of test results",
      "Collaborate with data teams",
      "Conduct performance testing",
      "10+ years ETL testing (Informatica)",
      "Proficient in SQL, data profiling",
      "Knowledge of data warehousing and test tools",
      "Strong communication and Agile experience"
    ]
  },
  {
    id: 3,
    title: "Accessibility Lead & Testers",
    date: "July 3rd 2025",
    location: "Overland Park, Dallas, Atlanta USA and Hyderabad, India",
    company: "tsQs inc.",
    summary:
      "Seeking experienced accessibility experts with strong WCAG, inclusive design, and assistive technology testing background.",
    skills: [
      "Deep knowledge of WCAG 2.1, ADA, Section 508",
      "Experience with JAWS, NVDA, VoiceOver, TalkBack, Dragon, ZoomText",
      "Accessibility certifications: CPACC, WAS, CPWA, Trusted Tester (preferred)",
      "5+ years in accessibility testing; 7+ years in frontend, UX, or D&I",
      "Strong programming and communication skills",
      "High disability inclusion awareness",
      "Self-driven and accountable mindset"
    ]
  },
  {
    id: 4,
    title: "Manual Test Leads/Senior Manual Testers",
    date: "May 27th 2025",
    location: "Hyderabad, Telangana",
    company: "tsQs inc.",
    summary:
      "We are looking for experienced Manual Test Leads or Senior Manual Testers to lead and strengthen our manual QA efforts.",
    skills: [
      "Lead and mentor a team of manual testers",
      "Develop and execute test plans, test cases, and strategies",
      "Collaborate with cross-functional teams",
      "Perform manual testing of web and mobile applications",
      "Provide detailed test reports and documentation",
      "Improve testing methodologies and processes",
      "8+ years experience in manual testing",
      "Proven leadership in QA teams",
      "Deep understanding of testing methodologies",
      "Strong experience with Jira, TestRail or similar tools",
      "Excellent communication and collaboration skills"
    ]
  },
  {
    id: 5,
    title: "SAP Tester",
    date: "May 27th 2025",
    location: "Hyderabad, Telangana",
    company: "tsQs inc.",
    summary:
      "We are hiring SAP Testers/Sr. Testers with experience in SAP/ERP testing, TOSCA, and full-cycle QA processes for telecom and SAP SCM modules.",
    skills: [
      "Graduate or Master's in Engineering (any discipline), MCA, or Computer Science",
      "4 to 12+ years of experience as Software Test Engineer",
      "Must have SAP Testing / Telecom Domain / SAP SCM Module experience",
      "Experience with TOSCA for SAP, ERP Testing, Oracle Testing is a plus",
      "Strong skills in Requirement Analysis, Test Plan, Test Case Design & Execution",
      "Downstream & Upstream Validations (E2E), SAP BW Queries & Report validation",
      "Write & execute SQL scripts for Data Completeness, Accuracy & Integrity",
      "Knowledge of SDLC, STLC, Defect Tracking, Bug Lifecycle",
      "Agile QA experience using JIRA/qTest",
      "Strong SQL, ERP & Oracle Testing knowledge",
      "Ability to work both independently and in fast-paced team environments"
    ]
  },
  {
    id: 6,
    title: "Performance Testers",
    date: "July 3rd 2025",
    location: "Dallas, TX and Hyderabad, Bangalore India",
    company: "tsQs inc.",
    summary:
      "We are seeking Performance Testers experienced in Neoload, Salesforce performance testing, and deep diagnostics for complex systems.",
    skills: [
      "Bachelor’s degree in Computer Science, Engineering, or related field",
      "Certifications like Certified Neoload Professional (preferred)",
      "Proven experience as a Performance Test Lead using Neoload",
      "Expertise in performance testing concepts, methodologies, and tools",
      "Strong Neoload scripting skills (parameterization, correlation, modeling)",
      "Experience with Salesforce performance testing",
      "Familiarity with performance profiling and monitoring tools",
      "Solid understanding of web technologies and client-server architecture",
      "Strong analytical and troubleshooting abilities",
      "Effective communicator with cross-functional collaboration experience",
      "Leadership skills to mentor and guide a team of performance engineers"
    ]
  },
  {
    id: 7,
    title: "Senior QA Database Tester with Tosca",
    date: "April 3rd 2025",
    location: "100% Remote – United States, Hyderabad, Bangalore, Pune India",
    company: "tsQs inc.",
    summary:
      "We are looking for a highly experienced Senior QA Database Tester with strong data validation, automation (Tosca), and ETL testing expertise.",
    skills: [
      "Over 15 years in Testing with experience in Data manipulation, validation, fixes, and enhancements",
      "Strong experience in Tosca-based automation for data workflows",
      "7+ years of hands-on ETL Process / Data Warehouse Testing",
      "Deep understanding of SDLC and STLC",
      "Proven ability to write and execute test cases, test plans, and scripts",
      "Capable of delivering on tight project timelines",
      "High situational awareness of QA status, with consistent communication to leads and stakeholders",
      "Agile/Scrum environment experience",
      "Efficient in time management and self-guided task completion",
      "Excellent problem-solving and critical-thinking abilities"
    ]
  }
];

const TestPage = () => {
  const [activeJobId, setActiveJobId] = useState(null);

  const toggleJob = (id) => {
    setActiveJobId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
      document.title = "Careers | tsQs";
    }, []);

  return (
    <div className="careers-container">
      <div className="careers-carousel">
        <Carousel />
      </div>

      <div className="careers-content">
        <h1>Current Openings</h1>
        {jobs.map((job) => {
          const isActive = activeJobId === job.id;
          return (
            <div className="job-card" key={job.id}>
              <button
                className={`job-title ${isActive ? "active" : ""}`}
                onClick={() => toggleJob(job.id)}
                aria-expanded={isActive}
                aria-controls={`job-details-${job.id}`}
              >
                <span className="accordion-icon" aria-hidden="true">
                  {isActive ? "▼" : "▶"}
                </span>{" "}
                {job.title}
              </button>

              {isActive && (
                <div id={`job-details-${job.id}`} className="job-details">
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Post Date:</strong> {job.date}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Summary:</strong> {job.summary}</p>
                  {job.skills && (
                    <>
                      <p><strong>Skills:</strong></p>
                      <ul>
                        {job.skills.map((skill, idx) => (
                          <li key={idx}> {skill}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestPage;

