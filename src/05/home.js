import React, { useReducer } from 'react'
import { counterReducer } from './counter'

export default function Home() {
  //const [state, dispatch] = useReducer(reducer, initialArg, init);
  //接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。
  const [state, dispatch] = useReducer(counterReducer, {counter: 100});

  return (
    <div>
      <h2>当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({type: "increment"})}>+1</button>
      <button onClick={e => dispatch({type: "decrement"})}>-1</button>
    </div>
  )
}