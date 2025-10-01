import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/site.config';
import styles from './ResumePage.module.css';

const ResumePage = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className={styles.resumePage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.subtitle}>
          Download or view my complete professional resume
        </p>
      </div>

      <div className={styles.actions}>
        <a 
          href={siteConfig.cvPath} 
          className={styles.actionButton}
          download="Daniel_Le_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-download"></i>
          Download PDF
        </a>
        <button 
          className={`${styles.actionButton} ${styles.secondary}`}
          onClick={() => setShowPdf(!showPdf)}
        >
          <i className={showPdf ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          {showPdf ? 'Hide Preview' : 'View Online'}
        </button>
        <Link 
          to="/" 
          className={`${styles.actionButton} ${styles.secondary}`}
        >
          <i className="fas fa-home"></i>
          Back to Portfolio
        </Link>
      </div>

      {showPdf && (
        <div className={styles.pdfContainer}>
          <object 
            data={siteConfig.cvPath}
            type="application/pdf"
            className={styles.pdfEmbed}
          >
            <div className={styles.fallbackMessage}>
              <p>
                PDF preview is not supported in your browser. 
                <br />
                <a 
                  href={siteConfig.cvPath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click here to download the PDF directly
                </a>
              </p>
            </div>
          </object>
        </div>
      )}
    </div>
  );
};

export default ResumePage;