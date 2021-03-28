//Effect Hook 可以让你来完成一些类似于class中生命周期的功能
// 类似于网络请求、手动更新DOM、一些事件的监听，都是React更新DOM的一些副作用（Side Effects)，对于完成这些功能的Hook被称之为 Effect Hook
//在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。
//原来网络请求、事件监听、手动修改DOM，这些往往都会放在componentDidMount中，使用Effect Hook，我们可以将它们分离到不同的useEffect中
//React 将按照 effect 声明的顺序依次调用组件中的每一个 effect

// 使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行
// 默认情况下，无论是第一次渲染之后，还是每次更新之后，都会执行这个回调函数





import React, { useState, useEffect } from 'react'

//type EffectCallback = () => (void | (() => void | undefined))
//React 会在组件更新和卸载的时候执行清除操作
export default function HookTitle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `当前计数: ${count}`;
    console.log("每次DOM更新时会回调");

    return () => {
      console.log("DOM被移除时会回调");
    }
  })

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>
    </div>
  )
}
