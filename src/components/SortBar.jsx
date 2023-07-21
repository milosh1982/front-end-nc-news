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
    setSearchParams(event.target.value);
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
      <div className="radio-buttons">
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
