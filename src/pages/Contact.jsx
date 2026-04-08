import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_mp95mmb",
        "template_lkf72o6",
        formData,
        "W4hMrFL5c8e7cdZxY"
      );

      setStatus("Your message has been sent. Thank you.");
      setFormData(initialState);
    } catch (error) {
      setStatus("Something went wrong. Please try again or email hello@marove-aqua.com.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="page-section container contact-layout">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Commissions, enquiries and collaborations</h1>
        <p className="contact-intro">
          If you would like to enquire about an original piece, discuss a commission,
          or simply get in touch, send a message below.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            name="message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="button button-primary" disabled={isSending}>
          {isSending ? "Sending…" : "Send enquiry"}
        </button>

        {status ? <p className="status-message">{status}</p> : null}
      </form>
    </section>
  );
}