// Experience.jsx
// Displays detailed experience entries using data.js.
// Developer note: add more 'experiences' in data.js when you want to expand.

import React from "react";
import { experiences } from "../data";

const ExperienceItem = ({ item }) => {
  return (
    <div className="card">
      <div className="exp-role">
        <div>
          <h3>{item.title} — {item.company}</h3>
          <div className="exp-meta">{item.location} · {item.date}</div>
        </div>
      </div>

      <ul className="clean">
        {item.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="section left">
      <h2>Work Experience</h2>

      {experiences.map((exp, idx) => (
        <ExperienceItem item={exp} key={idx} />
      ))}
    </section>
  );
};

export default Experience;
