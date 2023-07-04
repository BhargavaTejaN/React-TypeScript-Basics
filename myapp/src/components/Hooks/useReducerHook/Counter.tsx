import React, { useReducer } from "react";

const initialState = {
  countValue: 0,
};

type StateTypeProps = {
    countValue : number
}

type updateAction = {
    type : 'increment' | 'decrement',
    payload : number
}

type ResetAction = {
    type : 'reset'
}

type ActionTypeProps = updateAction | ResetAction

const reducer = (state : StateTypeProps, action : ActionTypeProps) => {
  switch (action.type) {
    case "increment":
      return { countValue: state.countValue + action.payload };
    case "decrement":
      return { countValue: state.countValue - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
        <h2>Count : {state.countValue}</h2>
        <button type="button" onClick={() => dispatch({type : 'decrement',payload : 1})}>Decrease</button>
        <button type="button" onClick={() => dispatch({type : 'reset'})}>Reset</button>
        <button type="button" onClick={() => dispatch({type : 'increment',payload : 1})}>Increase</button>
    </div>
  )
};

export default Counter;
