import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../ui/Card";
import ExpensesChart from "./ExpensesChart";

import "./ExpenseList.css";

function ExpenseList({ items }) {
  const [filter, setFilter] = useState("all");

  function onChangeFilter(filterData) {
    setFilter(filterData);
  }

  // eslint-disable-next-line max-len
  const filteredExpenses = items.filter(
    (expense) => filter === "all" || expense.date.getFullYear().toString() === filter
  );

  function sortByDate(a, b) {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }

    return 0;
  }

  let expenseListContent = <p className="expense-list__fallback">No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    expenseListContent = filteredExpenses
      .sort(sortByDate)
      .map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ));
  }

  return (
    <Card className="expense-list">
      <ExpensesFilter currentFilter={filter} onChangeFilter={onChangeFilter} />
      <ExpensesChart expenses={filteredExpenses} />
      {expenseListContent}
    </Card>
  );
}

export default ExpenseList;
