import { useNavigate } from "react-router-dom";
import { useParams, Outlet } from "react-router-dom";

const ArticleDetail = ({ articleData }) => {
  const Navigate = useNavigate();
  const params = useParams();
  return (
    <div className="Article">
      <h2>{articleData.Name}</h2>
      <p className="Category">Categoria: {articleData.Category}</p>
      <p>{articleData.Text}</p>
      <button onClick={Navigate("/Articles")}>Volver</button>
    </div>
  );
};

export default ArticleDetail;
