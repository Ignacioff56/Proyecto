import "./Filter.css";

const Filter = ({ filterCategory, categoryChanged }) => {
  const selectChangeHandler = (event) => {
    categoryChanged(event.target.value);
  };

  return (
    <div className="Filter">
      <div className="Filter_Control">
        <label>Filtrar por categoria </label>
        <select value={filterCategory} onChange={selectChangeHandler}>
          <option value="All">Todos</option>
          <option value="Ventanas">Ventanas</option>
          <option value="Puertas">Puertas</option>
          <option value="Decoraciones">Decoracinoes</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
