import React, { useState } from 'react';
import profilePic from '../assets/profile-pic.jpg';

const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kaleian54@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-box">
          <div className="about-photo-wrap">
            <img src={profilePic} alt="Ian Kale" loading="lazy" />
          </div>

          <div className="about-details">
            <h3 className="about-lead">
              Frontend developer focused on clean interfaces, dependable code, and fast web experiences.
            </h3>

            <p className="about-body-text">
              I specialize in developing responsive web applications using React, TypeScript, and Tailwind CSS.
              My goal is simple: build products that look great, load fast, and are easy for both users and teams to work with.
            </p>

            <div className="about-facts-list">
              <div className="fact-item">
                <i className="lni lni-map-marker"></i>
                <span>Based in Nairobi, Kenya (open to remote worldwide)</span>
              </div>
              <div className="fact-item">
                <i className="lni lni-code-alt"></i>
                <span>Specialized in React, TypeScript, and component-driven UI</span>
              </div>
              <div className="fact-item">
                <i className="lni lni-briefcase"></i>
                <span>Available for frontend developer roles &amp; freelance projects</span>
              </div>
            </div>

            <div className="about-action-row">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCopyEmail}
              >
                <i className="lni lni-clipboard"></i>
                {copied ? 'Copied to clipboard!' : 'Copy Email Address'}
              </button>
              <a href="#contact" className="btn btn-primary">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
