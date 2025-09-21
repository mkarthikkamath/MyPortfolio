// App.jsx
// Root single-page portfolio app. Keeps layout and imports all components.

import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="app-root">

      <div className="theme-toggle-float">
        <ThemeToggle />
      </div>

      {/* Page container */}
      <div className="container">
        <Header />

        <main>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <footer className="footer" style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 12 }}>
        <small style={{ flex: 1, textAlign: "center" }}>© {new Date().getFullYear()} Designed and Developed by Miyar Karthik Kamath using GPT-5</small>

        <div style={{ marginRight: 12 }}>
            <button
            className="btn secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            >
            Back to top
            </button>
        </div>
        </footer>


      </div>
    </div>
  );
}

export default App;
