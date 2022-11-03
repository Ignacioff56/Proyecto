import { useState } from "react";
import Filter from "../Filter/Filter";
import "./ArticleForm.css";

const ArticleForm = () => {
  const [inputName, setInputName] = useState("");
  const changeInputNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const [inputText, setInputText] = useState("");
  const changeInputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const [inputCategory, setInputCategory] = useState("");
  const changeInputCategoryHandler = (event) => {
    setInputCategory(event);
  };

  return (
    <div className="ArticleForm">
      <div className="Inputs">
        <div>
          <label>Titulo </label>
          <input value={inputName} onChange={changeInputNameHandler} type="text" />
        </div>
        <div>
          <label>Descripcion </label>
          <input value={inputText} onChange={changeInputTextHandler} type="text" />
        </div>
        <div>
          <Filter filterCategory={inputCategory} categoryChanged={changeInputCategoryHandler} label="Categoria" all={false} />
        </div>
      </div>
      <button className="Submit_Button">Aceptar</button>
    </div>
  );
};

export default ArticleForm;
