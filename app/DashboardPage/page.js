// pages/dashboard.js
import Dashboard from '../../components/dashboard/dashboard';  // Asegúrate de que la ruta sea correcta
import Sidebar from '../../components/sidebar/sidebar';
import styles from './dashboardPage.module.css';
export default function DashboardPage() {
  return (
    <div className={styles.pageContainer}>
      
      <Sidebar />
      <Dashboard />
    </div>
  );
}
