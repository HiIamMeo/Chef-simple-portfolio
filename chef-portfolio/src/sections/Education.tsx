import Section from '../components/Section';
import { education } from '../data/skills';
import styles from './Education.module.css';

const Education = () => {
  return (
    <Section 
      title="Education" 
      subtitle="Academic background and qualifications"
      id="education"
    >
      <div className={styles.educationList}>
        {education.map((edu) => (
          <div key={edu.id} className={styles.educationItem}>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.institution}>{edu.institution}, {edu.location}</div>
            <div className={styles.educationMeta}>
              <span><i className="fas fa-calendar-alt"></i> {edu.period}</span>
              {edu.status && <span><i className="fas fa-graduation-cap"></i> {edu.status}</span>}
              {edu.distinction && (
                <span className={styles.distinction}>{edu.distinction}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;