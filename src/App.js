// styles
import "./App.css";

// components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2021, 3, 28),
      title: "Toilet Paper",
      amount: 294.67,
    },
    {
      id: "e2",
      date: new Date(2021, 4, 28),
      title: "New TV",
      amount: 294.67,
    },
    {
      id: "e3",
      date: new Date(2021, 5, 28),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e4",
      date: new Date(2021, 9, 28),
      title: "React Course",
      amount: 294.67,
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App", expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
