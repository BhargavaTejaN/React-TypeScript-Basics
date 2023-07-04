import React,{useContext} from 'react'
import {CounterContext} from './CounterContext'

const Counter2 = () => {

  const {state,dispatch} = useContext(CounterContext);

  return (
    <div>
      <h1>Counter2</h1>
      <h2>Count : {state.count}</h2>
      <button type="button" onClick={() => dispatch({type : 'decrement',payload : 1})}>Decrease</button>
      <button type="button" onClick={() => dispatch({type : 'reset',})}>Reset</button>
      <button type="button" onClick={() => dispatch({type : 'increment',payload : 1})}>Increase</button>
    </div>
  )
}

export default Counter2