import axios from "axios";

export function getArticles() {
  return axios
    .get("https://milos-nc-news.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
}
