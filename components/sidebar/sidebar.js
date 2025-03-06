
// components/Sidebar.js
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <h1 className={styles.title}>Dashboard</h1>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Inicio</li>
        <li className={styles.menuItem}>Perfil</li>
        <li className={styles.menuItem}>Configuración</li>
        <li className={styles.menuItem}>Salir</li>
      </ul>
    </nav>
  );
}
