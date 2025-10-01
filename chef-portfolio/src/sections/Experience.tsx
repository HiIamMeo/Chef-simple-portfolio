import { useState } from 'react';
import Section from '../components/Section';
import { experiences, Experience as ExperienceType } from '../data/experience';
import styles from './Experience.module.css';

const Experience = () => {
  const [filter, setFilter] = useState<'all' | 'hospitality' | 'it'>('hospitality');

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'all') return true;
    return exp.type === filter;
  });

  const getTypeLabel = (type: ExperienceType['type']) => {
    switch (type) {
      case 'hospitality':
        return 'Hospitality';
      case 'it':
        return 'IT';
      default:
        return 'Other';
    }
  };

  return (
    <Section 
      title="Work Experience" 
      subtitle="Professional journey in hospitality and IT"
      id="experience"
    >
      <div className={styles.typeFilter}>
        <button 
          className={`${styles.filterButton} ${filter === 'hospitality' ? styles.active : ''}`}
          onClick={() => setFilter('hospitality')}
        >
          Hospitality Experience
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All Experience
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'it' ? styles.active : ''}`}
          onClick={() => setFilter('it')}
        >
          Other Experience
        </button>
      </div>

      {filteredExperiences.map((exp) => (
        <div key={exp.id} className={styles.experienceItem}>
          <div className={styles.header}>
            <h3 className={styles.jobTitle}>{exp.title}</h3>
            <div className={styles.company}>{exp.company}</div>
            <div className={styles.meta}>
              <div className={styles.location}>
                <i className="fas fa-map-marker-alt"></i>
                {exp.locationLink ? (
                  <a 
                    href={exp.locationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.locationLink}
                  >
                    {exp.location}
                  </a>
                ) : (
                  exp.location
                )}
              </div>
              <div className={styles.period}>
                <i className="fas fa-calendar-alt"></i>
                {exp.period}
                {exp.isCurrentRole && (
                  <span className={styles.currentRole}>
                    <i className="fas fa-circle"></i>
                    Current
                  </span>
                )}
              </div>
              <div className={styles.period}>
                <i className="fas fa-tag"></i>
                {getTypeLabel(exp.type)}
              </div>
            </div>
          </div>
          <ul className={styles.responsibilities}>
            {exp.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default Experience;