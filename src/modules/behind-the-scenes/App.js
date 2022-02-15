// react
import React, { useState } from "react";

// styles
import "./App.css";

// components
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleHandler = () => {
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleHandler}>Toggle Paragraph</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
};

export default App;
