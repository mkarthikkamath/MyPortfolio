// Projects.jsx
// Project cards with external links. Buttons open in new tabs.
// Developer note: If you later host demos, add an optional demo property to each project in data.js.

import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="section left">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((p, i) => (
          <div className="project" key={i}>
            <div style={{ flex: 1 }}>
              <strong style={{ display: "block" }}>{p.title}</strong>
              <div className="meta" style={{ marginTop: 6, color: "var(--muted)" }}>{p.desc}</div>
            </div>

            <div style={{ marginLeft: 12 }}>
              {/* Link opens in a new tab */}
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                View Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
