import { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);

  function onSaveExpense(data) {
    onAddExpense({ id: Math.floor(Math.random() * 1000), ...data });
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function onStopEditing() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && <ExpenseForm isEditing={isEditing} onCancel={onStopEditing} onSaveExpense={onSaveExpense} />}
    </div>
  );
}

export default NewExpense;
