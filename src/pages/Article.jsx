import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { getArticlesById } from "../api-utils";
import Comments from "../components/Comments";
import VoteButtons from "../components/VoteButtons";

function Article() {
  const navigate = useNavigate();
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticlesById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) {
          navigate("*");
        }
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <h2>{article.title}</h2>
      <p>By: {article.author}</p>
      <img
        className="article_img"
        src={article.article_img_url}
        alt={article.title}
      ></img>
      <p>{article.body}</p>
      <VoteButtons article_id={article_id} votes={article.votes} />

      <Comments article_id={article_id} />
    </div>
  );
}

export default Article;
