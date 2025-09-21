// Contact.jsx
import React from "react";
import { contact } from "../data";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <aside id="contact" className="right-card">
      <div className="contact-card">
        <h2>Contact</h2>

        <p>Email: <a style={{ color: "var(--accent)" }} href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Phone: <span style={{ color: "var(--muted)" }}>{contact.phone}</span></p>

        <hr style={{ margin: "16px 0", borderColor: "rgba(255,255,255,0.02)" }} />

        <div style={{ marginTop: 8 }}>
          <h3 style={{ marginBottom: 8 }}>Send a message</h3>
          <ContactForm />
        </div>
      </div>
    </aside>
  );
};

export default Contact;
