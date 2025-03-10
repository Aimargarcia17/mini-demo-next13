// app/components/dashboard/dashboard.js
import React, { Suspense } from 'react';
import Article from '../article/article'; // Asegúrate de que la ruta sea correcta
import Loading from '../article/loading'; // Importa el componente de carga
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <main className={styles.mainContent}>
        <h2 className={styles.heading}>Bienvenido al Dashboard</h2>
        <p className={styles.description}>Aquí puedes ver la información relevante.</p>

        {/* Articles */}
        <Suspense fallback={<Loading />}>
          <Article />
        </Suspense>
      </main>
    </div>
  );
}
