import React from 'react';

import reactIcon from '../assets/react.svg';
import jsIcon from '../assets/javascript.png';
import cssIcon from '../assets/css.png';
import htmlIcon from '../assets/html.jpeg';
import sqlIcon from '../assets/sql.png';
import phpIcon from '../assets/php.png';
import pythonIcon from '../assets/python.png';

interface TechItem {
  name: string;
  role: string;
  icon: string;
}

const Skills: React.FC = () => {
  const tools: TechItem[] = [
    { name: 'React 19', role: 'Frontend Framework', icon: reactIcon },
    { name: 'TypeScript', role: 'Language', icon: reactIcon },
    { name: 'JavaScript', role: 'ES6+ Core', icon: jsIcon },
    { name: 'Tailwind & CSS', role: 'Responsive Styling', icon: cssIcon },
    { name: 'HTML5', role: 'Semantic Web', icon: htmlIcon },
    { name: 'Supabase', role: 'Backend & DB', icon: sqlIcon },
    { name: 'MySQL', role: 'Relational Database', icon: sqlIcon },
    { name: 'Python', role: 'Scripting', icon: pythonIcon },
    { name: 'PHP', role: 'Server Scripting', icon: phpIcon },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Toolkit</span>
          <h2 className="section-title">Technologies &amp; Tools</h2>
        </div>

        <div className="skills-visual-grid">
          {tools.map((tech, idx) => (
            <div key={idx} className="tech-card">
              <div className="tech-icon">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <span className="tech-role">{tech.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
