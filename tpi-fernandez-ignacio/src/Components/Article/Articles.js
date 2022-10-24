import Article from "./Article";

import "./Articles.css";

const Articles = () => {
  const ARTICLE_LIST = [
    { id: 0, Name: "Ventana Pequeña", Text: "Ventana Pequeña de Metal", Category: "Ventanas" },
    { id: 1, Name: "Puerta de madera", Text: "Puerta de Madera de Roble", Category: "Puertas" },
    { id: 2, Name: "Gnomo de Jardin", Text: "Gnomo de Jardin malvado", Category: "Decoraciones" },
    { id: 3, Name: "Ventana Grande", Text: "Ventana Grande de Madera", Category: "Ventanas" },
    { id: 4, Name: "Puerta de Metal", Text: "Puerta de Metal reforzada", Category: "Puertas" },
    { id: 5, Name: "Puerta de algarrobo ", Text: "Puerta de madera de algarrobo", Category: "Puertas" },
  ];

  const articlesMapped = ARTICLE_LIST.map((article) => <Article key={article.id} articleData={article} />);

  return <div className="Articles_List">{articlesMapped}</div>;
};

export default Articles;
