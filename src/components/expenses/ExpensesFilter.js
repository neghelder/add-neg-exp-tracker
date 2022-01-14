import './ExpensesFilter.css';

function ExpensesFilter({ onChangeFilter, currentFilter }) {
  function yearSelectChangeHandler(evt) {
    onChangeFilter(evt.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select name="year" value={currentFilter} onChange={yearSelectChangeHandler}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
