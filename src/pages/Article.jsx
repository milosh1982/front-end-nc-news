import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../api-utils";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticlesById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <h1>{article.title}</h1>
      <p>By: {article.author}</p>
      <img className="article_img" src={article.article_img_url}></img>
      <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
}

export default Article;
