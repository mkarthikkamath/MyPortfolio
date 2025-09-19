// Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section className="section">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>Senior Software Engineer</strong> - Tech Mahindra (Expedia)  
          <p>Built Kotlin microservice for Price Summary handling 5M daily users, migrated REST → gRPC, reduced latency 40%.</p>
        </li>
        <li>
          <strong>Senior Software Engineer</strong> - Infosys (Allstate)  
          <p>Expanded backend APIs for AllState Boat products, automated validations, improved underwriting processes.</p>
        </li>
        <li>
          <strong>Software Engineer</strong> - Infosys  
          <p>Backend APIs processing 1000+ policy checks/day, 95%+ code coverage, seamless legacy integration.</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
