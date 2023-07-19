import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../api-utils";

function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, [topic]);
  if (isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <div className="articles-box">
      {articles.map((article) => {
        return (
          <Link
            to={`/article/${article.article_id}`}
            key={article.article_id}
            className="articles-link"
          >
            <ArticleCard
              key={article.title}
              title={article.title}
              img={article.article_img_url}
              comment_count={article.comment_count}
              votes={article.votes}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default ArticleList;
