import React from "react";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import { useState } from "react";
function Home() {
  const [reset, setReset] = useState(false);
  return (
    <div>
      <Header setReset={setReset} />
      <ArticleList reset={reset} setReset={setReset} />
    </div>
  );
}

export default Home;
