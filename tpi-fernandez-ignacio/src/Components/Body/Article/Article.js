import "./Article.css";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Article = ({ articleData, getArticles, loading }) => {
  const Navigate = useNavigate();
  const DeleteHandler = () => {
    const querydb = getFirestore();
    const docRef = doc(querydb, "Articles", articleData.id);
    loading(true);
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
        getArticles();
      })
      .catch((error) => {
        console.log(error);
        getArticles();
      });
  };

  const authStatus = useContext(AuthContext);

  return (
    <div className="Article">
      <h2>{articleData.Name}</h2>
      <p className="Category">Categoria: {articleData.Category}</p>

      <img className="Image" src={articleData.Image} alt="Imagen no encontrada"></img>
      <button className="Button" onClick={() => Navigate(`/Articles/${articleData.id}`)}>
        Ver
      </button>
      {authStatus.role === "Admin" && (
        <button className="DeleteButton" onClick={DeleteHandler}>
          Borrar
        </button>
      )}
      {console.log(articleData.image)}
      <p className="Price">${articleData.Price}</p>
    </div>
  );
};

export default Article;
