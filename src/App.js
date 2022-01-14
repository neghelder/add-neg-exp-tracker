import { useState } from "react";

import NewExpense from "./components/newExpense/NewExpense";
import ExpenseList from "./components/expenses/ExpenseList";

const initExpenses = [
  { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
];

function App() {
  const [expenses, setExpenses] = useState(initExpenses);

  function onAddExpense(expense) {
    setExpenses((previous) => [expense, ...previous]);
  }

  return (
    <>
      <NewExpense onAddExpense={onAddExpense} />
      <ExpenseList items={expenses} />
    </>
  );
}

export default App;
