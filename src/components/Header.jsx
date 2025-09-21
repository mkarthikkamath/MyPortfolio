// Header.jsx - contact chip beside GitHub, Resume in top-right with marginRight
import React from "react";
import { contact } from "../data";

const AvatarFallback = ({ src = "/DPB.png", initials = "MK", size = 92 }) => {
  const [ok, setOk] = React.useState(true);
  React.useEffect(() => setOk(true), [src]);
  return (
    <div className="avatar" style={{ width: size, height: size, borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
      {ok ? (
        <img src={src} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={() => setOk(false)} />
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontWeight: 700, fontSize: 28 }}>
          {initials}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const scrollToContact = (e) => {
    e?.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = el.querySelector("input, textarea, button");
      if (firstInput) firstInput.focus({ preventScroll: true });
    }
  };

  return (
    <header className="header" style={{ marginBottom: 28, display: "flex", gap: 16, alignItems: "center" }}>
      <AvatarFallback />

      <div className="title" style={{ minWidth: 0 }}>
        <h1 style={{ margin: 0 }}>Miyar Karthik Kamath</h1>
        <p style={{ margin: "6px 0 0" }}>Java Backend Engineer | MSSE @ SJSU May 2025</p>

        <div className="contact-row" style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <a className="chip" href={`mailto:${contact.email}`}>{contact.email}</a>
          <span className="chip">{contact.location}</span>
          <a className="chip" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="chip" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>

          {/* Contact chip beside GitHub */}
          <button className="chip" onClick={scrollToContact} style={{ cursor: "pointer" }}>Contact</button>
        </div>
      </div>

      {/* Right-side area: only Resume (with marginRight to shift visually left) */}
      <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
        <a className="btn" href="/Miyar_Karthik_Kamath_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ marginRight: 30 }}>
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
