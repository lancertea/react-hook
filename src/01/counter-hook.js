//Hook的简单使用
// 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
// 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。
import React, { useState }  from 'react'

export default function CounterHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
       <h2>当前计数: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>+1</button>
        <button onClick={()=>{setCount(count-1)}}>-1</button>
    </div>
  )
}
