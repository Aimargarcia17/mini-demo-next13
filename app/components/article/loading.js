import styles from './articleLoading.module.css';
export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <p>Cargando...</p>
      <div className={styles.spinner}></div>
    </div>
  );
}
