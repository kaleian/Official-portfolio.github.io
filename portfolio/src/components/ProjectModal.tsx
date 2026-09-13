import React, { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
          title="Close (Esc)"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Media Banner with Gradient Vignette */}
        <div className="modal-media">
          <img src={project.image} alt={project.title} />
          <div className="modal-media-overlay" />
          
          <div className="modal-media-badges">
            <span className="modal-status-badge">
              <span className="pulse-dot" />
              Live Project
            </span>
            <span className="modal-badge category">{project.category}</span>
            {project.featured && (
              <span className="modal-badge featured">Featured</span>
            )}
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {/* Title Header */}
          <div className="modal-header-block">
            <h3 id="modal-project-title" className="modal-title">
              {project.title}
            </h3>
          </div>

          {/* Quick Specs Strip */}
          <div className="modal-specs-strip">
            <div className="modal-spec-item">
              <span className="spec-label">Role</span>
              <span className="spec-value">{project.role || 'Frontend Developer'}</span>
            </div>
            <div className="spec-divider" />
            <div className="modal-spec-item">
              <span className="spec-label">Category</span>
              <span className="spec-value">{project.category}</span>
            </div>
            {project.impact && (
              <>
                <div className="spec-divider" />
                <div className="modal-spec-item">
                  <span className="spec-label">Highlight</span>
                  <span className="spec-value accent">{project.impact}</span>
                </div>
              </>
            )}
          </div>

          {/* Project Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview & Architecture</h4>
            <p className="modal-description">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features / Achievements */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Capabilities & Features</h4>
              <div className="modal-features-grid">
                {project.features.map((item, idx) => (
                  <div key={idx} className="modal-feature-card">
                    <span className="feature-check-badge">✓</span>
                    <span className="feature-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies & Tools</h4>
            <div className="modal-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="modal-tag-pill">
                  <span className="tag-dot" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer with Action CTAs and Keyboard Hint */}
          <div className="modal-footer">
            <div className="modal-ctas">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary modal-btn"
              >
                <span>Visit Live Application</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>

              <a
                href={project.viewCode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary modal-btn"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View Source</span>
              </a>
            </div>

            <div className="modal-footer-meta">
              <button
                type="button"
                className="btn btn-secondary modal-btn close-action-btn"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
