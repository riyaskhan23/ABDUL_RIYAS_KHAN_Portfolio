import React, { useState } from 'react';

import { IoAt } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import './Contact.css';

export default function Contact() {

    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(event.target);

        // Enter your free access key from web3forms.com here
        formData.append("access_key", "05d0440c-482a-4fda-b94a-61023c17fff1");

        try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully! 🎉");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message || "Something went wrong!");
        }
        } catch (error) {
        console.error("Error submitting form", error);
        setResult("Failed to send message. Please try again.");
        } finally {
        setIsSubmitting(false);
        }
    };

  return (
    <section id="contact" className="contact-section">
      {/* Background Ambient Glows */}
      <div className="contact-unique-glow glow-one"></div>
      <div className="contact-unique-glow glow-two"></div>

      <div className="contact-card">
        
        {/* Floating Badge */}
        <div className="contact-floating-badge"><span>💬 Let's Connect</span></div>

        {/* Header */}
        <div className="contact-heading-container">
          <h2 className="contact-main-title">L E T ' S  T A L K</h2>
          <p className="contact-subtitle">Have a project in mind or want to collaborate? Let's build something awesome together!</p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-content-grid">
          
          {/* Left Side: Info */}
          <div className="contact-info-box">
            <h3 className="info-title">Get in Touch</h3>
            <p className="info-desc">
              I'm currently available for full-time roles, freelance projects, and creative collaborations. Drop a message or reach out via email!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon"><IoAt /></span>
                <div>
                  <span className="contact-label">Email Me</span>
                  <a href="mailto:riyaskhan@example.com" className="contact-val">riyaaskhan23@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon phone"><FaPhoneAlt /></span>
                <div>
                  <span className="contact-label">Mobile Number</span>
                  <span className="contact-val">+91 9629038439</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Simple Form */}
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message..." rows="4" required className="form-input"></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>

        {/* Footer Copyright / Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Abdul Riyas Khan. Crafted with passion.</p>
        </div>

      </div>
    </section>
  );
}