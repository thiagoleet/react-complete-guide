// react
import { useState, Fragment } from "react";

// styles
import "./UsersApp.css";

// components
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersLists/UsersLists";

const UsersApp = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    const id = crypto.randomUUID();
    setUsersList((prevState) => [...prevState, { id, name, age }]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </Fragment>
  );
};

export default UsersApp;
