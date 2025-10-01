import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { weeklyAvailability, workPreferences, availabilitySummary, AvailabilitySchedule } from '../data/availability';
import styles from './Availability.module.css';

const Availability: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <i className={`fas fa-check-circle ${styles.statusIcon} ${styles.available}`}></i>;
      case 'limited':
        return <i className={`fas fa-clock ${styles.statusIcon} ${styles.limited}`}></i>;
      case 'unavailable':
        return <i className={`fas fa-times-circle ${styles.statusIcon} ${styles.unavailable}`}></i>;
      default:
        return <i className={`fas fa-question-circle ${styles.statusIcon}`}></i>;
    }
  };

  const formatDayName = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section
      title="Availability"
      subtitle="Current work schedule and preferences"
      className={styles.availabilitySection}
      id="availability"
    >
      <div className={styles.scheduleContainer}>
        {/* Weekly Schedule */}
        <div className={styles.weeklySchedule} id="weekly-schedule">
          <h3>Weekly Schedule</h3>
          <div className={styles.scheduleGrid}>
            {weeklyAvailability.map((day: AvailabilitySchedule) => (
              <div key={day.day} className={styles.dayItem}>
                <div className={styles.dayHeader}>
                  <span className={styles.dayName}>{formatDayName(day.day)}</span>
                  {getStatusIcon(day.status)}
                </div>
                <div className={styles.availability}>
                  <span>{day.details}</span>
                </div>
                {day.timeRestriction && (
                  <div className={styles.timeRestriction}>
                    <i className="fas fa-info-circle"></i> {day.timeRestriction}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Work Preferences */}
        <div className={styles.preferences} id="work-preferences">
          <h3>Work Preferences</h3>
          <div className={styles.preferencesGrid}>
            <div className={styles.preferenceItem}>
              <div className={styles.preferenceTitle}>
                <i className="fas fa-clock"></i>
                Preferred Shifts
              </div>
              <div className={styles.preferenceContent}>
                {workPreferences.preferredShifts.join(', ')}
              </div>
            </div>

            <div className={styles.preferenceItem}>
              <div className={styles.preferenceTitle}>
                <i className="fas fa-calendar-alt"></i>
                Flexibility
              </div>
              <div className={styles.preferenceContent}>
                {workPreferences.flexibility}
              </div>
            </div>

            <div className={styles.preferenceItem}>
              <div className={styles.preferenceTitle}>
                <i className="fas fa-play"></i>
                Start Date
              </div>
              <div className={styles.preferenceContent}>
                {workPreferences.notice}
              </div>
            </div>

            <div className={styles.preferenceItem}>
              <div className={styles.preferenceTitle}>
                <i className="fas fa-car"></i>
                Transportation
              </div>
              <div className={styles.preferenceContent}>
                {workPreferences.transportation}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Availability Highlights */}
      <div className={styles.highlights} id="highlights">
        <h3 className={styles.highlightsTitle}>
          <i className="fas fa-star"></i>
          Availability Highlights
        </h3>
        <ul className={styles.highlightsList}>
          {availabilitySummary.highlights.map((highlight: string, index: number) => (
            <li key={index} className={styles.highlightItem}>
              <i className={`fas fa-check ${styles.highlightIcon}`}></i>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </Section>
  );
};

export default Availability;