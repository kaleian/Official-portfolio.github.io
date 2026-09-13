import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const copyEmail = () => {
    navigator.clipboard.writeText('kaleian54@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mbgjvgqj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        const data = await response.json().catch(() => null);
        if (data && Array.isArray(data.errors) && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('There was a problem submitting your message. Please try again or email directly.');
        }
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error occurred. Please try again or contact kaleian54@gmail.com.');
      setStatus('error');
    }
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
            <form 
              action="https://formspree.io/f/mbgjvgqj" 
              method="POST" 
              onSubmit={handleSubmit}
            >
              <div className="field-group">
                <label className="field-label" htmlFor="user-name">Your Name</label>
                <input
                  type="text"
                  id="user-name"
                  name="name"
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
                  name="email"
                  required
                  className="field-input"
                  placeholder="e.g. alex@company.com"
                />
              </div>

              <div className="field-group">
                <label className="field-label" htmlFor="user-msg">Message</label>
                <textarea
                  id="user-msg"
                  name="message"
                  required
                  className="field-input"
                  placeholder="What would you like to build or discuss?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="msg-sent-alert">
                  <i className="lni lni-checkmark-circle"></i>
                  <span>Message sent! I'll get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="msg-error-alert">
                  <i className="lni lni-warning"></i>
                  <span>{errorMessage}</span>
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
