import React from 'react';
import styles from './QuickOverview.module.css';

const QuickOverview: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'career-profile') {
      // Scroll to top of page for Career Profile
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to section with Quick Navigation height offset for other sections
      const element = document.getElementById(sectionId);
      const quickNavElement = document.querySelector(`.${styles.quickOverview}`) as HTMLElement;
      
      if (element && quickNavElement) {
        const elementPosition = element.offsetTop;
        const quickNavHeight = quickNavElement.offsetHeight;
        const offsetPosition = elementPosition - quickNavHeight - 10; // Extra 10px padding
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const quickNavItems = [
    { id: 'career-profile', label: 'Career Profile', icon: 'fas fa-user' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'availability', label: 'Availability', icon: 'fas fa-calendar-check' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-tools' },
    { id: 'references', label: 'References', icon: 'fas fa-users' }
  ];

  return (
    <div className={styles.quickOverview}>
      <div className={styles.overviewHeader}>
        <h2 className={styles.title}>
          <i className="fas fa-compass"></i>
          Quick Navigation
        </h2>
        <p className={styles.subtitle}>Jump to any section</p>
      </div>
      
      <div className={styles.navGrid}>
        {quickNavItems.map((item) => (
          <button
            key={item.id}
            className={styles.navItem}
            onClick={() => scrollToSection(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickOverview;
