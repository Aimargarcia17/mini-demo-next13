"use client";

import { useState, useEffect, useRef, useTransition } from "react";
import { getArticles } from "@/app/actions/getArticles";
import styles from "./article.module.css";

export default function ArticlesClient({ initialArticles }) {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const [isPending, startTransition] = useTransition();

  // Función para cargar más artículos desde el servidor
  const loadMoreArticles = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    startTransition(async () => {
      try {
        const nextArticles = await getArticles(page);

        setArticles((prev) => [...prev, ...nextArticles]);
        setHasMore(nextArticles.length > 0);
        setPage((prev) => prev + 1);
      } catch (error) {
        console.error("Error loading more articles:", error);
      }
      setLoading(false);
    });
  };

  // Detectar cuando el usuario llega al final de la página
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreArticles();
        }
      },
      { rootMargin: "100px" }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [articles]);
  return (
    <div className={styles.grid}>
      {articles.map((article) => {
        const userPhoto = `https://i.pravatar.cc/150`;
  
        return (
          <div key={article.id} className={styles.card}>
            <img src={userPhoto} className={styles.avatar} />
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
