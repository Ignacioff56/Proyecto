import Article from "../Body/Article/Article";
import Filter from "../Body/Filter/Filter";
import LoadingScreen from "./LoadingScreen";
import ArticleForm from "../Body/Article/ArticleForm";

import { useContext, useEffect, useState } from "react";

import { getFirestore, collection, getDocs } from "firebase/firestore";

import "./ArticleScreen.css";
import { AuthContext } from "../Context/AuthContext";

const Articles = () => {
  const authStatus = useContext(AuthContext);
  const [filterCategory, setFilterCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const filterChangedHandler = (category) => {
    setFilterCategory(category);
  };

  const [articlesList, setArticlesList] = useState([]);
  const articleListHandler = (List) => {
    setArticlesList(List);
  };

  const getArticles = () => {
    setLoading(true);
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Articles");
    const Articlearray = getDocs(queryCollection)
      .then((res) => res.docs.map((article) => ({ id: article.id, ...article.data() })))
      .then((res) => {
        articleListHandler(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  const articlesMapped = articlesList
    .filter((article) => (filterCategory === "All" ? article : article.Category === filterCategory))
    .map((article) => <Article key={article.id} articleData={article} />);

  return (
    <div>
      {authStatus.role === "Admin" && <ArticleForm />}

      <Filter filterCategory={filterCategory} categoryChanged={filterChangedHandler} label="Filtrar por categoria" all={true} />

      {loading === true ? <LoadingScreen /> : <div className="Articles_List">{articlesMapped}</div>}
    </div>
  );
};

export default Articles;
