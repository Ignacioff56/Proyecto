import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Outlet } from "react-router-dom";
import { getFirestore, doc, collection, getDoc, getDocs } from "firebase/firestore";
import LoadingScreen from "./LoadingScreen";
import "./ArticleDetailScreen.css";

const ArticleDetail = ({}) => {
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  const getArticle = () => {
    setLoading(true);
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "Articles", id);
    getDoc(queryDoc).then((res) => {
      setArticle(res.data());
      setLoading(false);
    });
  };

  useEffect(() => {
    //Traer un objeto
    getArticle();
  }, []);

  return (
    <div className="ArticleDetail">
      {loading === true ? (
        <div className="LoadingScreen">
          <LoadingScreen />
        </div>
      ) : (
        <div>
          <h2>{article.Name}</h2>
          <p className="DetailCategory">Categoria: {article.Category}</p>
          <p>{article.Text}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
