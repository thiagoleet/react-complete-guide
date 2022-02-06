// react
import { useState } from "react";

// styles
import "./NewExpense.css";

// components
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };

    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setAddNewExpense((prevState) => !prevState);
  };

  const addNewExpenseBtn = (
    <p>
      <button type="button" onClick={addNewExpenseHandler}>
        Add New Expense
      </button>
    </p>
  );

  const expenseForm = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onHideForm={addNewExpenseHandler}
    />
  );

  return (
    <div className="new-expense">
      {addNewExpense && addNewExpenseBtn}
      {!addNewExpense && expenseForm}
    </div>
  );
};

export default NewExpense;
