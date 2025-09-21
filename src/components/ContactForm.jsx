// ContactForm.jsx (with Google reCAPTCHA v2 checkbox)
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useCurrentTheme } from "../useTheme";

const SERVICE_ID = "service_jvltprr";
const TEMPLATE_ID = "template_h0sjsp7";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const initialState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const theme = useCurrentTheme();


  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ loading: false, ok: false, msg: "Please fill name, email and message." });
      return false;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      setStatus({ loading: false, ok: false, msg: "Please enter a valid email." });
      return false;
    }
    if (!recaptchaToken) {
      setStatus({ loading: false, ok: false, msg: "Please complete the reCAPTCHA." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "Sending..." });

    if (!validate()) return;

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "Website Contact",
        message: form.message,
        time: new Date().toLocaleString(),
        recaptcha_token: recaptchaToken // include token so you can verify server-side if you add backend later
      };

      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus({ loading: false, ok: true, msg: "Message Sent!" });
      setForm(initialState);
      // reset reCAPTCHA widget after successful submit
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setRecaptchaToken(null);
      }
      console.log("EmailJS result:", res);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ loading: false, ok: false, msg: "Failed to send. Try again later." });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        style={inputStyle}
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        type="email"
        required
        style={inputStyle}
      />

      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject (optional)"
        style={inputStyle}
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={5}
        required
        style={textareaStyle}
      />

      {/* reCAPTCHA widget */}
      <div style={{ margin: "10px 0" }}>
        {RECAPTCHA_SITE_KEY ? (
          <ReCAPTCHA
            key={theme}   
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => {
              setRecaptchaToken(token);
              // if you want to clear a previous status message
              setStatus(prev => ({ ...prev, msg: "" }));
            }}
            ref={recaptchaRef}
            theme={theme}
          />
        ) : (
          <div style={{ color: "#f8d58e", fontSize: 13 }}>
            reCAPTCHA site key missing. Please set VITE_RECAPTCHA_SITE_KEY in .env.
          </div>
        )}
      </div>

    <div style={{ margin: "20px 0", display: "flex", gap: 8, alignItems: "center" }}>
     <button className="btn" type="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Send Message"}
        </button>
        <div style={{ color: "var(--muted)", fontSize: 13 }}>
          {status.ok === true && <span style={{ color: "var(--accent)" }}>{status.msg}</span>}
          {status.ok === false && <span style={{ color: "#f96b6b" }}>{status.msg}</span>}
          {status.ok === null && status.msg && <span>{status.msg}</span>}
        </div>
      </div>
    </form>
  );
}

/* Small inline styles so you don't need CSS edits */
const inputStyle = {
  width: "100%", padding: "8px", marginBottom: 8, borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "inherit"
};
const textareaStyle = { ...inputStyle, minHeight: 110 };
