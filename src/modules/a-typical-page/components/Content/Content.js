// react
import { useContext } from "react";

// styles
import classes from "./Content.module.css";

// context
import AuthContext from "../../context/auth-context";

// components
import Login from "../Login/Login";
import Home from "../Home/Home";

const Content = () => {
  const ctx = useContext(AuthContext);

  return (
    <main className={classes.main}>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </main>
  );
};

export default Content;
