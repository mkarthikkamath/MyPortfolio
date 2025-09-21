// Skills.jsx
// Render skill groups from data.js for quick scanning.

import React from "react";
import { skills } from "../data";

const SkillRow = ({ title, items }) => (
  <div className="card">
    <h4 style={{ margin: 0 }}>{title}</h4>
    <p style={{ marginTop: 8, color: "var(--muted)" }}>{items.join(" • ")}</p>
  </div>
);

const Skills = () => {
  return (
    <section className="section left">
      <h2>Technical Skills</h2>
      <SkillRow title="Languages" items={skills.languages} />
      <SkillRow title="Frameworks & Libraries" items={skills.frameworks} />
      <SkillRow title="Databases and APIs" items={[...skills.databases || [], ...skills.apis || []].filter(Boolean)} />
      <SkillRow title="Cloud & DevOps" items={skills.cloud} />
      <SkillRow title="Machine Learning" items={skills.machinelearning} />
      <SkillRow title="Other Tools" items={skills.others} />
    </section>
  );
};

export default Skills;
