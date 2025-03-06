import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Usuario" className={styles.input} />
          <input type="password" placeholder="Contraseña" className={styles.input} />
          <button type="submit" href="/hola"className={styles.button}>Ingresar</button>
        </form>
      </div>
    </div>
  );
} 