import styles from './article.module.css';
// Este componente es un Server Component
export default async function Articles() {
  // Hacer la llamada a la API directamente en el servidor
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');  // URL de tu API
    if (!res.ok) {
      throw new Error('Error al obtener los artículos');
    }
    const articles = await res.json();

    return (
      <div className={styles.grid}>
        {articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>; // Mostrar mensaje de error si la API falla
  }
}
