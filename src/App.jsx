import "./App.css";
import Article from "./pages/Article";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/topics/:topic" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
