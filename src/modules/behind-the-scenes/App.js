// react
import React, { useState, useCallback } from "react";

// styles
import "./App.css";

// components
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

const App = () => {
  console.log("App", "is running");

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <p>
        <Button onClick={allowToggleHandler}>Allow toggling</Button>
      </p>
      <p>
        <Button onClick={toggleHandler}>Toggle Paragraph</Button>
      </p>
      <DemoOutput show={showParagraph} />
    </div>
  );
};

export default App;
