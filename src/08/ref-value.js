import React, { useState, useEffect, useRef } from 'react';
//使用ref保存上一次的某一个值
//useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变
//它创建的是一个普通 Javascript 对象。而 useRef() 和自建一个 {current: ...} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象

let preValue = 0;

export default function RefValue() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  
  
  //界面渲染完才执行
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  //useRef在组件重新渲染时，返回的依然是之前的ref对象，但是current是可以修改的
  return (
    <div>
      <h2>前一次的值: {countRef.current}</h2>
      <h2>这一次的值: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}