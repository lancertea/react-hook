// useCallback会返回一个函数的 memoized（记忆的） 值；
// 在依赖不变的情况下，多次定义的时候，返回的值是相同的；
// const memoizedCallback = useCallback(
//   () => {
//     doSomething(a, b);
//   },
//   [a, b]
// );

//useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。


import React, { useState, useCallback } from 'react'

export default function CallbackHook() {
  const [count, setCount] = useState(0);

  const increment1 = useCallback(function increment() {
    console.log('执行increment1函数');
    setCount(count + 1);
  }, []);

  const increment2 = function() {
    console.log('执行increment2函数');
    setCount(count + 1);
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  )
}