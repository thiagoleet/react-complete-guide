// styles
import "./App.css";

// data
import { DUMMY_USERS } from "./data";

// components
import UserFinder from "./components/Users/UserFinder/UserFinder";
import UsersContext from "./store/users-context";

function App() {
  const usersContext = { users: DUMMY_USERS };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
