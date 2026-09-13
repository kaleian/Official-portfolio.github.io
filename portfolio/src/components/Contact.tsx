import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kaleian54@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-direct-card">
            <h3 className="contact-pitch">Let's talk about your next project.</h3>
            <p className="contact-note">
              Whether you have a job opportunity, a freelance project, or just want to connect, feel free to reach out.
            </p>

            <div className="contact-item-row">
              <div className="contact-item-icon">
                <i className="lni lni-envelope"></i>
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Email</span>
                <span className="contact-item-val">kaleian54@gmail.com</span>
              </div>
              <button
                type="button"
                className="contact-copy-btn"
                onClick={copyEmail}
              >
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="contact-item-row">
              <div className="contact-item-icon">
                <i className="lni lni-phone"></i>
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Phone</span>
                <a href="tel:+254727377520" className="contact-item-val">+254 727 377 520</a>
              </div>
            </div>

            <div className="contact-item-row">
              <div className="contact-item-icon">
                <i className="lni lni-map-marker"></i>
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Location</span>
                <span className="contact-item-val">Nairobi, Kenya (Remote Worldwide)</span>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="field-label" htmlFor="user-name">Your Name</label>
                <input
                  type="text"
                  id="user-name"
                  required
                  className="field-input"
                  placeholder="e.g. Alex Smith"
                />
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="user-email">Email Address</label>
                <input
                  type="email"
                  id="user-email"
                  required
                  className="field-input"
                  placeholder="e.g. alex@company.com"
                />
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="user-msg">Message</label>
                <textarea
                  id="user-msg"
                  required
                  className="field-input"
                  placeholder="What would you like to build or discuss?"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>

              {submitted && (
                <div className="msg-sent-alert">
                  <i className="lni lni-checkmark-circle"></i>
                  <span>Message sent! I'll get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
