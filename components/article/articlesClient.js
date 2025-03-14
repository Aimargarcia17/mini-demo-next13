'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './article.module.css';

export default function ArticlesClient({ initialArticles, usersData }) {
  const [articles, setArticles] = useState(initialArticles); 
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true); 
  const [page, setPage] = useState(2);
  const observerRef = useRef(null);

  const loadMoreArticles = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`);
      if (!res.ok) {
        throw new Error('Error al obtener más artículos');
      }
      const nextArticles = await res.json();

      setArticles((prev) => [...prev, ...nextArticles]);

      setHasMore(nextArticles.length > 0);

      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Error loading more articles:', error);
    }
    setLoading(false);
  };

  // Detectar cuando el usuario llega al final de la página
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreArticles();
        }
      },
      {
        rootMargin: '100px', // Detectar cuando el elemento está a 100px del borde inferior de la vista
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current); // Comenzamos a observar el elemento
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current); // Dejamos de observar el elemento al desmontar el componente
      }
    };
  }, [articles, page]); // Dependemos de los artículos y de la página

  return (
    <div className={styles.grid}>
      {articles.map((article) => {
        const user = usersData.find((user) => user.id === article.userId);
        const userPhoto = user ? `https://i.pravatar.cc/150?u=${user.id}` : 'https://via.placeholder.com/150';

        return (
          <div key={article.id} className={styles.card}>
            <img src={userPhoto} alt={user ? user.name : 'User'} className={styles.avatar} />
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        );
      })}
      {loading && <div>Loading more articles...</div>}
      {!hasMore && <div>No more articles to load.</div>}
      <div ref={observerRef}></div> {/* Este es el div que actuará como el "punto de referencia" para el IntersectionObserver */}
    </div>
  );
}
