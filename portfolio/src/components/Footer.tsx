import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <p>&copy; {currentYear} Ian Kale. All rights reserved.</p>

          <ul className="footer-links-list">
            <li><a href="https://github.com/kaleian" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/ian-kale-1a5159270" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.twitter.com/iankale" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;