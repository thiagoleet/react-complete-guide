// react
import React, { useContext } from "react";

// styles
import classes from "./App.module.css";

// components
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

// context
import AuthContext, { AuthContextProvider } from "./context/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <MainHeader />
      <main className={classes.main}>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </AuthContextProvider>
  );
};

export default App;
