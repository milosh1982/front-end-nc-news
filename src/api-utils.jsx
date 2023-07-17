import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://milos-nc-news.onrender.com/api",
});

export function getArticles() {
  return ncNews.get("/articles").then(({ data }) => {
    return data.articles;
  });
}
