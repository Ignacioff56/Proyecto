import "./Filter.css";

const Filter = ({ filterCategory, categoryChanged, label, all }) => {
  const selectChangeHandler = (event) => {
    categoryChanged(event.target.value);
  };

  return (
    <div className="Filter_Div">
      <label>{label} </label>
      <select value={filterCategory} onChange={selectChangeHandler}>
        {all && <option value="All">Todos</option>}
        <option value="Category1">Categoria 1</option>
        <option value="Category2">Categoria 2</option>
        <option value="Category3">Categoria 3</option>
      </select>
    </div>
  );
};

export default Filter;
