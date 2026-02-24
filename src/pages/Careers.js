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
      "CI/CD and DevOps knowledge",
    ],
  },
  {
    id: 2,
    title: "ETL-Test Lead",
    date: "July 18th 2025",
    location: "Hyderabad, Telangana",
    company: "tsQs inc.",
    summary:
      "We are looking for an experienced ETL Test Lead with a strong background in Informatica to join our team.",
    description: `Location: Hyderabad, Telangana
Post Date: July 18th 2025

We are looking for an experienced ETL Test Lead with a strong background in Informatica to join our team. The ideal candidate will have a proven track record of testing ETL processes, validating data transformations, and ensuring data integrity.

Key Responsibilities:
- Develop and execute comprehensive test plans
- Validate data migration and transformation
- Track and manage defects
- Automate testing scripts using Informatica/SQL
- Maintain documentation of test results
- Collaborate with data teams
- Conduct performance testing

Qualifications:
- 10+ years ETL testing (Informatica)
- Proficient in SQL, data profiling
- Knowledge of data warehousing and test tools
- Strong communication and Agile experience`,
  },
  {
    id: 3,
    title: "Accessibility Lead & Testers",
    date: "May 3rd 2025",
    location: "Overland Park, Dallas, Atlanta USA and Hyderabad, India",
    company: "tsQs inc.",
    summary:
      "Seeking experienced accessibility experts with strong WCAG, inclusive design, and assistive technology testing background.",
    description: `Location: Overland Park, Dallas, Atlanta USA and Hyderabad, India
Post Date: May 3rd 2025

We are looking for Accessibility Leads and Testers who are passionate about inclusive design and accessibility best practices.

Key Skills and Qualifications:
- Deep knowledge of accessibility standards (WCAG 2.1, ADA, Section 508)
- Experience with assistive technologies (JAWS, NVDA, VoiceOver, TalkBack, ZoomText, Dragon)
- Accessibility certifications (CPACC, WAS, CPWA, Trusted Tester) preferred
- 5+ years in accessibility testing, 7+ years in frontend, UX, or D&I
- Excellent communication and documentation skills
- Programming knowledge to guide dev teams on accessible solutions
- High awareness of digital disability inclusion
- Self-driven with accountability mindset`,
  },
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
      {/* Carousel Section */}
      <div className="careers-carousel">
       <Carousel />
      </div>

      {/* Job Listings */}
      <div className="careers-content">
        <h1>Open Positions</h1>
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <button
              className={`job-title ${activeJobId === job.id ? "active" : ""}`}
              onClick={() => toggleJob(job.id)}
              aria-expanded={activeJobId === job.id}
              aria-controls={`job-details-${job.id}`}
            >
              {job.title}
            </button>

            {activeJobId === job.id && (
              <div
                id={`job-details-${job.id}`}
                className="job-details"
                style={{ whiteSpace: "pre-line" }}
              >
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Post Date:</strong> {job.date}</p>
                <p><strong>Location:</strong> {job.location}</p>

                {job.skills && (
                  <>
                    <p><strong>Skills:</strong></p>
                    <ul>
                      {job.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </>
                )}

                {job.description && <p>{job.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
