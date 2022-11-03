import "./Article.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Article = ({ articleData }) => {
  const Navigate = useNavigate();
  return (
    <div className="Article">
      <h2>{articleData.Name}</h2>
      <p className="Category">Categoria: {articleData.Category}</p>
      <p>{articleData.Text}</p>
      <Link className="btn" to={`/Articles/${articleData.id}`}>
        Ver en detalle
      </Link>
    </div>
  );
};

export default Article;
