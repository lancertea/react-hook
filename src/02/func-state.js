import React, { useState }  from 'react'

export default function FuncState() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(()=>0);
  const handleCount = ()=>{
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
  }

  const handleNum = ()=>{
    setNum((preNum)=>preNum+1);
    setNum((preNum)=>preNum+1);
    setNum((preNum)=>preNum+1);
    setNum((preNum)=>preNum+1);
  }
  return (
    <div>
       <h2>当前计数count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>+1</button>
        <button onClick={()=>{setCount(count-1)}}>-1</button>
        {/* 会合并 */}
        <button onClick={handleCount}>+?</button>
        <h2>当前计数num: {num}</h2>
        <button onClick={()=>{setNum((preNum)=>preNum+1)}}>+1</button>
        <button onClick={()=>{setNum((preNum)=>preNum-1)}}>-1</button>
        {/* 不会合并 */}
        <button onClick={handleNum}>+?</button>
    </div>
  )
}
