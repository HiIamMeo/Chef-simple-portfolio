import { siteConfig } from '../data/site.config';
import LinkIcon from './LinkIcon';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const initials = siteConfig.name
    .split(' ')
    .map(name => name.charAt(0))
    .join('');

  return (
    <div className={styles.sidebar}>
      <div className={styles.profileSection}>
        <div className={styles.avatar}>
          {initials}
        </div>
        <h1 className={styles.name}>{siteConfig.name}</h1>
        <p className={styles.title}>{siteConfig.title}</p>
        <p className={styles.location}>{siteConfig.location}</p>
      </div>

      <div className={styles.contactInfo}>
        <a href={`tel:${siteConfig.phone}`} className={styles.contactItem}>
          <i className="fas fa-phone"></i>
          {siteConfig.phone}
        </a>
        <a href={`mailto:${siteConfig.email}`} className={styles.contactItem}>
          <i className="fas fa-envelope"></i>
          {siteConfig.email}
        </a>
      </div>

      <a 
        href={siteConfig.cvPath} 
        className={styles.cvButton}
        download="Daniel_Le_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-download"></i>
        Download CV
      </a>

      <nav className={styles.socialLinks}>
        {siteConfig.links.linkedin && (
          <LinkIcon
            href={siteConfig.links.linkedin}
            iconClass="fab fa-linkedin"
            label="LinkedIn"
            className={styles.socialLink}
          />
        )}
        {siteConfig.links.facebook && (
          <LinkIcon
            href={siteConfig.links.facebook}
            iconClass="fab fa-facebook"
            label="Facebook"
            className={styles.socialLink}
          />
        )}
        {siteConfig.links.instagram && (
          <LinkIcon
            href={siteConfig.links.instagram}
            iconClass="fab fa-instagram"
            label="Instagram"
            className={styles.socialLink}
          />
        )}
        {siteConfig.links.github && (
          <LinkIcon
            href={siteConfig.links.github}
            iconClass="fab fa-github"
            label="GitHub"
            className={styles.socialLink}
          />
        )}
        {siteConfig.links.portfolio && (
          <LinkIcon
            href={siteConfig.links.portfolio}
            iconClass="fas fa-globe"
            label="Portfolio"
            className={styles.socialLink}
          />
        )}
      </nav>
    </div>
  );
};

export default Sidebar;