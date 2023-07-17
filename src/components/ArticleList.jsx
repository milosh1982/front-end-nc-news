import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://milos-nc-news.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data.articles);
      });
  }, []);

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
