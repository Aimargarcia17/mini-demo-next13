'use client'
import { useEffect } from 'react';
import styles from './sidebarLoading.module.css';
export default function Loading() {
  useEffect(() => {
    console.log('Sidebar está cargando...');
  }, []);
  return (
    <div className={styles.loadingContainer}>
      <p>Cargando...</p>
      {/* Puedes usar un spinner si lo prefieres */}
      <div className={styles.spinner}></div>
    </div>
  );
}
