import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const { theme, onConsoleText, addTwoNumbers, getData } =
    useContext(ThemeContext);

  const handleClick = () => {
    try {
      const response = addTwoNumbers(15, 5);
      console.log("Result : ", response);
    } catch (error) {
      console.log("ERROR WHILE ADDING 2 NUMBERS : ", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await getData();
      console.log("RESPONSE : ", response);
    } catch (error) {
      console.log("ERROR WHILE FETCHING THE DATA : ", error);
    }
  };

  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      <h3>Theme Context</h3>
      <button onClick={onConsoleText} type="button">
        Click
      </button>
      <button type="button" onClick={handleClick}>
        Add 2 Numbers
      </button>
      <button type="button" onClick={fetchData}>
        Get Data
      </button>
    </div>
  );
};

export default Box;
