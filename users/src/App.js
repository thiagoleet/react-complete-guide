// react
import React, { useState } from "react";

// components
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersLists/UsersLists";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    const id = crypto.randomUUID();
    setUsersList((prevState) => [...prevState, { id, name, age }]);
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </React.Fragment>
  );
};

export default App;
