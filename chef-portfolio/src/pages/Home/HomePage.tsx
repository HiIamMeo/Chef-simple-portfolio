import About from '../../sections/About';
import Experience from '../../sections/Experience';
import Education from '../../sections/Education';
import Availability from '../../sections/Availability';
import Skills from '../../sections/Skills';
import References from '../../sections/References';
import QuickOverview from '../../components/QuickOverview';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <QuickOverview />
      <div className={styles.section}>
        <About />
      </div>
      <div className={styles.section}>
        <Experience />
      </div>
      <div className={styles.section}>
        <Education />
      </div>
      <div className={styles.section}>
        <Availability />
      </div>
      <div className={styles.section}>
        <Skills />
      </div>
      <div className={styles.section}>
        <References />
      </div>
    </div>
  );
};

export default HomePage;