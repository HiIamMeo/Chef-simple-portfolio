import Section from '../components/Section';
import styles from './References.module.css';

const References = () => {
  return (
    <Section 
      title="References" 
      subtitle="Professional references from previous employers"
      id="references"
    >
      <div className={styles.referencesContainer}>
        <div className={styles.availabilityNotice}>
          <div className={styles.noticeIcon}>
            <i className="fas fa-envelope"></i>
          </div>
          <div className={styles.noticeContent}>
            <h3 className={styles.noticeTitle}>References Available Upon Request</h3>
            <p className={styles.noticeDescription}>
              Professional references from previous supervisors and managers are available upon request. 
              Please contact me directly to obtain reference details.
            </p>
            <div className={styles.contactPrompt}>
              <i className="fas fa-phone"></i>
              <span>Call: 0421 470 854</span>
              <span className={styles.separator}>|</span>
              <i className="fas fa-envelope"></i>
              <span>Email: ltpd175@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className={styles.referenceTypes}>
          <div className={styles.referenceType}>
            <i className="fas fa-briefcase"></i>
            <h4>Hospitality References</h4>
            <p>Former supervisors and managers from restaurant and hospitality positions</p>
          </div>
          <div className={styles.referenceType}>
            <i className="fas fa-laptop"></i>
            <h4>IT References</h4>
            <p>Previous supervisors from IT support and technical roles</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default References;