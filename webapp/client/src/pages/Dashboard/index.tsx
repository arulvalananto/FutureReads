import styles from './index.module.scss';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles['dashboard-sidebar']}>
        <Sidebar />
      </div>
      <div className={styles['dashboard-body']}></div>
    </div>
  );
};

export default Dashboard;
