import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../index.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mp95mmb",
        "template_lkf72o6",
        formData,
        "W4hMrFL5c8e7cdZxY"
      )
      .then(
        () => {
          setStatus("Message sent ✨ Thank you!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section className="section contact-section">
      <div className="contact-card">
        <h1 className="contact-title">Get in touch 💌</h1>
        <p className="contact-intro">
          If you have any enquiries, feel free to send me a message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="contact-button" type="submit">
            Send ✨
          </button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
    </section>
  );
}