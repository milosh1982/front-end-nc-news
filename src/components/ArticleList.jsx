import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../api-utils";
import SortBar from "./SortBar";

function ArticleList() {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useState("votes");
  const [sortButtons, setSortButtons] = useState("asc");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (searchParams === "votes" || searchParams === "created_at") {
    useEffect(() => {
      setIsLoading(true);
      getArticles(topic, searchParams, sortButtons).then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
    }, [topic, searchParams, sortButtons]);
  } else if (searchParams === "comment_count") {
    useEffect(() => {
      setIsLoading(false);
    }, [topic, searchParams, sortButtons]);
  }
  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <SortBar
        setSearchParams={setSearchParams}
        articles={articles}
        setArticles={setArticles}
        searchParams={searchParams}
        setSortButtons={setSortButtons}
        sortButtons={sortButtons}
      />

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
    </>
  );
}

export default ArticleList;
