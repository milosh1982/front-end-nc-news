import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://milos-nc-news.onrender.com/api",
});

export function getArticles() {
  return ncNews.get("/articles").then(({ data }) => {
    return data.articles;
  });
}
export function getArticlesById(id) {
  return ncNews.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
}
export function getCommentsById(id) {
  return ncNews.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
}
