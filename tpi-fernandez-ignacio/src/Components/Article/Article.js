import "./Article.css";

const Article = ({ articleData }) => {
  return (
    <div className="Article">
      <h2>{articleData.Name}</h2>
      <p className="Category">Categoria: {articleData.Category}</p>
      <p>{articleData.Text}</p>
    </div>
  );
};

export default Article;
