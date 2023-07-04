import React from "react";
import { CounterContextProvider } from "./CounterContext";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

const MainParentUseContextReducer = () => {
  return (
    <div>
      <CounterContextProvider>
        <Counter1 />
        <Counter2 />
      </CounterContextProvider>
    </div>
  );
};

export default MainParentUseContextReducer;
