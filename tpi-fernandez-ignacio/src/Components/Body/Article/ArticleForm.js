import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Filter from "../Filter/Filter";
import "./ArticleForm.css";

const ArticleForm = ({ getArticles }) => {
  const [inputName, setInputName] = useState("");
  const changeInputNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const [inputText, setInputText] = useState("");
  const changeInputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const [inputPrice, setInputPrice] = useState(0);
  const changeInputPriceHandler = (event) => {
    if (event.target.value > 0) {
      setInputPrice(event.target.value);
    } else {
      setInputPrice(0);
    }
  };

  const [inputCategory, setInputCategory] = useState("Teclado");
  const changeInputCategoryHandler = (event) => {
    setInputCategory(event);
  };

  const [inputImage, setInputImage] = useState("");
  const changeInputImageHandler = (event) => {
    setInputImage(event.target.value);
  };

  const [errors, setErrors] = useState({});

  const validateArticle = (articleData) => {
    let errorsValidation = { ...errors };

    if (articleData.Name === "") {
      errorsValidation = { ...errorsValidation, Name: "Campo obligatorio." };
    } else if (articleData.Name.length < 3) {
      errorsValidation = { ...errorsValidation, Name: "El título del libro debe tener al menos 3 letras." };
    } else {
      delete errorsValidation.title;
    }
  };

  const submitHandler = () => {
    const articleData = {
      Name: inputName,
      Text: inputText,
      Category: inputCategory,
      Image: inputImage,
      Price: inputPrice,
    };
    // const errorsValidation = validateArticle(articleData);

    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Articles");
    addDoc(queryCollection, articleData).then(({ id }) => console.log(id));

    setInputName("");
    setInputText("");
    setInputCategory("Category1");
    setInputImage("");
    setInputPrice("");
    getArticles();
  };

  return (
    <div className="ArticleForm">
      <h3>Agregar Producto</h3>
      <div className="Inputs">
        <div>
          <label>Titulo </label>
          <input value={inputName} onChange={changeInputNameHandler} type="text" />
        </div>
        <div>
          <label>Precio $</label>
          <input value={inputPrice} onChange={changeInputPriceHandler} type="number" />
        </div>
        <div>
          <label>Descripcion </label>
          <input value={inputText} onChange={changeInputTextHandler} type="text" />
        </div>
        <div>
          <Filter filterCategory={inputCategory} categoryChanged={changeInputCategoryHandler} label="Categoria" all={false} />
        </div>
        <div>
          <label>Imagen </label>
          <input type={"url"} onChange={changeInputImageHandler}></input>
        </div>
      </div>
      <button className="Submit_Button" onClick={submitHandler}>
        Aceptar
      </button>
    </div>
  );
};

export default ArticleForm;
