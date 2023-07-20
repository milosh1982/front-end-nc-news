import React, { useState } from "react";

function SortBar({
  setSearchParams,
  articles,
  setArticles,
  searchParams,
  setSortButtons,
  sortButtons,
}) {
  function handleChange(event) {
    if (event.target.value === "comment_count") {
      const sortedArticle = articles.sort((a, b) => {
        return a.comment_count - b.comment_count;
      });
      return setArticles(() => {
        return [...sortedArticle];
      });
    } else {
      setSearchParams(event.target.value);
    }
  }
  const onOptionChange = (event) => {
    setSortButtons(event.target.value);
  };

  return (
    <div>
      <select value={searchParams} onChange={handleChange}>
        <option value={"created_at"}>sort by date</option>
        <option value={"comment_count"}>sort by comment count</option>
        <option value={"votes"}>sort by votes</option>
      </select>
      <div>
        <input
          type="radio"
          value="asc"
          name="order"
          checked={sortButtons === "asc"}
          onChange={onOptionChange}
        />{" "}
        ASC
        <input
          type="radio"
          value="desc"
          name="order"
          checked={sortButtons === "desc"}
          onChange={onOptionChange}
        />{" "}
        DESC
      </div>
    </div>
  );
}

export default SortBar;
