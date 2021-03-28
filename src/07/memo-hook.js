//useMemo返回的也是一个 memoized（记忆的） 值(useCallback是函数)
//把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
//如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
import React, { useState, useMemo } from 'react';

function calcNum(count) {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += i;
  }
  console.log("计算一遍");
  return total
}

export default function MemoHook() {
  const [count, setCount] = useState(10);
  const [isLogin, setIsLogin] = useState(true);

  const total = useMemo(() => {
    return calcNum(count);
  }, [count]);

  return (
    <div>
      <h2>数字和: {total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      {isLogin && <h2>learn hook</h2>}
      <button onClick={e => setIsLogin(!isLogin)}>切换</button>
    </div>
  )
}