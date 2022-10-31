import Articles from "../Body/Article/Articles";

const ArticleScreen = (currentScreenHandler) => {
  return (
    <div className="ArticleScreen">
      <Articles currentScreenHandler={currentScreenHandler} />
    </div>
  );
};

export default ArticleScreen;
