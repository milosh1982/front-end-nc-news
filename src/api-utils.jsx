import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://milos-nc-news.onrender.com/api",
});

export function getArticles(topic, searchParams, sortButtons) {
  return ncNews
    .get("/articles", {
      params: { topic: topic, sort_by: searchParams, order: sortButtons },
    })
    .then(({ data }) => {
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
export function patchVotesPlus(id) {
  const patchRequestBody = { inc_votes: 1 };
  return ncNews.patch(`/articles/${id}`, patchRequestBody).then(({ data }) => {
    return data;
  });
}
export function patchVotesMinus(id) {
  const patchRequestBody = { inc_votes: -1 };
  return ncNews.patch(`/articles/${id}`, patchRequestBody).then(({ data }) => {
    return data;
  });
}
export function addComment(body, id) {
  const postRequestBody = { username: "grumpy19", body: body };
  return ncNews
    .post(`/articles/${id}/comments`, postRequestBody)
    .then(({ data }) => {
      return data.comment;
    });
}
export function getUsers() {
  return ncNews.get(`/users`).then(({ data }) => {
    return data.users;
  });
}
