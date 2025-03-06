import Article from '../article/article';
import styles from './dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h2 className={styles.heading}>Bienvenido al Dashboard</h2>
        <p className={styles.description}>Aquí puedes ver la información relevante.</p>

        {/* Articles */}
        <Article />
      </main>
    </div>
  );
}
