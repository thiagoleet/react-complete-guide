// styles
import "./Expenses.css";

// components
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";

function Expenses(props) {
  const expenseItems = props.expenses.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
