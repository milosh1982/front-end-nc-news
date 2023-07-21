import "./App.css";
import Article from "./pages/Article";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import ErrorHandling from "./components/ErrorHandling";
export const UserContext = createContext(null);
function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:article_id" element={<Article />} />
          <Route path="/topics/:topic" element={<Home />}></Route>
          <Route path="*" element={<ErrorHandling />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
