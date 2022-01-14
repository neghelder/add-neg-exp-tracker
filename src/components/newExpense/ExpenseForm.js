import { useState } from 'react/cjs/react.development';
import './ExpenseForm.css';

function ExpenseForm({ onSaveExpense, onCancel }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function titleChangeHandler(evt) {
    setTitle(evt.target.value);
  }

  function amountChangeHandler(evt) {
    setAmount(evt.target.value);
  }

  function dataChangeHandler(evt) {
    setDate(evt.target.value);
  }

  function addExpenseHandler(evt) {
    evt.preventDefault();

    const expenseData = {
      title,
      amount: parseFloat(amount),
      date: new Date(date),
    };

    setTitle('');
    setAmount('');
    setDate('');

    onSaveExpense(expenseData);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0,01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} min="2019-01-01" onChange={dataChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={addExpenseHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
