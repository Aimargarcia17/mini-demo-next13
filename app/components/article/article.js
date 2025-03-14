// app/components/article/page.js
import styles from './article.module.css';
import ArticlesClient from './articlesClient';

async function fakeDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Articles() {
  // await fakeDelay(2000);
  try {
    // Usamos la paginación para traer solo los primeros 9 artículos
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=9');
    if (!res.ok) {
      throw new Error('Error al obtener los artículos');
    }
    const articlesData = await res.json();

    const userRes = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!userRes.ok) {
      throw new Error('Error al obtener los usuarios');
    }
    const usersData = await userRes.json();

    // Pasamos solo los primeros 9 artículos al componente ArticlesClient
    return <ArticlesClient initialArticles={articlesData} usersData={usersData} />;
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
