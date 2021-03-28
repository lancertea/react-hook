import React, { useEffect, useState } from 'react';
//useLayoutEffect看起来和useEffect非常的相似，事实上他们也只有一点区别而已：
//useEffect会在渲染的内容更新到DOM上后执行，不会阻塞DOM的更新；
//useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新；
export default function Effect() {
  const [count, setCount] = useState(0);

  //初始渲染了两次
  useEffect(() => {
    if (count === 0) {
      setCount(Math.random()*200)
    }
  }, [count]);

  return (
    <div>
      <h2>当前数字: {count}</h2>
      <button onClick={e => setCount(0)}>随机数</button>
    </div>
  )
}