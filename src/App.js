// react
import { lazy, Suspense, useState } from "react";

// components
import ListItem from "./components/ListItem";
import List from "./components/List";
import Button from "./components/Button";

// apps
const ExpensesApp = lazy(() => import("./modules/expenses"));
const GoalListApp = lazy(() => import("./modules/goal-list"));
const UsersApp = lazy(() => import("./modules/users"));
const TypicalPageApp = lazy(() => import("./modules/a-typical-page"));
const BehindTheScenesApp = lazy(() => import("./modules/behind-the-scenes"));
const UserListApp = lazy(() => import("./modules/user-list-class"));
const StarWarsApp = lazy(() => import("./modules/starwars"));

const App = () => {
  const [chosenApp, setChosenApp] = useState(null);

  const appListData = [
    {
      id: "Expense",
      app: <ExpensesApp />,
      description: "Basic of React components",
    },
    {
      id: "Goal List",
      app: <GoalListApp />,
      description: "Using useState hook",
    },
    {
      id: "Users",
      app: <UsersApp />,
      description: "Using loops",
    },
    {
      id: "A Typical Page",
      app: <TypicalPageApp />,
      description: "Using useContext hook",
    },
    {
      id: "Behind the Scenes",
      app: <BehindTheScenesApp />,
      description: "Undestanding what's going on behind the scenes in React",
    },
    {
      id: "User List",
      app: <UserListApp />,
      description: "Class based components",
    },
    {
      id: "Star Wars",
      app: <StarWarsApp />,
      description: "Using HTTP Requests",
    },
  ];

  const choseAppHandler = (item) => {
    setChosenApp(item.app);
  };

  const loadingFallback = <p>Loading...</p>;

  const appList = (
    <List>
      {appListData.map((item) => {
        return (
          <ListItem key={item.id}>
            <Button onClick={choseAppHandler.bind(null, item)}>
              {item.id}
              <small style={{ display: "block" }}>({item.description})</small>
            </Button>
          </ListItem>
        );
      })}
    </List>
  );

  return <Suspense fallback={loadingFallback}>{chosenApp || appList}</Suspense>;
};
export default App;
