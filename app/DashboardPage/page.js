// pages/dashboard.js
'use client'
import { Suspense } from 'react';
import Dashboard from '../../components/dashboard/dashboard';  // Asegúrate de que la ruta sea correcta
import Sidebar from '../../components/sidebar/sidebar';
import Loading from '../../components/sidebar/loading';
import styles from './dashboardPage.module.css';
export default function DashboardPage() {
  return (
    <div className={styles.pageContainer}>
      <Suspense fallback={<Loading />}>
        <Sidebar />
      </Suspense>
      <Dashboard />
    </div>
  );
}
