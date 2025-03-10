import styles from './article.module.css';

export default async function Articles() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
    if (!res.ok) {
      throw new Error('Error al obtener los artículos');
    }
    const articles = await res.json();

    const userRes = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!userRes.ok) {
      throw new Error('Error al obtener los usuarios');
    }
    const users = await userRes.json();

    return (
      <div className={styles.grid}>
        {articles.map((article) => {
          const user = users.find(user => user.id === article.userId);
          const userPhoto = user ? `https://i.pravatar.cc/150?u=${user.id}` : 'https://via.placeholder.com/150';

          return (
            <div key={article.id} className={styles.card}>
              <img src={userPhoto} alt={user ? user.name : 'User'} className={styles.avatar} />
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>; // Mostrar mensaje de error si la API falla
  }
}
