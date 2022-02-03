import Expenses from "./components/Expenses/Expenses";

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

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
