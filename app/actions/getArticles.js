"use server";

export async function getArticles(page) {
  const limit = 9; // Número de artículos por página
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);

  if (!res.ok) {
    throw new Error("Error al obtener los artículos");
  }

  return await res.json();
}
