import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import styles from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <div className={styles.content}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;