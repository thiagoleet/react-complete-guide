// styles
import "./UsersLists.css";

// components
import Card from "../../UI/Card/Card";
import List from "../../UI/List/List";
import ListItem from "../../UI/List/ListItem";

const UsersList = (props) => {
  const usersListContent = props.users.map((user) => (
    <ListItem key={user.id}>
      {user.name} ({user.age} years old)
    </ListItem>
  ));

  return (
    <Card className="users">
      <List>{usersListContent}</List>;
    </Card>
  );
};

export default UsersList;
