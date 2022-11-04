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
        <option value="Teclado">Teclado</option>
        <option value="Mouse">Mouse</option>
        <option value="Auriculares">Auriculares</option>
        <option value="Otros">Otros</option>
      </select>
    </div>
  );
};

export default Filter;
