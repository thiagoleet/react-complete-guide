// react
import { useState, useRef } from "react";

// styles
import "./AddUser.css";

// components
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Label from "../../UI/Label/Label";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Pleas enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);

    // reset fields
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" ref={nameInputRef} />
          <Label htmlFor="age">Age (Years)</Label>
          <Input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
