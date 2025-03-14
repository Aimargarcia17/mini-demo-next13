import ArticlesClient from "./articlesClient";
import { getArticles } from "@/app/actions/getArticles";

export default async function Articles() {
  try {
    const initialArticles = await getArticles(1); // Obtener solo la primera página

    return <ArticlesClient initialArticles={initialArticles} />;
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
