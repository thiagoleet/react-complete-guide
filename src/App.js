// react
import { Fragment, useState } from "react";

// components
import ListItem from "./components/ListItem";
import List from "./components/List";
import Button from "./components/Button";

// apps
import ExpensesApp from "./modules/expenses";
import GoalListApp from "./modules/goal-list";
import UsersApp from "./modules/users";
import TypicalPageApp from "./modules/a-typical-page";

const App = () => {
  const [chosenApp, setChosenApp] = useState(null);

  const appListData = [
    {
      id: "Expense",
      app: <ExpensesApp />,
    },
    {
      id: "Goal List",
      app: <GoalListApp />,
    },
    {
      id: "Users",
      app: <UsersApp />,
    },
    {
      id: "A Typical Page",
      app: <TypicalPageApp />,
    },
  ];

  const choseAppHandler = (item) => {
    setChosenApp(item.app);
  };

  const appList = (
    <List>
      {appListData.map((item) => {
        return (
          <ListItem key={item.id}>
            <Button onClick={choseAppHandler.bind(null, item)}>
              {item.id}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );

  return <Fragment>{chosenApp || appList}</Fragment>;
};
export default App;
