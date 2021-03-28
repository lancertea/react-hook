import React, { useState, useEffect } from 'react';

export default function EffectPerformance() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("修改DOM");
  }, [count])
  //参数二：该useEffect在哪些state发生变化时，才重新执行；（受谁的影响）

  useEffect(() => {
    console.log("监听事件");
  
    return () => {
      console.log("取消监听");
    }
  }, [])
  //如果一个函数我们不希望依赖任何的内容时，也可以传入一个空的数组 []

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <h2>{show ? 'lancer' : 'zsy'}</h2>
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}