import Section from '../components/Section';
import Badge from '../components/Badge';
import { skillCategories } from '../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <Section 
      title="Skills & Expertise" 
      subtitle="Professional competencies in hospitality and restaurant operations"
      id="skills"
    >
      <div className={styles.skillsContainer}>
        {skillCategories.map((category) => (
          <div key={category.id} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <i className={category.id === 'hospitality-kitchen' ? 'fas fa-utensils' : 'fas fa-users'}></i>
              {category.title}
            </h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant={category.id === 'hospitality-kitchen' ? 'primary' : 'accent'}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;