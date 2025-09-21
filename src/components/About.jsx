// About.jsx - ThemeToggle placed inside the About card (body)
import React from "react";

const About = () => {
  return (
    <section className="section left">
      <h2>Summary</h2>

      <div
        className="card"
        style={{
          position: "relative",
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        {/* Left: about text */}
        <div style={{ flex: 1 }}>
          <strong style={{ display: "block" }}>About Me</strong>
          <p className="justified-paragraph">
            I'm a backend-focused Software Engineer with over 5 years of experience, specializing in Java and Spring Boot.

            I have a strong background in building scalable, secure, and reliable systems using REST APIs, gRPCs, and microservices architecture.

            My expertise also includes cloud platforms like AWS and CI/CD tools such as Jenkins, with a focus on delivering production-ready software.

            I've contributed to high-impact projects in the Insurance (Allstate) and Travel Technology (Expedia Group) industries.

            I take a pragmatic approach to development — delivering quickly, iterating based on feedback, and focusing on what drives the most value for users.

            I'm always eager to take on new backend challenges, deepen my technical skills, and grow as an engineer.
          </p>
        </div>
      </div>

        <div style={{ marginTop: 24 }}>
        <div className="card">
            <strong style={{ display: "block", fontSize: "16px", marginBottom: 8 }}>Education</strong>

            {/* MS Section */}
            <div style={{ marginBottom: 16 }}>
            <div style={{ color: "var(--text)", fontWeight: 500, marginBottom: 4 }}>
                MS in Software Engineering — San Jose State University, CA (Aug 2023 – May 2025)
            </div>
            <div style={{ color: "var(--muted)", marginBottom: 6 }}>GPA: 3.85 / 4.0</div>
            <div style={{ color: "var(--muted)" }}>
                <em>Relevant Coursework:</em>
                <ul style={{ margin: "6px 0 0 16px", padding: 0, listStyle: "disc", color: "var(--muted)" }}>
                <li>Cloud Technologies</li>
                <li>Enterprise Software Solutions</li>
                <li>Virtual Technologies</li>
                <li>Machine Learning</li>
                <li>Data Mining</li>
                <li>Android & iOS Development</li>
                </ul>
            </div>
            </div>

            <hr style={{ borderColor: "rgba(255,255,255,0.05)", margin: "16px 0" }} />

            {/* BE Section */}
            <div>
            <div style={{ color: "var(--text)", fontWeight: 500, marginBottom: 4 }}>
                BE in Computer Science —{" "}
                <a
                href="https://nitte.edu.in/nmamit/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
                >
                NMAM Institute of Technology
                </a>, India (Aug 2014 – Aug 2018)
            </div>
            <div style={{ color: "var(--muted)" }}>
                <em>Relevant Coursework:</em>
                <ul style={{ margin: "6px 0 0 16px", padding: 0, listStyle: "disc", color: "var(--muted)" }}>
                <li>Operating Systems</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>Web Development</li>
                </ul>
            </div>
            </div>
        </div>
        </div>

    </section>
  );
};

export default About;
