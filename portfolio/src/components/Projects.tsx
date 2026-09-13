import React, { useState } from 'react';
import type { Project } from '../types';
import ProjectModal from './ProjectModal';

import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import sbpImage from '../assets/SBP.jpg';
import barImage from '../assets/kaleon-bar-logo.png';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Kaleon Bar & Lounge',
      category: 'Full Stack',
      role: 'Full Stack Developer',
      impact: 'Realtime Booking & Menu Sync',
      description: 'Hospitality platform with realtime Supabase database, interactive menu management, and table bookings.',
      longDescription: 'A production-grade web application built for Kaleon Bar & Lounge to digitize their guest experience. Features full table reservation management, dynamic cocktail and dish catalogs powered by a PostgreSQL/Supabase backend, and responsive mobile-first navigation.',
      features: [
        'Live reservation booking with guest confirmation flows',
        'Supabase PostgreSQL database with row-level security & realtime updates',
        'Dynamic digital menu with category filtering and dietary indicators',
        'Optimized asset pipeline with lightning-fast load times',
      ],
      tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
      image: barImage,
      liveDemo: 'https://smartplanner.vercel.app/',
      viewCode: 'https://github.com/kaleian/smartplanner',
      featured: true,
    },
    {
      title: 'E-Commerce Store & Reservations',
      category: 'Full Stack',
      role: 'Frontend & Architecture Lead',
      impact: 'Zero-Latency Cart & Checkout',
      description: 'Online store featuring interactive cart state, search filtering, and seamless reservation checkout.',
      longDescription: 'An end-to-end commerce application engineered with modular architecture. Incorporates persistent shopping basket states, instant catalog filtering, dynamic modal previews, and smooth transitions tailored for high conversion rates.',
      features: [
        'Global state management for cart, checkout, and inventory counters',
        'Instantaneous client-side search and faceted tag filtering',
        'Modular CSS Modules ensuring strict styling isolation',
        'Accessible checkout modal with comprehensive form validation',
      ],
      tags: ['React', 'TypeScript', 'CSS Modules'],
      image: project1,
      liveDemo: 'https://sweet-sour-reservations-hub.vercel.app/',
      viewCode: 'https://github.com/kaleian/sweet-sour-reservations-hub',
      featured: true,
    },
    {
      title: 'Smart Budget Planner',
      category: 'Client Application',
      role: 'Lead Developer',
      impact: 'Instant Visual Analytics',
      description: 'Financial dashboard with real-time expense calculations, category breakdowns, and dynamic reports.',
      longDescription: 'A personal finance workspace enabling users to track expenditures, forecast monthly savings, and categorize transactions. Backed by mathematical breakdown algorithms and SVG visualization charts for rapid insights.',
      features: [
        'Automated balance computation and dynamic category spend breakdown',
        'Configurable monthly budget ceilings with progress indicator alerts',
        'REST API integration for currency exchange rates and persistence',
        'Exportable transaction histories for personal record keeping',
      ],
      tags: ['JavaScript', 'Python', 'CSS3', 'REST API'],
      image: sbpImage,
      liveDemo: 'https://smartbudgetplanner.vercel.app/',
      viewCode: 'https://github.com/kaleian/smartbudgetplanner',
    },
    {
      title: 'Phone Store Web App',
      category: 'Frontend Web',
      role: 'Frontend Developer',
      impact: 'Interactive Spec Comparison',
      description: 'Product catalog application with device spec comparisons, dynamic filtering, and mobile-first design.',
      longDescription: 'A consumer-facing electronics showcase featuring side-by-side technical specification comparisons, device colorway switchers, and optimized responsive layouts designed for mobile shoppers.',
      features: [
        'Interactive device spec matrix comparing performance, battery, and cameras',
        'Real-time attribute filtering by price tier, brand, and storage',
        'Fluid image galleries with tactile thumbnail selectors',
        'Sub-second first contentful paint and responsive mobile menus',
      ],
      tags: ['JavaScript', 'HTML5', 'CSS3'],
      image: project2,
      liveDemo: 'https://advert-website.vercel.app/',
      viewCode: 'https://github.com/kaleian/Advert-website',
    },
    {
      title: 'Thrift Shop Boutique',
      category: 'Frontend Web',
      role: 'UI/UX Developer',
      impact: 'Curated Visual Showcase',
      description: 'Curated fashion showcase with optimized image galleries and intuitive product navigation.',
      longDescription: 'An editorial fashion portal showcasing vintage and sustainable apparel collections. Built with modern CSS Grid layouts, tactile card hover states, and seamless browsing across curated drops.',
      features: [
        'Multi-column asymmetric CSS Grid gallery for high visual impact',
        'Lookbook micro-interactions with smooth thumbnail zoom effects',
        'Categorized clothing collections with instant tag navigation',
        'Lightweight, vanilla JS architecture ensuring maximum responsiveness',
      ],
      tags: ['JavaScript', 'CSS Grid', 'UX Design'],
      image: project3,
      liveDemo: 'https://thrift-shop-kappa.vercel.app/',
      viewCode: 'https://github.com/kaleian/Thrift-shop',
    },
    {
      title: 'Developer Experience Portfolio',
      category: 'Frontend Web',
      role: 'Frontend Developer',
      impact: '100 Lighthouse Performance',
      description: 'Clean portfolio template emphasizing responsive layouts, accessible markup, and smooth CSS transitions.',
      longDescription: 'A developer portfolio template crafted with emphasis on typography hierarchy, dark-mode ergonomics, semantic HTML structure, and clean CSS variables.',
      features: [
        'Semantic HTML5 structure achieving 100/100 Lighthouse accessibility score',
        'CSS custom properties tokens for unified theme styling',
        'Zero framework bloat with rapid vanilla JavaScript interactions',
        'Direct contact integrations and downloadable resume hooks',
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: project4,
      liveDemo: 'https://kaleian.github.io/Official-portfolio.github.io/',
      viewCode: 'https://github.com/kaleian/Official-portfolio.github.io',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend Web', 'Client Application'];

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Projects I've Built</h2>
        </div>

        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-showcase-grid">
          {filtered.map((item, idx) => (
            <article
              key={idx}
              className="work-card"
              onClick={() => setSelectedProject(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(item);
                }
              }}
            >
              <div className="work-card-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                {item.featured && (
                  <span className="work-card-badge">Featured</span>
                )}
                <div className="work-card-hover-indicator">
                  <span>Click for Details</span>
                </div>
              </div>

              <div className="work-card-content">
                <div className="work-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="work-tag">{tag}</span>
                  ))}
                </div>

                <h3 className="work-title">{item.title}</h3>
                <p className="work-desc">{item.description}</p>

                <div className="work-actions">
                  <div className="action-icons-group">
                    <button
                      type="button"
                      className="icon-action-btn action-details"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(item);
                      }}
                      aria-label="View Details"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span className="action-tooltip">View Details</span>
                    </button>

                    <a
                      href={item.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn action-live"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Live Demo"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span className="action-tooltip">Live Demo</span>
                    </a>

                    <a
                      href={item.viewCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-action-btn action-code"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Source Code"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="action-tooltip">Source Code</span>
                    </a>
                  </div>

                  <span className="work-meta-category">{item.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Popup Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
