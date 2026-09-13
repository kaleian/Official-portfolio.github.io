import React from 'react';
import profilePic from '../assets/pic.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-split">

          {/* Left Column */}
          <div className="hero-intro">
            <p className="hero-role">Frontend Software Engineer</p>

            <h1 className="hero-title-main">
              Hi, I'm{' '}
              <span className="text-highlight">Ian Kale</span>.
            </h1>

            <p className="hero-tagline">
              I build fast, accessible, and beautifully crafted web
              experiences — from pixel-perfect UIs to scalable front-end systems.
            </p>

            <div className="hero-actions-bar">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>

            {/* Stat strip */}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-value">3+</span>
                <span className="stat-label">Years experience</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat">
                <span className="stat-value">20+</span>
                <span className="stat-label">Projects shipped</span>
              </div>
              <div className="stat-divider" />
              <div className="hero-stat">
                <span className="stat-value">React</span>
                <span className="stat-label">Primary stack</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="hero-showcase">
            <div className="hero-profile-card">
              <div className="profile-image-container">
                <img
                  src={profilePic}
                  alt="Ian Kale - Frontend Developer"
                  loading="eager"
                />
              </div>
              <div className="profile-card-footer">
                <div>
                  <p className="profile-footer-name">Ian Kale</p>
                  <p className="profile-footer-role">Frontend Developer • Nairobi, KE</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
