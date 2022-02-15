// react
import React from "react";

// components
import MainHeader from "./components/MainHeader/MainHeader";

// context
import { AuthContextProvider } from "./context/auth-context";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <AuthContextProvider>
      <MainHeader />
      <Content />
    </AuthContextProvider>
  );
};

export default App;
