import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",     // from EmailJS
        "YOUR_TEMPLATE_ID",    // from EmailJS
        formData,
        "YOUR_PUBLIC_KEY"      // from EmailJS
      )
      .then(
        () => {
          setStatus("Message sent! Thank you 💌");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Something went wrong, please try again.");
        }
      );
  };

  return (
    <div className="section contact-section">
      <h2>If you have any enquires, feel free to get in touch!</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}
